const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`:x: `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN); 
