const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const Tweet = require("../models/Tweet");
const Action = require("../models/Action");

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
    status: String,
    image: {
      type: Buffer
    }
  },
  {
    timestamps: true,
  }
);

//set up virtual relationships
// IncidentSchema.virtual('tweets', {
//   ref: 'Tweet',
//   localField: '_id',
//   foreignField: '_incident'
// })

// IncidentSchema.virtual('actions', {
//   ref: 'Action',
//   localField: '_id',
//   foreignField: '_incident'
// })

// delete actions and tweets if the incident is deleted
// IncidentSchema.pre('remove', async function (next) {
//     const incident = this
//     try{
//       await Action.deleteMany({ _incident: incident._id })
//       await Tweet.deleteMany({ _incident: incident._id })
//       next()
//     } catch(e){
//       console.log(e)
//     }
// })



IncidentSchema.plugin(uniqueValidator);
mongoose.model("Incident", IncidentSchema);
