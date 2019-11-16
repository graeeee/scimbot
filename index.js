const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("the Official Krunker Krosshair Discord!", {type: "WATCHING"});

});
client.on('guildMemberAdd', member => {
let joinChannel = member.guild.channels.find('name', 'welcome');

  let joinEmbed = new Discord.RichEmbed()
  .setAuthor(`<@${member.id}> has joined the server`) 
  .setThumbnail(member.user.avatarURL)
  .setDescription(`Current member count: ${member.guild.memberCount}`)
  .setColor('#f04abc')
  .setFooter(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  joinChannel.send(joinEmbed);
})

client.login(process.env.BOT_TOKEN);
