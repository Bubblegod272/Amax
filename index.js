console.log("index.js has been executed");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("bot has logged into the account");
});

client.on("message", (message) => {
  if (message.author.bot) return;
});

client.login("ODQ2OTcwMzcxMDg1NTY1OTUy.YK3QoA.wjDrGZOMhZCF37Ioep_iK55KrXw");




