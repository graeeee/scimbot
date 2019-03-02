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
bot.on('message', (message) => {
    if (message.channel.type === "dm" || message.author.bot || message.author === bot.user) return; // Checks if we're on DMs, or the Author is a Bot, or the Author is our Bot, stop.
    var args = message.content.split(' ').slice(1); // We need this later
    var command = message.content.split(' ')[0].replace(guildConf[message.guild.id].prefix, ''); // Replaces the Current Prefix with this

    if (command === "prefix") {
	guildConf[message.guild.id].prefix = args[0];
	if (!guildConf[message.guild.id].prefix) {
		guildConf[message.guild.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix
	}
     fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
     	if (err) console.log(err)
	})
  }
});

client.login(process.env.BOT_TOKEN);
