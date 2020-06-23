const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const IncidentSchema = new Schema(
  {
    title: { type: String, unique: true },
    description: String,
    date: String,
    image_url: String,
    lat: String,
    lng: String,
    organization: String,
    petition: String,
    status: String
  },
  {
    timestamps: true,
  }
);

IncidentSchema.plugin(uniqueValidator);
mongoose.model("Incident", IncidentSchema);
