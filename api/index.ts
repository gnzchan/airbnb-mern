import { Express } from "express";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User.js");

const app: Express = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "airbnb-mern_19";

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

mongoose.connect(process.env.MONGO_URL);

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return;
  }

  try {
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json();
        }
      );
    } else {
      res.status(422).json("Email and Password does not match");
    }
  } else {
    res.status(422).json("Email and Password does not match");
  }
});

app.listen(4000);
