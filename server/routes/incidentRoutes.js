const mongoose = require("mongoose");

const Incident = mongoose.model("Incident");

module.exports = (app) => {
  app.get("/incidents", async (req, res) => {
    try {
      const incidents = await Incident.find();
      res.json(incidents);
    } catch (err) {
      res.status(400).json("Error:" + err);
    }
  });

  app.post("/incidents", async (req, res) => {
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

  //incident twitter route need to add
};
