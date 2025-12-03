require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database"); // Since database has index.js so it doesn't include it in the address
const app = express();

connectToDatabase();

app.get("/", (req, res) => {
  // res.send("Welcome Mausam Thapa Magar");
  res.status(200).json({
    message: "Welcome Mausam Ji",
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    message: "This is about page",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server has been started.");
});

// mongodb+srv://mausam:FhFZ0H4ongw85ZfL@cluster0.9ligjln.mongodb.net/?appName=Cluster0
