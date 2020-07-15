const sgMail = require("@sendgrid/mail")
const keys = require('../config/keys.js')


sgMail.setApiKey(keys.sendgridKey)

sgMail.send({
    to: "mapforaction@gmail.com",
    from: "mapforaction@gmail.com",
    subject: "this is my first creation",
    text: "I hope this one gets to you."
})