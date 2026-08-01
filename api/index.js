const dotenv = require("dotenv");
dotenv.config();

const app = require("../server/app");
const connectDB = require("../server/config/db.config");

let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected && process.env.MONGO_URI) {
    try {
      await connectDB();
      isConnected = true;
    } catch (err) {
      console.error("Vercel DB connection error:", err.message);
    }
  }
  return app(req, res);
};
