const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const IncidentSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title for the incident"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description for the incident"],
    },
    date: {
      type: String,
      required: [true, "Please enter a date for the incident"],
    },
    image_url: String,
    lat: String,
    lng: String,
    organization: String,
    petition: String,
    status: String,
    image: {
      type: Buffer,
    },
    profilePicture: String,
    firstName: String,
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

IncidentSchema.plugin(uniqueValidator);
mongoose.model("Incident", IncidentSchema);
