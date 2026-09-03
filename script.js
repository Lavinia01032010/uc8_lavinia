// ====================================================================================================================================================================================
// FASE 1: Alterar o texto dentro da caixinha
// COMPORTAMENTO:
// --> A tela inicia com o texto “O JavaScript pode alterar o conteúdo de um elemento HTML”.
// --> Ao clicar no botão “Alterar texto” o texto deve ser alterado para “Olá, JavaScript! O texto foi trocado!”.
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA ALTERAR O TEXTO E RESETAR O TEXTO DO BOX 1 <<<
// ====================================================================================================================================================================================

function alterarConteudo() {
    document.getElementById('demo1').innerHTML =
        "Olá, JavaScript! O texto foi trocado! 🎉";
}

function resetarConteudo() {
    document.getElementById('demo1').innerHTML =
        "O JavaScript pode alterar o conteúdo de um elemento HTML.";
}


// ====================================================================================================================================================================================
// FASE 2: LIGAR E DESLIGAR LÂMPADA
// COMPORTAMENTO:
// --> A tela inicia com a lâmpada desligada.
// --> Ao clicar no botão “Ligar a luz” a lâmpada deve ligar.
// --> Quando clicar em “Desligar a luz” a lâmpada deve desligar.

// >>> CRIE AS FUNÇÕES PARA LIGAR E DESLIGAR A LÂMPADA DO BOX 2 <<<
// ====================================================================================================================================================================================


function ligarLampada() {
    document.getElementById('lamp-off').style.display = 'none';
    document.getElementById('lamp-on').style.display = 'block';
    document.getElementById('lamp-status').innerText = '💡 Lâmpada ligada!';
}

function desligarLampada() {
    document.getElementById('lamp-off').style.display = 'block';
    document.getElementById('lamp-on').style.display = 'none';
    document.getElementById('lamp-status').innerText = '💡 Lâmpada desligada!';
}


// ====================================================================================================================================================================================
// FASE 3: Alterar os estilos do texto
// COMPORTAMENTO:
// --> A tela inicia com o texto “O JavaScript pode alterar o estilo visual de qualquer elemento”, sem nenhum estilo aplicado.
// --> Ao clicar no botão “Aumentar fonte”, o tamanho da letra deve aumentar para 25px.
// --> Ao clicar no botão “Mudar cor”, a cor do texto deve ficar verde. Ao clicar no botão “Negrito”, o texto fica em negrito.
// --> Ao clicar no botão “Fundo”, é aplicado um fundo com transparência no texto.
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA AUMENTAR TAMANHO DA FONTE, MUDAR A COR, APLICAR NEGRITO, APLICAR FUNDO E RESETAR A DEMONSTRAÇÃO DO BOX 3 <<<
// ====================================================================================================================================================================================

function aumentarFonte() {
    document.getElementById("demo3").style.fontSize = "25px";
}

function mudarCor() {
    document.getElementById("demo3").style.color = "green";
}

function aplicarNegrito() {
    document.getElementById("demo3").style.fontWeight = "bold";
}

function aplicarFundo() {
    document.getElementById("demo3").style.backgroundColor =
        "rgba(0, 0, 0, 0.2)";
}

function resetarDemonstracao() {
    document.getElementById("demo3").style.fontSize = "";
    document.getElementById("demo3").style.color = "";
    document.getElementById("demo3").style.fontWeight = "";
    document.getElementById("demo3").style.backgroundColor = "";
}

// ====================================================================================================================================================================================
// FASE 4: Ocultar o texto
// COMPORTAMENTO:
// --> A tela inicia com o texto “Este parágrafo vai sumir quando você clicar no botão abaixo.”.
// --> Ao clicar no botão “Ocultar elemento”, o texto deve sumir.
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA OCULTAR ELEMENTO E MOSTRAR ELEMENTO DO BOX 4 <<<
// ======================================================================================================================================================================================

function ocultarElemento() {
    document.getElementById("demo4").style.display = "none";
}

function mostrarElemento() {
    document.getElementById("demo4").style.display = "block";
}

// ====================================================================================================================================================================================
// FASE 5: Exibir o texto
// COMPORTAMENTO:
// --> A tela inicia com um texto oculto.
// --> Ao clicar no botão “Revelar elemento”, o texto deve aparecer.
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA MOSTRAR TEXTO E OCULTAR TEXTO DO BOX 5 <<<
// ====================================================================================================================================================================================

function exibirTexto() {
    document.getElementById("hidden-text").style.display = "block";
}

function esconderTexto() {
    document.getElementById("hidden-text").style.display = "none";
}


// ====================================================================================================================================================================================
// FASE 6: Iniciar a aplicação
// COMPORTAMENTO:
// --> O index.html será executado
// --> Em seguida, a linha "document.addEventListener('DOMContentLoaded', iniciarAplicacao);" vai chamar a função iniciarAplicacao()
// --> A função será executada e dentro dela terá outras chamadas de função (as que você criou ali em cima - FASE 1 a 5)
// --> Essas chamadas de função devem executar as funções que você programou na sua página

// >>> CRIE A FUNÇÃO PARA INICIAR A APLICAÇÃO, QUE SERÁ CHAMADA PELA LINHA document.addEventListener('DOMContentLoaded', iniciarAplicacao); <<<
// ====================================================================================================================================================================================

function iniciarAplicacao() {
  // --------------------------------------------------------
  // FASE 1: Configure e chame as funções que irão alterar
  // e resetar o texto dentro da caixinha
  // --------------------------------------------------------
  document.getElementById("botao-alterar-texto") .addEventListener("click", alterarConteudo); 

  document.getElementById("botao-resetar-demo1") .addEventListener("click", resetarConteudo);

  
  // --------------------------------------------------------
  // FASE 2: Configure e chame as funções que irão ligar e
  // desligar a lâmpada
  // --------------------------------------------------------
  document.getElementById("botao-ligar") .addEventListener("click", ligarLampada);

  document.getElementById("botao-desligar") .addEventListener("click", desligarLampada);


  // --------------------------------------------------------
  // FASE 3: Configure e chame as funções que irão alterar
  // os estilos do texto
  // --------------------------------------------------------
  document.getElementById("botao-aumentar-fonte").addEventListener("click", aumentarFonte);

  document.getElementById("botao-mudar-cor") .addEventListener("click", mudarCor);
 
  document.getElementById("botao-negrito") .addEventListener("click", aplicarNegrito);

  document.getElementById("botao-fundo") .addEventListener("click", aplicarFundo);

  document.getElementById("botao-resetar-demo3") .addEventListener("click", resetarDemonstracao);


  // --------------------------------------------------------
  // FASE 4: Configure e chame as funções que irão ocultar e
  // mostrar o elemento
  // --------------------------------------------------------
  document.getElementById("botao-ocultar") .addEventListener("click", ocultarElemento); 

  document.getElementById("botao-mostrar") .addEventListener("click", mostrarElemento);
 


  // --------------------------------------------------------
  // FASE 5: Configure e chame as funções que irão ocultar e
  // mostrar o texto
  // -------------------------------------------------------
 document.getElementById("botao-revelar") .addEventListener("click", exibirTexto); 

 document.getElementById("botao-esconder") .addEventListener("click", esconderTexto);
 


}
document.addEventListener('DOMContentLoaded', iniciarAplicacao);