const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rewardSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, default: "https://www.morguer.com/media/catalog/product/cache/1/small_image/375x562/9df78eab33525d08d6e5fb8d27136e95/r/e/regalo_1_.png" },
  clue: { type: String, required: true },
  done: { type: Boolean, default: false }
}, { timestamps: true })

const Reward = mongoose.model("Reward", rewardSchema)
module.exports = Reward