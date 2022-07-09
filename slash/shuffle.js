const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("shuffle").setDescription("Activa el modo aleatorio"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("No hay canciones en la cola")

		queue.shuffle()
        await interaction.editReply(`La lista de ${queue.tracks.length} canciones a sido aleatorizada!`)
	},
}