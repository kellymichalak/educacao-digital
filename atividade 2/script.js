// 1. Lógica dos Botões de Curtida/Joinha (Interação dos Cards)
const botoes = document.querySelectorAll("button:not(.btn-tema-escuro)");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});

// 2. Lógica do Botão do Modo Escuro (Alternância de Tema)
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}