// Gravador de voz
const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');


//Função para iniciar a gravação
function iniciarGravacao() {
    // Inicia a gravação
   btnGravador.style.backgroundColor = "#e74c3c";
   btnGravador.textContent = "Gravando.. Não solte!";
   statusGravacao.textContent = " Status: Capturando áudio...";
}



//Função para parar a gravação
function pararGravacao() {
    //Finaliza a gravação
    btnGravador.style.backgroundColor = "#3498db";
    btnGravador.textContent = "Clique e segure para gravar";
    statusGravacao.textContent = " Status: Gravação concluída e enviada!";
}

// Captura os eventos de pressionar e soltar o botão do gravador
btnGravador.addEventListener('mousedown' , iniciarGravacao);
btnGravador.addEventListener( 'mouseup', pararGravacao);