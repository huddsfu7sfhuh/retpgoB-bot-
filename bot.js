const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`👊 `,"http://twitch.tv/X_Xz")
client.user.setStatus("Online")
});

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("487956114194038787").join(); //by : iBeAnthonyD
    });

client.login(process.env.BOT_TOKEN); 
