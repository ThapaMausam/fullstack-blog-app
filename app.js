const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("Welcome Mausam Thapa Magar");
  res.json({
    message: "Welcome Mausam Ji",
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "This is about page",
  });
});

app.listen(3000, () => {
  console.log("Server has been started.");
});
