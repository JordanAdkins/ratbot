const Discord = require('discord.js');


const client = new Discord.Client({ 
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]

});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('JermaBot is online!');
});


client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rat'){
        client.commands.get('rat').execute(message, args);
    } else if (command === 'r1'){
        message.channel.send("1. No casual mentions of suicide");
    } else if (command === 'r2'){
        message.channel.send("2. Be mindful of Minors");
    } else if (command === 'r3'){
        message.channel.send("3. Contact MODS with any Issues or Concerns");
    } else if (command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
    } else if (command === 'ow') {
        client.commands.get('thom').execute(message, args); 
    } else if (command === 'burp') {
        client.commands.get('burp').execute(message, args); 
    } else if (command === 'fart') {
        client.commands.get('fart').execute(message, args); 
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
 
    }
});

console.log(process.env.DISCORD_RATBOT_TOKEN)

client.login(process.env.DISCORD_RATBOT_TOKEN);
