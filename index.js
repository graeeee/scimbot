const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("hcunions.org | !info", {type: "PLAYING"});

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
      .setColor("#008080")
      .addField("Store", "http://hcunions.buycraft.net/");
      message.channel.send(storeembed);
                }
});
client.on('guildMemberAdd', member => {
let joinChannel = member.guild.channels.find('name', 'new-members');

  let joinEmbed = new Discord.RichEmbed()
  .setAuthor("New User Joined") 
  .setThumbnail(member.user.avatarURL)
  .setDescription(`<@${member.id}> has joined the server\n\nCurrent member count: ${member.guild.memberCount}`)
  .setColor('#008080')
  .setFooter(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  joinChannel.send(joinEmbed);
})
client.on("message", message => {
    if(message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.channel.type === "dm") return;

    if(!message.content.startsWith('!')) return;

    if(command === '!announcment') {
        let channel = message.mentions.channels();
        let announcement = args.slice(1).join(" ");

        channel.send(announcement);
    }
});
client.login(process.env.BOT_TOKEN);
