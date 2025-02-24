import {transporter} from "./email.config.js"
export const sendVerificationEmail = async (email, otp) => {
    try {
         await transporter.sendMail({
            from: '"Ajay Godara" <ajaygodara84557@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify Your Email - [www.suds.in]", // Subject line
            html: `
            <div style="font-family: Arial, sans-serif; text-align: center; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
                <h2 style="color: #4CAF50;">Verify Your Email</h2>
                <p>Dear User,</p>
                <p>Thank you for signing up! Use the OTP below to verify your email:</p>
                <h3 style="color: #333; font-size: 24px; letter-spacing: 2px;">${otp}</h3>
                <p>This OTP is valid for <b>10 minutes</b>. Do not share this code with anyone.</p>
                <p>If you didn’t request this, please ignore this email.</p>
                <br>
                <p>Best regards,<br><b>www.suds.in</b></p>
            </div>
        `  });
          
     } catch (error) {
        throw new Error('Failed to send otp verification email');
     }
}
export const sendCongEmail = async (email, name) => {
    try {
         await transporter.sendMail({
            from: '"Ajay Godara" <ajaygodara84557@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "🎉 Congratulations! Welcome to [ www.suds.in]",
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #4CAF50;">🎉 Congratulations, ${name}!</h2>
                    <p>We're excited to have you with us.</p>
                    <p>You have successfully joined <b>[suds]</b>. Explore our services and make the most out of it.</p>
                    <br>
                    <p>Best regards,<br><b>[www.suds.in]</b></p>
                </div>
            `,
          });
          
     } catch (error) {
        throw new Error('Failed to send congratulation  email');
     }
}

export const userRegisteredemail = async (userEmail, userName) => {
    try {
         await transporter.sendMail({
            from: '"Ajay Godara" <ajaygodara84557@gmail.com>', // sender address
            to: "<ajaygodara84557@gmail.com>", // Send notification to admin
            subject: "🆕 New User Registration - [www.suds.in]",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #4CAF50;">🚀 New User Registered!</h2>
                    <p><strong>User Name:</strong> ${userName}</p>
                    <p><strong>Email:</strong> ${userEmail}</p>
                    <br>
                    <p>This user has just signed up on <b>[www.suds.in]</b>. You can review their details in the admin panel.</p>
                    <br>
                    <p>Best regards,<br><b>[wwww.suds.in ] Team</b></p>
                </div>
            `,
          });
          
     } catch (error) {
        throw new Error('Failed to send email to us');
     }
}
export const sendResetPasswordEmail  = async (userEmail, resetLink) => {
    try {
         await transporter.sendMail({
            from: '"Ajay Godara" <ajaygodara84557@gmail.com>', // sender address
            to: userEmail, // Send notification to admin
            subject: "🔐 Reset Your Password",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
              <h2 style="color: #007bff;">Reset Your Password</h2>
              <p>Hello,</p>
              <p>We received a request to reset your password. Click the button below to reset it:</p>
              <div style="text-align: center; margin: 20px 0;">
                <a href="${resetLink}" 
                  style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">
                  Reset Password
                </a>
              </div>
              <p>If you did not request a password reset, please ignore this email.</p>
              <p>This link will expire in <b>15 minutes</b>.</p>
              <br>
              <p>Best regards,<br><b>Suds Team</b></p>
            </div>
            `,
          });
          
     } catch (error) {
        throw new Error('Failed to send email to us');
     }
}
