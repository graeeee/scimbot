const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
const fs = require("fs");


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Servers!", {type: "WATCHING"});

});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let badword = (`nigger`)
   
            if(cmd === badword){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .setDescription(`<:551240721584357377:>`);  
                message.channel.send(botembed);
            }
});
client.login(process.env.BOT_TOKEN);
