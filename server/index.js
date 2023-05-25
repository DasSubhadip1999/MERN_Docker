require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { checkConnection } = require("./db");

const app = express();
const PORT = 9000;
checkConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to express app along with React" });
});

app.use("/user", require("./routes/userRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Somthing went wrong");
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
