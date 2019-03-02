const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let cmd = messageArray[0];
  if(cmd === `${prefix}prefix`){
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You have no permission");
  if(!args[0] || args[0 == "help"]) return message.channel.send("**Usage:** !prefix <your prefix>");

  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  
  prefix[message.guild.id] = {
    prefix: args[0]
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefix), (err) => {
    if (err) console.log(err)
  });
  
  let pEmbed = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setTitle("Prefix Changed"
  .setDescription(`Prefix set to **${args[0]}**`);
            
            message.channel.send(pEmbed);
  
}
  
module.exports.help = {
  name: "prefix"
}
