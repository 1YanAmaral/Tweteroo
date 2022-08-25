import express from "express";

const server = express();

let user = {
  username: "Usuário",
  avatar: "https://wallpapercave.com/wp/wp5223502.jpg",
};

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

server.get("/tweets", (req, res) => {
  const lastTweets = [];
  let i = tweets.length;
  while (lastTweets.length <= 10) {
    lastTweets.push(tweets[i]);
    i--;
  }
  res.send(lastTweets);
});

server.listen(5000);
