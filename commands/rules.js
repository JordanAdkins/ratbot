module.exports = {
    name: 'r1',
    description: "this is a rat command!",
    execute(message, args, Discord, client){
        
        const ratwalkEmoji = "939700520677965834";

        message.channel.send( '<ratwalk:939700520677965834>' + "Rats! Rats! We're the Rats! We stalk at night we prey at night, We're the rats! " + ratwalkEmoji);
    }
}