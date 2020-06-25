const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    googleID: String,
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

mongoose.model("User", UserSchema);
