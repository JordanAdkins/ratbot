module.exports = {
    name: 'reactionrole',
    description: "Sets up Reaction Roles and Message!",
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

        //let text = new Discord.Message('test');
            //.setColor('#e42643')
            //.setTitle('Here are the Rules')
            //.setDescription('Rooles Rooles Rooles\n\n'
            //    + `${owEmoji} for Overwatch\n`
            //    + `${apexEmoji} for Apex Legends`);
        let textReact = await message.channel.send("1. **No casual mentions of suicide** - Some members have had traumatic experiences related to suicide, therefore suicide mentions will be taken seriously and addressed. We care for the mental health of our members, and want to ensure you are heard.\n\n\
2. **Minors**, y'all exist in this server - While 18+yo is the majority, Adults, please be mindful of the presence of Minors, especially in conversation. Minors, there might be the rare exclusion from certain conversations, but it's all part of maintaining an appropriate space.\n\n\
3. Contact **MODS** with any Issues or Concerns - Our Mods include @justalittlecreacher , @imakaizoku , @gracefulmuse, @axelrachma, and @corgiwizard. If you need to talk about any of the Mods, Members, or anything sensitive requiring anonymity, DM any of the above and we will work with you privately.\n\n\
To **ACCEPT** the above rules, **REACT** below with the Game(s) you play. THANK YOU for making the server a safe space for all.");
       
        textReact.react(owEmoji);
        textReact.react(apexEmoji);
        textReact.react(lolEmoji);
        textReact.react(valorantEmoji);
        textReact.react(nwEmoji);
        textReact.react(warframeEmoji);
        textReact.react(forestEmoji);
        textReact.react(zomboidEmoji);
        textReact.react(accessEmoji);
        
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