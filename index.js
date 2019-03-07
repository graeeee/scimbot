const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
const fs = require("fs");


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Servers!", {type: "WATCHING"});

});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let badword = (`nigger`)
   
            if(cmd === badword){
                message.channel.send("wtf racist <:cmonBruh:551240654269841419>");
            }
});
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
