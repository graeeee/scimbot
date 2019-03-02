const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You have no permission");
  if(!args[0] || args[0 == "help"]) return message.channel.send("**Usage:** !prefix <your prefix>");

  let prefixes = JSON.parse(
}
  
module.exports.help = {
  name: "prefix"
}
