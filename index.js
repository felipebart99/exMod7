document.addEventListener("DOMContentLoaded", function() {
    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");
    var botao = document.getElementById("meuBotao");
    var formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); 

        var valorA = parseFloat(campoA.value);
        var valorB = parseFloat(campoB.value);

        if (valorB > valorA) {
            e.target.submit();
            alert("Formulário enviado");
        } 
    });

    // Função para atualizar o estado do botão
    function atualizarEstadoBotao() {
        var valorA = parseFloat(campoA.value);
        var valorB = parseFloat(campoB.value);
        if (valorA >= valorB){
            alert("O campo B deve ser maior que o A");
        }
        botao.disabled = isNaN(valorA) || isNaN(valorB) || valorB <= valorA;
    }

    campoA.addEventListener("input", atualizarEstadoBotao);
    campoB.addEventListener("input", atualizarEstadoBotao);
    atualizarEstadoBotao();
});
