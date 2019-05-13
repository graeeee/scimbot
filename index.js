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
      .setColor("#1247B5")
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
      .setColor("#1247B5")
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
//annoucnemnt
client.on("message", message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let ann = args.join(" ");
  if (cmd === `${prefix}announcement`) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.RichEmbed()
        .setTitle("Server Announcement")
        .setDescription(ann)
        .setTimestamp(message.createdAt)
        .setColor('#1247B5');
        client.channels.get("572914465117306890").send(embed);
        client.channels.get("572914465117306890").send("@everyone");
    }
  }
});
//suggestions channel
client.on('message', message => {
    if (message.channel.id === '572528706816442369') {
    message.react('573608012560728094');
    message.react('573607997394124813');
    }
});
//polls channel
client.on("message", message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let ann = args.join(" ");
    let po
  if (cmd === `${prefix}poll`) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.RichEmbed()
        .setTitle("Server Announcement")
        .setDescription(ann)
        .setTimestamp(message.createdAt)
        .setColor('#1247B5');
        client.channels.get("572614882323857418").send(embed);
        client.channels.get("572614882323857418").send("@everyone");
        client.channels.get("572614882323857418").react('573608012560728094');
        message.react('573607997394124813');
    }
  }
});
client.login(process.env.BOT_TOKEN);
