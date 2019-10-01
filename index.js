const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Alpha 5v5s | alpha5v5.org", {type: "PLAYING"});

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
      .setDescription("**Server Information**")
      .setColor("#FF0000")
      .addField ("Website", "https://alpha5v5.org/home")
      .addField("Store", "https://alpha5v5.org/store")
      .addField("Server IPs", "https://alpha5v5.org/servers")
      .addField("Discord Member Count", `${message.guild.memberCount}`);
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
      .setColor("#1247B5")
      .addField("Store", "http://alpha5v5.org/store");
      message.channel.send(storeembed);
                }
});
client.on('guildMemberAdd', member => {
let joinChannel = member.guild.channels.find('name', 'new-members');

  let joinEmbed = new Discord.RichEmbed()
  .setAuthor("New User Joined") 
  .setThumbnail(member.user.avatarURL)
  .setDescription(`<@${member.id}> has joined the server\n\nCurrent member count: ${member.guild.memberCount}`)
  .setColor('#FF0000')
  .setFooter(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  joinChannel.send(joinEmbed);
})
client.on('message', message=>{
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
let args = message.content.substring(prefix.length).split(" ");

switch(args [0]){


    case 'purge':
     if(message.member.roles.find(role => role.name === "Owner") ||
          message.member.roles.find(role => role.name === "Head-Admin") ||
          message.member.roles.find(role => role.name === "Admin"))
        if(!args[1]) return message.channel.sendMessage('> Please include a **number** of lines to clean up!')
      message.channel.bulkDelete(args[1]);
        
      }
});

client.login(process.env.BOT_TOKEN);
