const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
const fs = require("fs");
const db = require("quick.db");


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Servers!", {type: "WATCHING"});

});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let onduty = (`${prefix}howtoscrim`)
   
            if(cmd === onduty){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField(`Testing!`);  
                message.channel.send(botembed);
            }
});
client.on("message", async message => {
  
  if (message.channel.type != 'text') return message.channel.send('This command is for in server use only.')
  
  db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {
  
    let prefix;
    if (i.text) {
      prefix
    } else {
      prefix = 'cb-'
    }
    
client.login(process.env.BOT_TOKEN);
