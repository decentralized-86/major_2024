const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const connect = require("./db/connect");
const auth = require("./routes/auth.route");

app.use(cors());
app.use(express.json());

app.use("/user", auth);

const Port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`Server is listening on ${Port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

start();
