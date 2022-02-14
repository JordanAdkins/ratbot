module.exports = {
    name: 'twitch',
    description: "this is a twitch command!",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/imakaizoku');
    }
}