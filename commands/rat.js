module.exports = {
    name: 'rat',
    description: "this is a rat command!",
    execute(message, args, Discord, client){
        
        const ratwalkEmoji = "939700520677965834";

        message.channel.send( "🎶 Rats! Rats! We're the Rats! We stalk at night we prey at night, We're the rats! 🎶");
    }
}