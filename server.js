const dotenv = require("dotenv");
dotenv.config();

const app = require("./server/app");
const connectDB = require("./server/config/db.config");

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Studimi backend server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("⚠️ Database connection note:", err.message);
    app.listen(PORT, () => {
      console.log(`🚀 Studimi backend server running in fallback mode on port ${PORT}`);
    });
  });
