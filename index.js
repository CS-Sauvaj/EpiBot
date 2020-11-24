const Discord = require('discord.js')
const ms = require('ms')
const bot = new Discord.Client()

var sp_partie1 = '()'
var sp_partie2 = '()'
const question_strawpoll1 = 'Votez pour oui ' 
const question_strawpoll2 = ' avec ✅ et votez pour non '
const question_strawpoll3 = ' avec ❌   @everyone'
const question_strawpoll4 = ' avec ❌   <@&625801982028021770>'
var random = 0

/**************************************************************************************************************************************************/

bot.on('guildMemberAdd', function(member){
    member.createDM().then(function(channel){
        return channel.send('Hey, bienvenue sur le discord des classes B1 et B2 d\'EPITA ! Renomme toi par ton prénom puis la première lettre de ton nom de famille suivi de ta classe pour que l\'on puisse t\'atribuer le bon rôle s\il te plait ;) Bonne journée')
    }).catch(console.error)
})

/**************************************************************************************************************************************************/

bot.on('ready', function(){
    bot.user.setActivity('CAML CETTE MERDE').catch(console.error)
})

/**************************************************************************************************************************************************/

bot.on('message', function (message) {

    console.log(message.author.username + ' : ' + message.content + ' (' + message.createdAt.getHours() + 'h' + message.createdAt.getMinutes() + ')')

    let args = message.content.split('.')
    let args_space = message.content.split(' ')

    if (message.content === '!jouer') {
        let voiceChannel = message.guild.channels.filter(function(channel){return channel.type === 'voice'}).first()
        voiceChannel.join().then(function(connection){
            connection.playFile('./test.mp3')
          })
    }

    /**************************************************************************************************************************************************/


    if (message.content === '!help') {

    }
    if (message.content === '!happy') {
        message.delete().catch(console.error)
        message.author.send('T\'es beau !')
    }

    /**************************************************************************************************************************************************/

    if (args_space.includes('carotte')) {
        message.react('🥕')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'carotte\' voilà le mdp_carotte : "chocolate_bunny" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if (message.content === 'chocolate_bunny') {
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if (args_space.includes('malade')){
        message.react('🤢')
        message.channel.send('🤮')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'malade\' voilà le mdp_malade : "m_approche_pas" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if (message.content === 'm_approche_pas') {
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('amour')){
        message.react('😍')
        message.channel.send('Mais moi aussi je t\'aime ' + message.author.username + ' !')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'amour\' voilà le mdp_amour : "fais_moi_l_amour" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'fais_moi_l_amour'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('argent')){
        message.react('🤑')
        message.channel.send('Merci EPITA')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'argent\' voilà le mdp_argent : "richesse_d_ingénieur" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'richesse_d_ingénieur'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('fuck')){
        message.react('🖕')
        message.channel.send('Parle mieux toi aussi')
        message.author.send('Bravo (mais parle bien fdp -.-), tu as trouvé l\'easter egg \'fuck\' voilà le mdp_fuck : "nique_ta_race" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'nique_ta_race'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(message.content === 'Hugo Simony c\'est le plus beau'){
        message.react('👀')
        message.channel.send('Ce que t\'arrives à dire pour ce jeu...')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'hugo\' voilà le mdp_hugo : "hugo_te_remercie" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'hugo_te_remercie'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('feu')){
        message.react('🚒')
        message.channel.send('PIIIIIN POOOOON PIIIIIN POOOOON')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'feu\' voilà le mdp_feu : "merci_les_pompiers" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'merci_les_pompiers'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('roi')){
        message.react('👑')
        message.channel.send('"When you play the game of thrones, you win or you die"')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'roi\' voilà le mdp_roi : "team_daenerys" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'team_daenerys'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('dick')){
        message.react('🦆')
        message.channel.send('Tu voulais écrire duck n\'est-ce-pas ? Hum hum')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'duck\' voilà le mdp_duck : "fuate_ed_farppe" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'fuate_ed_farppe'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    if(args_space.includes('jouer')){
        message.react('🎮')
        message.channel.send('D\'accord, mais pas trop tard ' + message.author.username + ' !')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'jouer\' voilà le mdp_jouer : "retourne_travailler" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'retourne_travailler'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }

    if(args_space.includes('caml')){
        message.react('💩')
        message.channel.send('Attends voir... Oui, c\'est de la merde !')
        message.author.send('Bravo, tu as trouvé l\'easter egg \'caml\' voilà le mdp_caml : "chameau_puant" ! Rentre le dans cette conversation pour avancer dans ton objectif de TOUS LES TROUVER :)')
    }
    if(message.content === 'chameau_puant'){
        message.react('👏')
        message.author.send('GG ! Il te reste encore d\'autres easter eggs à trouver ! Fonce et tu seras peut être agréablement surpris(e) ;)')
    }


    /**************************************************************************************************************************************************/    

    if (message.content === '!discord') {
        message.delete().catch(console.error)
        message.author.send('Voici le discord officiel d\'EPITA :')
        message.author.send('https://discord.gg/wMTE2Rx')
    }

    /**************************************************************************************************************************************************/

    if (args[0] === '!strawpoll' || args[0] === '!sp') {
        message.delete().catch(console.error)
        sp_partie1 = '(' + args[1] + ')'
        sp_partie2 = '(' + args[2] + ')'
        message.channel.send(question_strawpoll1 + sp_partie1 + question_strawpoll2 + sp_partie2 + question_strawpoll3)
    }

    if (args[0] === '!strawpollmc' || args[0] === '!spmc') {
        message.delete().catch(console.error)
        sp_partie1 = '(' + args[1] + ')'
        sp_partie2 = '(' + args[2] + ')'
        message.channel.send(question_strawpoll1 + sp_partie1 + question_strawpoll2 + sp_partie2 + question_strawpoll4)
    }

    if (message.content === (question_strawpoll1 + sp_partie1 + question_strawpoll2 + sp_partie2 + question_strawpoll3) || message.content === (question_strawpoll1 + sp_partie1 + question_strawpoll2 + sp_partie2 + question_strawpoll4)){
        message.react('✅')
        message.react('❌')
    }

    /**************************************************************************************************************************************************/

    if (message.content === '!bonne nuit' || message.content === '!bn' || message.content === '!good night' || message.content === '!gn') {
        message.delete().catch(console.error)
        message.channel.send('```Bonne nuit ' + message.author.username + '```')
        random = Math.floor(Math.random() * 4)
        if(random == 0){
            message.author.send('Fais de beaux rêves <3')
        }
        if(random == 1){
            message.author.send('Dors bien !')
        }
        if(random == 2){
            message.author.send('Tombe dans les bras de Morphée...')
        }
        if(random == 3){
            message.author.send('EpiBot te souhaite de bien te reposer ;)')
        }
    }
})

/**************************************************************************************************************************************************/

bot.login('NjE5NjUzMTA1Mzk0Mzg0OTA2.XXLbCg.yz4mFbAZ1kRrgYv5MM5mzrIzrSA')