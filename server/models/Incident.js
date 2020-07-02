const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const Tweet = require("../models/Tweet");
const Action = require("../models/Action");

const IncidentSchema = new Schema(
  {
    title: String,
    description: String,
    date: String,
    image_url: String,
    lat: String,
    lng: String,
    organization: String,
    petition: String,
    status: String,
    image: {
      type: Buffer
    }
  },
  {
    timestamps: true,
  }
);

IncidentSchema.plugin(uniqueValidator);
mongoose.model("Incident", IncidentSchema);
