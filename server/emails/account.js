const sgMail = require("@sendgrid/mail")
const keys = require('../config/keys.js')


sgMail.setApiKey(keys.sendgridKey)



const sendWelcomeEmail = (email) => {
    sgMail.send({
        to: email,
        from: "mapforaction@gmail.com",
        subject: "Thanks for contributing to MapForAction",
        text: "Thank you for contributing to MapForAction. Your incident has been approved!"
    })
}

module.exports = {
    sendWelcomeEmail
}