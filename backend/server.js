const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./Models/User");
const cors = require("cors");
const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
const redisClient = redis.createClient({
  legacyMode: true,
  PORT: 6379,
});
redisClient.connect().catch(console.error);
const EXPIRATION = 3600; // 1 hour
const mongodbURL = process.env.DATABASE_CONNECTION_STRING;
mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  dbName: "redis-demo",
});

app.get("/users", async (req, res) => {
  try {
    redisClient.get("users", async (error, users) => {
      if (error) return res.json(error);

      if (users !== null) {
        return res.json(JSON.parse(users));
      } else {
        const usersFromDB = await User.find({});
        if (usersFromDB.length > 0) {
          res.json(usersFromDB);
          redisClient.setex("users", EXPIRATION, JSON.stringify(usersFromDB));
        } else {
          res.json("No users");
        }
      }
    });
  } catch (error) {
    res.json(error);
  }
});

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
