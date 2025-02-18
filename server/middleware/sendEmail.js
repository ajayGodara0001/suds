import {transporter} from "./email.config.js"
export const sendVerificationEmail = async (email, otp) => {
    try {
         await transporter.sendMail({
            from: '"Ajay Godara" <ajaygodara84557@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Email Verification OTP ", // Subject line
            text: "Email Verification OTP", // plain text body
            html:`<h1>your verification code is : ${otp}</h1>` // html body
          });
          
     } catch (error) {
        throw new Error('Failed to send email');
     }
}

