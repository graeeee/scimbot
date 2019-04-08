const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
const fs = require("fs");


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Servers! use cb!", {type: "WATCHING"});

});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let badword = (`move`)
   
            if(cmd === badword){
                const voicechat = args.join(" ")
                const user = message.mentions.members.first()
                const channel = client.channels.find("name", voicechat)
                user.setVoiceChannel(channel)
              .then(() => message.channel.send (`Moved ${mem.displayName} to ${chan}`));
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
