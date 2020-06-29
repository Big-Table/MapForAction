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

router.get("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findOne({ _id: req.params.id });
    res.send(tweet);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", async (req, res) => {
  const { url, _incident } = req.body;

  const newTweet = new Tweet({
    url,
    status: "pending",
    _incident: _incident,
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


router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['url']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates.' })
  }

  try {
    const tweet = await Tweet.findById(req.params.id)

    updates.forEach((update) => tweet[update] = req.body[update])

    await tweet.save()
   
    if (!tweet) {
      return res.status(404).send()
    }
    res.send(tweet)
  } catch (e) {
    res.status(400).send(e)
  }

})
module.exports = router;
