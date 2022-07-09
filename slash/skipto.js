const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("skipto").setDescription("Salta a una canción exacta")
    .addNumberOption((option) => 
        option.setName("tracknumber").setDescription("La canción a la que saltar").setMinValue(1).setRequired(true)),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("No hay canciones en la cola")

        const trackNum = interaction.options.getNumber("tracknumber")
        if (trackNum > queue.tracks.length)
            return await interaction.editReply("Numero de cancion invalido")
		queue.skipTo(trackNum - 1)

        await interaction.editReply(`¡Saltando directamente a la canción numero ${trackNum}!`)
	},
}