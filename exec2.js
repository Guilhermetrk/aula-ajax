
function pesquisar()
{
    var texto = document.getElementById("texto");
    var palavra = document.getElementById("palavra");

    var novo = '<span class="selecionado">'+ palavra.value +'</span>';

    var atualizado = texto.innerHTML.replace(palavra.value, novo);

    texto.innerHTML = atualizado;
}

function rodaTexto()
{
    var letreiro = document.getElementById("letreiro");
    var texto = letreiro.innerHTML;

    var novo = texto.substr(1) + texto.charAt(0);

    letreiro.innerHTML = novo;

}

var painel ;

function liga()
{
    painel = setInterval(rodaTexto, 200);
}

function desliga()
{
    clearInterval(painel);
}