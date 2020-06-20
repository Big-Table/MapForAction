const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActionSchema = new Schema(
  {
    title: String,
    action_type: String,
    url: String,
    _incident: { type: Schema.Types.ObjectId, ref: "Incident" },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Action", ActionSchema);
