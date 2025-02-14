import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import axios from "axios"
import { sendMailer } from "../middleware/sendEmail.js";
// Register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const key = process.env.KEY
    if (!name || !email || !password) {
        return res.status(400).json({ message: "all credentials required " });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`)
        .then(async (response) => {

            if (response.data.deliverability === 'UNDELIVERABLE') {
                return res.status(400).json({
                    message: "email not exist",
                })
            }
            const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword, verificationCode: verificationCode });

            await sendMailer(user.email, verificationCode)

            return res.status(200).json({ message: "User registered successfully", user: { id: user._id, name, email } });

        })
        .catch(error => {
            return res.status(400).json({
                message: "email api expired"
            })

        });
}

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "all credentials required " });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }


    if(user.verified === false){
        res.status(400).json({ message: "not verified please signup again" })
        await User.deleteOne({email})
        return
    }

    // Send user data (without password) for localStorage
    res.status(200).json({ message: "login successfully", user: { id: user._id, name: user.name, email: user.email } });

};



// verification of email
export const verifyUserController = async (req, res) => {
    try {
        const { verificationCode } = req.body
        const userexist = await User.findOne({ verificationCode })
        if (!userexist) {
            res.status(400).json({ message: "wrong otp" })
            return
        }
        userexist.verified = true
        userexist.code = null
        await userexist.save()
        await sendMailer(userexist.email, "Login successfull welcome you ")
        res.status(200).json({ message: "email verified registered successfully", user: userexist })
        

    } catch (error) {
        console.log("verification: ", error.message)
        res.status(400).json({ message: "verification failed" })
    }
}