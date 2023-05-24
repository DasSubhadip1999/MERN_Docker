const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 9000;

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to express app along with React" });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
