import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const tweets = [];
const users = [];

server.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  users.push({
    username,
    avatar,
  });
  res.send("OK");
});

server.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const user = users.find((value) => value.username === username);
  const avatar = user.avatar;

  tweets.unshift({
    username,
    tweet,
    avatar,
  });

  res.send("OK");
});

server.get("/tweets", (req, res) => {
  const lastTweets = [...tweets].splice(0, 10);

  res.send(lastTweets);
});

server.listen(5000, () => console.log("Listening on 5000"));
