const mongoose = require("mongoose");
const { Schema } = mongoose;

const TweetSchema = new Schema(
  {
    url: String,
    status: String,
    _incident: { type: Schema.Types.ObjectId, ref: "Incident" },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Tweet", TweetSchema);
