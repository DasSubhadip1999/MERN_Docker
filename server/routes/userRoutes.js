const express = require("express");
const { pool } = require("../db");
const userRouter = express.Router();

userRouter.route("/").get(async (req, res) => {
  const getAllQuery = "SELECT * FROM users";
  const [users] = await pool.query(getAllQuery);

  res.status(200).json({
    status: "success",
    data: users,
  });
});

userRouter.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.status(400).json({ status: "fail", message: "Missing params" });

  const [user] = await pool.query(
    `
    SELECT *
    FROM users
    WHERE id = ?
  `,
    [id]
  );

  res
    .status(200)
    .json({ status: "success", data: user[0] ? user[0] : "Not found" });
});

userRouter.route("/create").post(async (req, res) => {
  const { name, age, email } = req.body;
  if (!name || !age || !email)
    return res
      .status(400)
      .json({ status: "fail", message: "Please include all the fields" });

  const [createuser] = await pool.query(
    `
    INSERT INTO users (name, age, email)
    VALUES (?,?,?)
    `,
    [name, age, email]
  );

  const [user] = await pool.query(
    `
    SELECT *
    FROM users
    WHERE id = ?
  `,
    [createuser?.insertId]
  );

  res.status(201).json({ status: "success", data: user[0] });
});

module.exports = userRouter;
