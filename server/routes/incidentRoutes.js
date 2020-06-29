const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const auth = require("../middleware/requireLogin")
const authModerator = require("../middleware/requireModerator")

const Incident = mongoose.model("Incident");
const Tweet = mongoose.model("Tweet");
const Action = mongoose.model("Action");

router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find({}, { image: 0 });
    res.json(incidents);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.post("/", auth,  async (req, res) => {
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
    status: "pending",
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
    const incidents = await Incident.find({ status: "approved" }, { image: 0 });
    res.json(incidents);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.get("/pending", authModerator, async (req, res) => {
  try {
    const incidents = await Incident.find({ status: "pending" }, { image: 0 });
    res.json(incidents);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.get("/denied", authModerator, async (req, res) => {
  try {
    const incidents = await Incident.find({ status: "denied" }, { image: 0 });
    res.json(incidents);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.patch("/approve", authModerator, async (req, res) => {
  try {
    let incident = await Incident.findOne({ _id: req.body._id });
    incident.status = "approved";
    incident.save();
    delete incident.image;
    res.json(incident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.patch("/deny", authModerator, async (req, res) => {
  try {
    let incident = await Incident.findOne({ _id: req.body._id });
    incident.status = "denied";
    incident.save();
    res.json(incident);
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

//incident twitter route, need to add
//show route that also brings in all the tweets
//and the actions related to incident

router.get("/:id", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id, { image: 0 });
    const tweets = await Tweet.find({ _incident: incident._id });
    const actions = await Action.find({ _incident: incident._id });
    res.json({ incident, tweets, actions });
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

router.patch("/:id", authModerator, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "title",
    "description",
    "date",
    "image_url",
    "lat",
    "lng",
    "organization",
    "petition",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates." });
  }

  try {
    const incident = await Incident.findById(req.params.id);

    updates.forEach((update) => (incident[update] = req.body[update]));

    await incident.save();
    // const incident = await incident.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!incident) {
      return res.status(404).send();
    }
    res.send(incident);
  } catch (e) {
    res.status(400).send(e);
  }
});

//multer options
//dest = destination folder for file upload
const upload = multer({
  limits: {
    fileSize: 3000000,
  },
  fileFilter(req, file, cb) {
    //uses regex to only allow png, jpg, jpeg
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image."));
    }

    //accepts the upload
    cb(undefined, true);
  },
});
//multer upload image route
//will have to add our auth middleware to this right before the multer middleware
//provide id in body.
//uses sharp to resize image and change it into a png
router.post(
  "/upload",
  upload.single("upload"),
  async (req, res) => {
    try {
      const incident = await Incident.findById(req.body.id);
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 500, height: 500 })
        .png()
        .toBuffer();
      incident.image = buffer;
      incident.save();
      res.send();
    } catch (e) {
      res.status(400).send(e);
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.delete("/upload", async (req, res) => {
  try {
    const incident = await Incident.findById(req.body.id);
    incident.image = undefined;
    incident.save();
    res.send();
  } catch (e) {
    res.status(400).send(e);
  }
});

//serve up the image
router.get("/:id/image", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident || !incident.image) {
      throw new Error();
    }

    //tell them it is a png or jpg or jpeg
    //response header, use set
    res.set("Content-Type", "image/png");
    res.send(incident.image);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
