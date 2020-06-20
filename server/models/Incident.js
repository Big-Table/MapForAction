const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  },
  {
    timestamps: true,
  }
);

mongoose.model("Incident", IncidentSchema);
