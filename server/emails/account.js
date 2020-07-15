const sgMail = require("@sendgrid/mail")
const sendgridAPIKey = "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"


sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: "mapforaction@gmail.com",
    from: "mapforaction@gmail.com",
    subject: "this is my first creation",
    text: "I hope this one gets to you."
})