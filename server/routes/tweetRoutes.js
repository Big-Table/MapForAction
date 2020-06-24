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
    status: "pending",
    _incident: incident_id,
  });

  try {
    await newTweet.save();
    res.json(newTweet);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

// Approval
router.get("/approved", async (req, res) => {
  try {
    const tweets = await Tweet.find({ status: "approved" })
    res.json(tweets)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/pending", async (req, res) => {
  try {
    const tweets = await Tweet.find({ status: "pending" })
    res.json(tweets)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/denied", async (req, res) => {
  try {
    const tweets = await Tweet.find({ status: "denied" })
    res.json(tweets)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/approve", async (req, res) => {
  try {
    let tweet = await Tweet.findOne({ _id: req.body._id })
    tweet.status = "approved"
    tweet.save()
    res.json(tweet);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/deny", async (req, res) => {
  try {
    let tweet = await Tweet.findOne({ _id: req.body._id })
    tweet.status = "denied"
    tweet.save()
    res.json(tweet);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})
module.exports = router;
