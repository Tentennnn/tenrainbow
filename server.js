/////////////////host website//////////////////////////////////////////////////////////
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///////////////host bot///////////////////////////////////////////////////////////////
const Discord= require("discord.js");
const client = new Discord.Client();
const bot = client;
const fs = require('fs')
/////////////////JSON FILE///////////////////////////////////////////////////////////
const serverID = require('./config/serverID.json');
const roleID = require('./config/roleID.json');
const token = require('./config/token.json');
const colors = require('./config/color.json')
const prefix = require('./config/prefix.json');
const embed = require('./embed/pingpong.json');

////////////////////////////////////////////////////////////////////////////////////

const keepalive = require('express-glitch-keepalive');
app.use(keepalive);
 
app.get('/', (req, res) => {
  res.json('Ok');
});

//////event//////////////////////////////////////////////////////////////////////////
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});



client.on("ready", async (message) => {
  
  setInterval(function() {
    
  const guild = bot.guilds.get(serverID.serverID);
 // const role = guild.roles.find(r=>r.name === "TEN-RB3");
    const role = guild.roles.get("699859393508016190");
  let color = colors.color
  var lol = [Math.floor(Math.random() * color.length)]
  role.setColor(color[lol])
}, 3500)
setInterval(function() {
    process.exit(60000)
  },900000)

});
client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
// Bot Mention Embed

  
  
  if(message.content.startsWith(`${prefix.pr}restart`)) {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author}You Must have \`MANAGE_MASSAGE\` to run this command.`);
    
  message.channel.send(`${message.author} Restarted in ${Math.floor(bot.ping)}ms`).then(msg=>msg.delete(9000)).then(() =>{
  process.exit(1);
})
  }
 
  
  
  })


////////////////////////////////login bot////////////////////////////////////////////

bot.login(process.env.TK)
