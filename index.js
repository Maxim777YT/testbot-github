const Discord = require("discord.js");
const client = new DIscord.Client();
const fs = require("fs-extra");
const tokenFile = require("./token.json");
client.login(JSON.parse(fs.readFileSync("./token.json")).token);
clien.on("ready", () => {
client.channels.get('593094323185254413').send("Ready!");
});