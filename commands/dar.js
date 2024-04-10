const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, SlashCommandBuilder, EmbedBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('dar')
		.setDescription('Rola o dado conforme você quer!')
		.addNumberOption(option => 
			option.setName('número')
				.setDescription('O Número de vezes que você quer rolar o dado')
				.setRequired(true)
				.setMaxValue(100)
				.setMinValue(1))

		.addNumberOption(option => 
			option.setName('faces')
				.setDescription('O Número de faces do dado')
				.setMinValue(1)
				.setMaxValue(100)
				.setRequired(true)),
	async execute(interaction, client) {

		function getRandomInt() {
			min = 1
			max = faces;
			return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the 
		  }
		  
		  var num = interaction.options.getNumber('número');
		  var faces = interaction.options.getNumber('faces');
		  const reults = [];

		
		  for (let step = 0; step < num; step++) {
		  
		   let result = getRandomInt()
		   reults.push(result);
		
		  
		  }
		  console.log(reults);
		  reults.sort(function(a, b){return b-a});
		  const maior = reults[0];
		  dudu = ""
		  a = reults.length - 1;
		  b = 0;
		  for(let i = 0; i <= a; i++){
			  if(i < a){
				  footer = dudu + " " + reults[i] + ','; 
			  }
			  else{
				  footer = dudu + " " + reults[i]; 
			  }
			  dudu = footer
		  }
		  const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('+5')
					.setStyle(ButtonStyle.Primary),
			);

			const embed = new EmbedBuilder()
					.setTitle(`Você rola um dado...                `)
					.setDescription('Você rolou ' +num+'d'+faces+'...')
					.setColor(0xff2a2a)
					.setImage('https://raw.githubusercontent.com/FranciscoNoble/ImageWithNumbers/main/'+maior+'.png')
					
					.setFooter({
						text: footer
					})



					return interaction.reply({
						embeds: [embed],
						components: [row]
					});

				
				  }
				
			
			  
		  
	}
