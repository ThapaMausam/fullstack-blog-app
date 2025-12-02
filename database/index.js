const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://mausam:FhFZ0H4ongw85ZfL@cluster0.9ligjln.mongodb.net/?appName=Cluster0"
  );
  console.log("Database connected successfully");
}

module.exports = connectToDatabase;
