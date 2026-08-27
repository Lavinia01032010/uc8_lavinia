window.onload = function(){

    document.getElementById("produto").textContent =
        localStorage.getItem("produto");

    document.getElementById("descricao").textContent =
        localStorage.getItem("descricao");

    document.getElementById("preco").textContent =
        Number(localStorage.getItem("preco")).toFixed(2);
        
        document.getElementById("imagemProduto").src = localStorage.getItem("imagem");

}

document.getElementById("comprar").onclick = function(){

    const mensagem = document.getElementById("mensagem");

    mensagem.style.display = "block";

    mensagem.innerHTML = `
        <h3> Ótima compra!</h3>
        <br>
        Acompanhe seu pedido pelo SMS ou G-mail.
    `;



    
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

}