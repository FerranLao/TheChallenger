const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    validationCode: { type: String, required: true },
    active: { type: Boolean, default: false },
    email: { type: String, required: true },
    challenges: {
      inspector: Number,
      challenger: Number,
      challenged: Number
    },
    userPhoto: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    friends: { type: [Schema.Types.ObjectId], ref: "User", default: [] }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
