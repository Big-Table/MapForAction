const mongoose = require("mongoose");

const Tweet = mongoose.model("Tweet");

module.exports = (app) => {
  app.get("/Tweets", async (req, res) => {
    try {
      const tweets = await Tweet.find();
      res.json(tweets);
    } catch (err) {
      res.status(400).json("Error:" + err);
    }
  });

  app.post("/Tweets", async (req, res) => {
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
};
