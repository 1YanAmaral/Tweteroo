import express from "express";

const server = express();
server.use(express.json());

/* let user = {
  username: "Usuário",
  avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
};
 */
const tweets = [
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Is it thursday yet?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Segundo?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Terceiro?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Tropa do flamengo?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Is it thursday yet?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Segundo?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Terceiro?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Tropa do flamengo?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Is it thursday yet?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Segundo?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Terceiro?",
  },
  {
    username: "Usuário",
    avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
    tweet: "Tropa do flamengo?",
  },
];

const users = [];

server.get("/tweets", (req, res) => {
  const lastTweets = [];
  let i = tweets.length;
  while (lastTweets.length <= 10) {
    lastTweets.push(tweets[i]);
    i--;
  }
  res.send(lastTweets);
});

server.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("OK");
});

server.listen(5000, () => console.log("Listening on 5000"));
