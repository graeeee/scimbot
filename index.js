const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
console.log("npm install ms --save");

client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("the Official Krunker Krosshair Discord!", {type: "WATCHING"});

});
client.on("message", async message =>
{
    if(message.author.bot)
        return;
    if(message.channel.type == "dm")
        return;
       
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
       
    if(cmd === `${prefix}mute`)
    {
       
        let tempUser = message.mentions.members.first();
        let tempTime = args[1];
        let tempRole = message.guild.roles.find(role => role.name === "Muted");
       
        if(message.member.roles.find(role => role.name === "Founders") ||
            (message.member.roles.find(role => role.name === "Moderators") ))
        {
            if(!tempUser)
                return message.channel.send('Invalid Usage, **!mute <@User#1234> <time>**');
           
            if(!tempTime)
                return message.channel.send('Invalid Usage, **!mute <@User#1234> <time>**');
           
            await(tempUser.addRole(tempRole.id).catch(console.error));
           
            message.channel.send(`<@${tempUser.id}> has been muted for ${tempTime}.`)
           
            setTimeout(function()
            {
                tempUser.removeRole(tempRole.id);
            }, ms(tempTime));
        }
        else
        {
            message.channel.send("No permission.");
        }
      }
});
client.login(process.env.BOT_TOKEN);
