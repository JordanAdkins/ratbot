module.exports = {
    name: 'rxnrolelisten',
    description: "Listens for Reaction Inputs and assigns corresponding Roles!",
    async execute(message, args, Discord, client) {
        const channel = '934941393732919296'; //rules channel

        const access = message.guild.roles.cache.find(role => role.name === "access"); //access to Server

        const ow = message.guild.roles.cache.find(role => role.name === "Overwatch posse");
        const apex = message.guild.roles.cache.find(role => role.name === "Apex Thotties");
        const lol = message.guild.roles.cache.find(role => role.name === "League of Legends");
        const valorant = message.guild.roles.cache.find(role => role.name === "Valorant players (stinky)");
        const nw = message.guild.roles.cache.find(role => role.name === "New World");
        const warframe = message.guild.roles.cache.find(role => role.name === "Warframe");
        const forest = message.guild.roles.cache.find(role => role.name === "The Forest dads");
        const zomboid = message.guild.roles.cache.find(role => role.name === "Zomboids");

        const accessEmoji = "✅";
        const owEmoji = "888581306529771590";
        const apexEmoji = "906717906476359751";
        const lolEmoji = "941175528805777419";
        const valorantEmoji = "896539011181592586";
        const nwEmoji = "896539862671446047";
        const warframeEmoji = "897494566582767686";
        const forestEmoji = "896538935424081920";
        const zomboidEmoji = "941193841107693599";

        //Listens for Reactions On and Off, and Assigns or Removes roles accordingly
              
        client.on('messageReactionAdd', async (reaction, user) => {
            console.log('JermaBot is Pass!');
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            console.log('JermaBot is Rat!');

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.id === owEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, ow]);
                }
                if(reaction.emoji.id === apexEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, apex]);
                }
                if(reaction.emoji.id === lolEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, lol]);
                }
                if(reaction.emoji.id === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, valorant]);
                }
                if(reaction.emoji.id === nwEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, nw]);
                }
                if(reaction.emoji.id === warframeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, warframe]);
                }
                if(reaction.emoji.id === forestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, forest]);
                }
                if(reaction.emoji.id === zomboidEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, zomboid]);
                    console.log('JermaBot is React!');
                }
                if(reaction.emoji.id === accessEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(access);
                }

                console.log("Assigning Role " + reaction.emoji.name + " to user " + reaction.message.guild.members.cache.get(user.id) );

            } else {
                console.log("else");
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.id === owEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([ow]);
                }
                if(reaction.emoji.id === apexEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([apex]);
                }
                if(reaction.emoji.id === lolEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([lol]);
                }
                if(reaction.emoji.id === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([valorant]);
                }
                if(reaction.emoji.id === nwEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([nw]);
                }
                if(reaction.emoji.id === warframeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([warframe]);
                }
                if(reaction.emoji.id === forestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([forest]);
                }
                if(reaction.emoji.id === zomboidEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([zomboid]);
                }
                if(reaction.emoji.id === accessEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(access);
                }

            } else {
                return;
            }

        });

    }
}