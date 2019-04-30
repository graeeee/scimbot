const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
const fs = require("fs");


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("HCUnions discord!", {type: "WATCHING"});

});
exports.run = function(client, message) {

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();      

if (command === 'move') {
  const mem = message.mentions.members.first()
  const vc = args.join(" ")
  const chan = client.channels.find("name", vc)
    mem.setVoiceChannel(chan)
      .then(() => console.log(`Moved ${mem.displayName} to ${chan}`))
  .catch(console.error);
  }
}
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let info = (`${prefix}botinfo`)
               
                if(cmd === info){
      let botpfp = bot.user.displayAvatarURL;
      let infoembed = new Discord.RichEmbed()
      .setThumbnail(botpfp)
      .setDescription("**cmonBruh Information**")
      .setColor("#000000")
      .addField("Server Count", client.guilds.size);
                }
});
client.login(process.env.BOT_TOKEN);
