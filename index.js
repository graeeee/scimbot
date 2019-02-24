const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
client.tempBannedUsers = require('./temp-banned-users.json');
const fs = require ("fs");

client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Invictus Official Discord!", {type: "WATCHING"});

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
                .addField(`**__How our scrims work__**`,`1.) You will find a team either through <#548748868326785025>or join a random scrim team channel. 
*(If asked to leave because they have another teammate or other reasons please do so.)*\n\n**2.)** Scrims will usually start once we have at least **40-45/60** players in the channels. 
Once most or all the scrim team channels are filled, a 15 minute warning will be given before the scrim starts.
*(You may have to queue with a random person if the channels aren't filled fully.)*\n\n**3.)** One of your players will join the **Countdown** channel. **(Other teammates must be ready in game for this to work)** Once the captain clicks **Ready** in game and started to queue for the match, every captain can leave the voice channel.\n\n**4.)** Due to no way to tell if you are in the same server through ids, games will be determined by **flight paths**. when you figure out the flight path, **please post the direction the your flight path enters the map from, and where it exits**.`);
(allowing us to see how many made it in the same game.)\n\n**5.)** Thats about it! If you have any issues, contact a administrator in #support-and-questions or the Countdown channel.\n\nGood Luck!`);  
                message.channel.send(botembed);
            }
});
client.login(process.env.BOT_TOKEN);
