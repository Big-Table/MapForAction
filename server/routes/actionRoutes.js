const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const requireLogin = require("../middleware/requireLogin")
const requireModerator = require("../middleware/requireModerator")

const Action = mongoose.model("Action");

router.get("/", requireLogin, requireModerator, async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", requireLogin, async (req, res) => {
  const { title, action_type, url, _incident } = req.body;

  const newAction = new Action({
    title,
    action_type,
    url,
    status: "pending",
    _incident: _incident,
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

router.get("/pending", requireLogin, requireModerator, async (req, res) => {
  try {
    const actions = await Action.find({ status: "pending" })
    res.json(actions)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.get("/denied", requireLogin, requireModerator, async (req, res) => {
  try {
    const actions = await Action.find({ status: "denied" })
    res.json(actions)
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/approve", requireLogin, requireModerator, async (req, res) => {
  try {
    let action = await Action.findOne({ _id: req.body._id })
    action.status = "approved"
    action.save()
    res.json(action);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/deny", requireLogin, requireModerator, async (req, res) => {
  try {
    let action = await Action.findOne({ _id: req.body._id })
    action.status = "denied"
    action.save()
    res.json(action);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch('/:id', requireLogin, requireModerator, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'action_type', 'url']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates.' })
  }

  try {
    const action = await Action.findById(req.params.id)

    updates.forEach((update) => action[update] = req.body[update])

    await action.save()
   
    if (!action) {
      return res.status(404).send()
    }
    res.send(action)
  } catch (e) {
    res.status(400).send(e)
  }

})

module.exports = router;

