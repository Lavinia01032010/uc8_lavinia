const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const produto = botao.parentElement;

        const nome = botao.dataset.produto;
        const descricao = botao.dataset.descricao;
        const preco = botao.dataset.preco;

        const imagem = produto.querySelector("img").src;
        localStorage.setItem("imagem", imagem);
        localStorage.setItem("produto", nome);
        localStorage.setItem("descricao", descricao);
        localStorage.setItem("preco", preco);

        window.location.href = "pagamento.html";

    });


    
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwabuilder-sw.js')
               .then(() => {
                      console.log('Service Worker registrado com sucesso!');
               })
               .catch(error => {
                      console.error('Erro ao registrar o Service Worker:', error);
               });
    });
}

});