const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("command")
    .setDescription("bot command"),
  async execute(interaction) {
    await interaction.reply("bot reply command");
  },
};
