const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    googleID: String,
    name: String,
    email: String,
    moderator: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

mongoose.model("User", UserSchema);
