const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppRoutes = require("./routes/AppRoutes");

const app = express();
const PORT = 3030;
const MONGODB_URI = `mongodb+srv://siddhaantmishraa:VNS%4012345@cluster0.w6pokta.mongodb.net/HungerBuddy?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use("/api", AppRoutes);

mongoose.connect(MONGODB_URI).then(() => {
    console.log("database connected successfully.");
  })
  .catch((error) => {
    console.log(error);
      process.exit(1);
  });

app.listen(PORT, () => {
      console.log("Project is running on port ", PORT);
    });
