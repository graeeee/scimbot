const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});

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
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  
  let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix)
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
      }
  });
client.login(process.env.BOT_TOKEN);
