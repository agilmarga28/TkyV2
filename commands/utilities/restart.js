const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');
const { ownerid } = require('../../config.json');

module.exports = {
    config: {
        name: "restart",
        description: "shuts down the client!",
        usage: "shutdown",
        category: "utilities",
        accessableby: "client Owner",
        aliases: ["stopbot"]
    },
    run: async (client, message, args) => {
    if(message.author.id != ownerid) return message.channel.send("You're the client the owner!")

    const restart = new MessageEmbed()
        .setDescription("**Account has been**: `Shutting down...`")
        .setColor(RANDOM);

    await message.channel.send({ embeds: [restart] });
        console.log(chalk.red(`[CLIENT] Restarting...`));
            
    process.exit();
    }
};