const express = require("express");
const router = require("./Routes/route");
const bodyParser = require("body-parser");
const moongose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router);
const PORT = 4000;

moongose
  .connect(
    "mongodb+srv://kabir_shhaikh:cWNdzBEfcOOPmcGW@kabir.5td6tgo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to Moongose Database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
