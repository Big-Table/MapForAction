const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const auth = require("../middleware/requireLogin")
const authModerator = require("../middleware/requireModerator")

const Incident = mongoose.model("Incident");
const Tweet = mongoose.model("Tweet");
const Action = mongoose.model("Action");
const User = mongoose.model("User");

router.get('/full', async (req, res) => {
    try {
        let users = await User.find()
        let moderators = await User.find({ moderator: true })
        let incidents = await Incident.find()
        let pendingincidents = await Incident.find()
        let deniedincidents = await Incident.find()

        let tweets = await Tweet.find()
        let pendingtweets = await Tweet.find()
        let deniedtweets = await Tweet.find()

        let actions = await Actions.find()
        let pendingactions = await Actions.find()
        let deniedactions = await Actions.find()

        res.send({
            "number of users": users.length,
            "number of mods": moderators.length,
           
            "number of incidents": incidents.length,
            "number of pending incidents": pendingincidents.length,
            "number of denied incidents": deniedincidents.length,

            "number of tweets": tweets.length,
            "number of pending tweets": pendingtweets.length,
            "number of denied tweets": deniedtweets.length,

            "number of actions": actions.length,
            "number of pending actions": pendingactions.length,
            "number of denied actions": deniedactions.length,
        })
    } catch (e) {
        res.send(401)
    }
})





module.exports = router;