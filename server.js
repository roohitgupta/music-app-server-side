const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { createForm } = require("./routes/songForm")

app.use(cors());
dotenv.config();
app.use(express.json());

const formRouter = express.Router();


app.use("/api", formRouter);
formRouter.post("/form", createForm)



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connection Successfull!!"))
  .catch((error) => console.log(error));


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running at port 5000");
  });

