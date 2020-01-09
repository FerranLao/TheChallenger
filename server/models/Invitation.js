const mongoose = require("mongoose")
const Schema = mongoose.Schema

const invitationSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  reciever: { type: Schema.Types.ObjectId, ref: "User" },
  message: { type: String, default: "no hay huevos" },
  type: { type: String, enum: ["Inspector", "Challenged"] },
}, { timestamps: true })

const Invitation = mongoose.model("Invitation", invitationSchema)
module.exports = Invitation