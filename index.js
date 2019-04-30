const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("HCUnions discord!", {type: "WATCHING"});

});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let info = (`${prefix}info`)
               
                if(cmd === info){
      let botpfp = client.user.displayAvatarURL;
      let infoembed = new Discord.RichEmbed()
      .setThumbnail(botpfp)
      .setDescription("**HCUnions Information**")
      .setColor("#008080")
      .addField("**Server IP:**", "us.hcunions.com")
      .addField("**Discord Member Count**", client.guilds.size);
      message.channel.send(infoembed);
                }
});
client.login(process.env.BOT_TOKEN);
