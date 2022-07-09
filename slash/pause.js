const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pausa la música"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("No hay canciones en cola que pausar")

		queue.setPaused(true)
        await interaction.editReply("¡Se hizo el silencio!, usa /resume para resumir la música")
	},
}