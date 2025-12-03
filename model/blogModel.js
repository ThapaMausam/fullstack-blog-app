const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogModel = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogModel);
module.exports = Blog;
