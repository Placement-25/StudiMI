const mongoose = require("mongoose");

module.exports = async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not defined in environment. Backend will run in demo/offline mode.");
    return;
  }
  await mongoose.connect(uri);
  console.log("✅ MongoDB database connected successfully");
};
