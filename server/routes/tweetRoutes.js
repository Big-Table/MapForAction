const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Tweet = mongoose.model("Tweet");

router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", async (req, res) => {
  const { url, incident_id } = req.body;

  const newTweet = new Tweet({
    url,
    _incident: incident_id,
  });

  try {
    await newTweet.save();
    res.json(newTweet);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

module.exports = router;
