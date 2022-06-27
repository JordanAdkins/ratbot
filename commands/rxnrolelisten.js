module.exports = {
    name: 'rxnrolelisten',
    description: "Listens for Reaction Inputs and assigns corresponding Roles!",
    async execute(client) {
        const channel = '941178139860664331'; //rules channel
        async function getRole(roleName){
            var returnValue = client.guilds.fetch('736703069093363744')
            .then(guild => guild.roles.fetch()
            .then(roles => roles.find(value => value.name === roleName)));
            return returnValue
        };

        const access = await getRole("access"); //access to Server

        const ow = await getRole("Overwatch posse");
        const apex = await getRole("Apex Thotties");
        const lol = await getRole("League of Legends");
        const valorant = await getRole("Valorant players (stinky)");
        const warframe = await getRole("Warframe");
        const forest = await getRole("The Forest dads");
        const zomboid = await getRole("Zomboids");
        const party = await getRole("Party gamers");
        const terraria = await getRole("Terraria");

        const accessEmoji = "935429715580309545";
        const owEmoji = "888581306529771590";
        const apexEmoji = "906717906476359751";
        const lolEmoji = "941175528805777419";
        const valorantEmoji = "896539011181592586";
        const warframeEmoji = "897494566582767686";
        const forestEmoji = "896538935424081920";
        const zomboidEmoji = "941193841107693599";
        const partyEmoji = "708439567723921529";
        const terrariaEmoji = "991100062572744754";

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
                if(reaction.emoji.id === warframeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, warframe]);
                }
                if(reaction.emoji.id === forestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, forest]);
                }
                if(reaction.emoji.id === zomboidEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, zomboid]);
                }
                if(reaction.emoji.id === partyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, party]);
                    //console.log("jerma jerma");
                }
                if(reaction.emoji.id === terrariaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add([access, terraria]);
                }
                if(reaction.emoji.id === accessEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(access);
                }

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
                if(reaction.emoji.id === warframeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([warframe]);
                }
                if(reaction.emoji.id === forestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([forest]);
                }
                if(reaction.emoji.id === zomboidEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([zomboid]);
                }
                if(reaction.emoji.id === partyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([party]);
                }
                if(reaction.emoji.id === partyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove([terraria]);
                }
             //  if(reaction.emoji.id === accessEmoji) {
             //     await reaction.message.guild.members.cache.get(user.id).roles.remove([access]);
             // }

            } else {
                return;
            }

        });

    }
}