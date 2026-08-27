function toggleSinopse(botao) {
  const paragrafo = botao.parentElement;
  const textoEscondido = paragrafo.querySelector('.texto-escondido');

  // Alterna a visibilidade
  if (textoEscondido.style.display === "none" || textoEscondido.style.display === "") {
    textoEscondido.style.display = "inline"; 
    botao.textContent = "Ler menos"; 
  } else {
    textoEscondido.style.display = "none";   
    botao.textContent = "Ler mais"; 
  }
}

const estrelas = document.querySelectorAll(".estrela");
const botao = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

let nota = 0;

const filmes = document.querySelectorAll(".filmeassistido");

filmes.forEach(filme => {

    const estrelas = filme.querySelectorAll(".estrela");
    const botao = filme.querySelector(".enviar");
    const resultado = filme.querySelector(".resultado");

    let nota = 0;

    estrelas.forEach((estrela, indice) => {
        estrela.addEventListener("click", () => {

            nota = indice + 1;

            estrelas.forEach((e, i) => {
                if (i < nota) {
                    e.classList.add("ativa");
                } else {
                    e.classList.remove("ativa");
                }
            });

        });
    });

    botao.addEventListener("click", () => {

        if (nota === 0) {
            resultado.textContent = "Escolha uma quantidade de estrelas.";
        } else {
            resultado.textContent = `Você enviou ${nota} ${nota === 1 ? "estrela" : "estrelas"} para este filme!`;
        }

    });

});