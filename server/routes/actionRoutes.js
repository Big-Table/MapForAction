const mongoose = require("mongoose");

const Action = mongoose.model("Action");

module.exports = (app) => {
  app.get("/actions", async (req, res) => {
    try {
      const actions = await Action.find();
      res.json(actions);
    } catch (err) {
      res.status(400).json("Error:" + err);
    }
  });

  app.post("/actions", async (req, res) => {
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
};
