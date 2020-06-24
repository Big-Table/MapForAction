const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Action = mongoose.model("Action");

router.get("/", async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", async (req, res) => {
  const { title, action_type, url, incident_id } = req.body;

  const newAction = new Action({
    title,
    action_type,
    url,
    status: "pending",
    _incident: incident_id,
  });

  try {
    await newAction.save();
    res.json(newAction);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});


// Approval
router.get("/approved", async (req, res) => {
  try {
    const actions = await Action.find({ status: "approved" })
    res.json(actions)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/pending", async (req, res) => {
  try {
    const actions = await Action.find({ status: "pending" })
    res.json(actions)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/denied", async (req, res) => {
  try {
    const actions = await Action.find({ status: "denied" })
    res.json(actions)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/approve", async (req, res) => {
  try {
    let action = await Action.findOne({ _id: req.body._id })
    action.status = "approved"
    action.save()
    res.json(action);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/deny", async (req, res) => {
  try {
    let action = await Action.findOne({ _id: req.body._id })
    action.status = "denied"
    action.save()
    res.json(action);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

module.exports = router;
