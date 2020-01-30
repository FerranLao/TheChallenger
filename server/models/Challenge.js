const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = new Schema(
  {
    reciever: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    sender: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    inspectors: {
      tye: Schema.Types.ObjectId,
      ref: "User"
    },
    description: { type: String, required: true },
    img: {
      type: String,
      default:
        "https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/1012546_1646468632280501_7510084607417367364_n.jpg?_nc_cat=104&_nc_oc=AQm7Dl0B23CUZ41MgyGkf4OnFSOpvy9Ysc-enmAc41jobtvFCg-0s082nhme7JBjzuA&_nc_ht=scontent-mad1-1.xx&oh=a7a619d231dd4aef6f9dbdd8b5ce92b8&oe=5EABFF83"
    },
    rewards: { type: [Schema.ObjectId], ref: "Reward" },
    state: { type: String, enum: ["pending", "in-progress", "done"], default: "pending" }
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
