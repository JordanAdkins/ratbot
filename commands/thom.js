module.exports = {
    name: 'thom',
    description: "this is a thom command!",
    async execute(message, args,  Discord, client){

        const anaEmoji = '941527903202598982';
        const zenEmoji = '941527964825317417';
        const lucioEmoji = '941528017862266890';

        let thomReact = await message.channel.send("I am Thomathan the lukewarm-boiled egg uWu! I'm a 3,3 OW Flex Support main, the best role in the game!!\n\
No one gives more utility than me. Experience Tranquili-weeeeee!! ");

        thomReact.react('🥚');
        thomReact.react(anaEmoji);
        thomReact.react(zenEmoji);
        thomReact.react(lucioEmoji);

    }
}