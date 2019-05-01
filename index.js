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
      .addField ("Website", "http://hcunions.org")
      .addField("Store", "http://hcunions.buycraft.net")
      .addField("Server IP", "hcunions.org")
      .addField("Discord Member Count", client.guilds.size);
      message.channel.send(infoembed);
                }
});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let store = (`${prefix}store`)
               
                if(cmd === store){
      let storeembed = new Discord.RichEmbed()
      .setColor("#008080")
      .addField("Store", "http://hcunions.buycraft.net/");
      message.channel.send(storeembed);
                }
});
client.on('guildMemberAdd', member => {
let logChannel = member.guild.channels.find('name', 'new-members');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("New user joined") 
  .setThumbnail(member.user.avatarURL)
  .setDescription(`${member.user.username} has joined the server`)
  .setColor('#008080')
  .setFooter(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  logChannel.send(logEmbed);
})
client.login(process.env.BOT_TOKEN);
