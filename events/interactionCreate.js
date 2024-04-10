const { Events, Client, GatewayIntentBits, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const { maior, num, faces, reults } = require('../commands/dar.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

module.exports = {  
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}

      
/*
			if (!interaction.isButton()) {

			const row = new ActionRowBuilder()
			const embed = new EmbedBuilder()
					.setTitle(`Você rola um dado...`)
					.setDescription('Você rolou ' +num+'d'+faces+'...')
					.setColor(0xff2a2a)
					.setFooter({
						text: 'Que a rolagem tenha sido boa'
					})
					.setThumbnail('https://cdn.discordapp.com/attachments/736717234612731917/1056270434108178502/Design_sem_nome_1.png')
					.addFields([
						{
							name: 'Resultados...',
							value: '`'+reults+'`'
						}
					])
					.addFields([
						{
							name:'Melhor resultado + 5',
							value: maior + 5,
							
						}
					])

			
		    interaction.editReply({embeds: [embed]});

			}
	*/		
	
	}
			
			
	
                   
                
            
        
}
