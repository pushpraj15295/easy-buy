// Server entry point
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT;
const app = express();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("DB connected  successfully"))
  .catch((err) => {
    console.log(err);
  });



app.listen(port, () => {
  console.log(`server is connected on port no: ${port}`);
});
