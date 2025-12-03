const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogModel = new Schema({
  title: String,
  subTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogModel);
module.exports = Blog;
