const nodemailer = require('nodemailer')

const sendMail = async (from, SenderName, to, groupName) => {
    try {
        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'explore.shamin7860@gmail.com',
                pass: 'gorl tcrg iwfw ofua'
            }
        })
        const mailOptions = {
            from: 'explore.shamin7860@gmail.com',
            to: to,
            subject: 'Your friend wants to split bill with you.',
            text: `This invitation is sent to you by your friend ${SenderName} to join the group "${groupName}" for bill split.\nHere are the instructions to register your self in the Expense Sharing App : \n 1. Visit the website \n 2. Enter your name, email, phone number, and secure password for registration\n 3. After registration, Login with the same credentials.\n 4. You are successfully logged in the app.`,
        }
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    } catch (error) {

    }
};

module.exports = { sendMail }

