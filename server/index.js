const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const connect = require("./db/connect");
const auth = require("./routes/auth.route");
const coordinator = require("./routes/coordinator.route");

app.use(cors());
app.use(express.json());

app.use("/api/user", auth); //user
app.use("/api/coordinator", coordinator);

const Port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server is running");
});

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

start();
