
const apiUrl = 'https://api.disneyapi.dev/character';      // SUBSTITUA PELO ENDPOINT DA API QUE VOCÊ VAI USAR (URL)




/* INSIRA SEU CÓDIGO AQUI */




// FUNÇÃO PARA CARREGAR OS PERSONAGENS
function carregarPersonagens() {

    botaoCarregar.disabled = true;      // Desabilita o botão enquanto a API responde
    mensagem.textContent = 'Carregando personagens...';
    
    let url = 'MONTE A URL DA REQUISIÇÃO PARA A API, INCLUINDO A PAGINA ATUAL E O LIMITE DE PERSONAGENS POR PÁGINA';    


    // O FETCH() É UMA FUNÇÃO QUE FAZ UMA REQUISIÇÃO HTTP PARA UM ENDPOINT E RETORNA UMA RESPOSTA
    fetch(url) 

        // O THEN() É UMA FUNÇÃO QUE EXECUTA UM BLOCO DE CÓDIGO QUANDO O FETCH() RETORNA UMA RESPOSTA
        // O RESPOSTA.JSON() VAI CONVERTER A RESPOSTA EM UM OBJETO JSON    
        .then(function (resposta) {     
            return resposta.json();
        })


        // O THEN() É UMA FUNÇÃO QUE EXECUTA UM BLOCO DE CÓDIGO QUANDO O RESPOSTA.JSON() RETORNA UM OBJETO JSON
        // AQUI VAI RECEBER O OBJETO JSON CONVERTIDO COM OS DADOS DA API, E VOCÊ VAI MANIPULAR ESSES DADOS PARA CRIAR OS CARDS COM OS PERSONAGENS
        .then(function (resultado) {  





            /* INSIRA SEU CÓDIGO AQUI */




        })
}

// FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM
function criarCard(personagem) {




    /* INSIRA SEU CÓDIGO AQUI */

    

}

// ABAIXO VOCÊ DEVE IMPLEMENTAR O EVENTO DE CLIQUE NO BOTÃO PARA CARREGAR MAIS PERSONAGENS, E CHAMAR A FUNÇÃO carregarPersonagens() NOVAMENTE PARA CARREGAR A PRÓXIMA PÁGINA DE PERSONAGENS



/* INSIRA SEU CÓDIGO AQUI */



