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
    incident.save()
    res.json(incident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
})

router.patch("/deny", async (req, res) => {
  try {
    let incident = await Incident.findOne({ _id: req.body._id })
    incident.status = "denied"
    incident.save()
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
    const tweets = await Tweet.find({ _incident: incident._id });
    const actions = await Action.find({ _incident: incident._id });
    res.json({ incident, tweets, actions });
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});
// title: { type: String, unique: true },
// description: String,
//   date: String,
//     image_url: String,
//       lat: String,
//         lng: String,
//           organization: String,
//             petition: String,
//               status: String


router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'description', 'date', 'image_url', 'lat', 'lng', 'organization', 'petition']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates.' })
  }

  try {
    const incident = await Incident.findById(req.params.id)

    updates.forEach((update) => incident[update] = req.body[update])

    await incident.save()
    // const incident = await incident.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!incident) {
      return res.status(404).send()
    }
    res.send(incident)
  } catch (e) {
    res.status(400).send(e)
  }

})



module.exports = router;
