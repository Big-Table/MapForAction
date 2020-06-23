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
    petition
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
    status: "pending"
  });

  try {
    await newIncident.save();
    res.json(newIncident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});



// Approval
router.get("/approved", async (req, res) => {
  try {
    const incidents = await Incident.find({ status: "approved"})
    res.json(incidents)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/pending", async (req, res) => {
  try {
    const incidents = await Incident.find({ status: "pending" })
    res.json(incidents)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/denied", async (req, res) => {
  try {
    const incidents = await Incident.find({ status: "denied" })
    res.json(incidents)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/approve", async (req, res) => {
  try {
    let incident = await Incident.findOne({ _id: req.body._id })
    incident.status = "approved"
    res.json(incident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/deny", async (req, res) => {
  try {
    let incident = await Incident.findOne({ _id: req.body._id })
    incident.status = "denied"
    res.json(incident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})



//incident twitter route, need to add
//show route that also brings in all the tweets
//and the actions related to incident


router.get("/:id", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    const tweets = await Tweet.find({ _id: incident._id });
    const actions = await Action.find({ _id: incident._id });
    res.json({ incident, tweets, actions });
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});



module.exports = router;
