const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URL,
      {
        dbName: "Ecom-DB",
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Your database is established ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

module.exports = connectDB;
