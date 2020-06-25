const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Incident = mongoose.model("Incident");
const Tweet = mongoose.model("Tweet");
const Action = mongoose.model("Action");

router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    description,
    date,
    image_url,
    lat,
    lng,
    organization,
    petition,
  } = req.body;

  const newIncident = new Incident({
    title,
    description,
    date,
    image_url,
    lat,
    lng,
    organization,
    petition,
  });

  try {
    await newIncident.save();
    res.json(newIncident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

//incident twitter route, need to add
//show route that also brings in all the tweets
//and the actions related to incident

router.get("/:id", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    const tweets = await Tweet.find({ _incident: incident._id });
    const actions = await Action.find({ _incident: incident._id });
    res.json({ incident, tweets, actions });
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

module.exports = router;
