const Discord = require ("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, func) => {

  if (!message.member.hasPermission("ADMINISTRATOR')) return message.channel.send('You need to be a administrator.');
  if (!args.join(" ")) return message.channel.send("Please enter a argument");
  
  db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {
  
    message.channel.send(`Prefix set to ` +i.text);
  })
}
