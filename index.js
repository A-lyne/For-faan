
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const  prefix = '!';

client.on('ready', ()=>{
    console.log('Bot online')

})

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //basic command here
    if (command === 'ping'){
        message.channel.send('pong');

    
    }
    else if (command === 'bestyoutubechannel'){
        message.channel.send('**Go subscribe ** https://youtube.balance2.live');

    }
})





client.login("YOUR TOKEN HERE")   

