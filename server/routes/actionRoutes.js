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
    _incident: incident_id,
  });

  try {
    await newAction.save();
    res.json(newAction);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

module.exports = router;
