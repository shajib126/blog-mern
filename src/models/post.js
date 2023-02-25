const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    authorEmail: {
      type: String,
    },
    authorName: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
