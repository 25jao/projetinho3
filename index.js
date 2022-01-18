const telegramBot = require("node-telegram-bot-api");
const token = "5040886780:AAEEzgLJkLlpH6KAoBN2Yc3lgyd-64MRaqU";
const bot = new telegramBot(token, {polling:true});
bot.on('message', function (msg){
    const chatid = msg.chat.id;
    const mensagem = msg.text
    let comando = mensagem.split(' ');
    let nvezes = 0;
    let tamanho = 0;
    if(comando.length > 1){
        nvezes = parseInt(comando[0]);
        tamanho = parseInt(comando[1]);
    }
    if(isNaN(nvezes) || isNaN(tamanho)){
        bot.sendMessage(chatid, "Comando não aceito. Por favor digite o número de vezes que deseja rodar o dado, seguido do tipo do dado");
    }else{
        for(let i = 0; i < nvezes; i++){
            let dado = (Math.floor(Math.random() * tamanho)) + 1;
            bot.sendMessage(chatid, "você tirou " + String(dado) + " no dado");
        }
    }
})