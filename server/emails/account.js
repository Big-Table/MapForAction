const sgMail = require("@sendgrid/mail")
const keys = require('../config/keys.js')


sgMail.setApiKey(keys.sendgridKey)



const sendIncidentApprovedEmail = (email) => {
    sgMail.send({
        to: email,
        from: "mapforaction@gmail.com",
        subject: "Thanks for contributing to MapForAction",
        text: "Thank you for contributing to MapForAction. Your incident has been approved!"
    })
}


const sendWelcomeEmail = (email) => {
    sgMail.send({
        to: email,
        from: "mapforaction@gmail.com",
        subject: "Thanks for joining MapForAction",
        text: "Thank you for joining to MapForAction. Please help by contributing any incidents that have not yet been added to the app. We appreciate your support!"
    })
}

module.exports = {
    sendIncidentApprovedEmail,
    sendWelcomeEmail
}