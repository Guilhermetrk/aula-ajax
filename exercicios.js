
function soma()
{
	var n1 = document.getElementById("n1");
	var n2 = document.getElementById("n2");
	var display = document.getElementById("display");


	if (n1.value.search(",") >= 0){
		alert("numero inválido");	
	} else {
		display.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
	}	
	
	
}

function reverter()
{
	var texto = document.getElementById("texto");
	var resultado = document.getElementById("resultado");
	
	console.log(texto, resultado);
	//var ini = texto.value.length - 1;
	//var ult = 0;
	
	for (var ini = texto.value.length - 1; ini >= 0; ini--)
	{
		resultado.innerHTML += texto.value.charAt(ini);
	}

}

function contar()
{
	var texto = document.getElementById("valores").value;
	
	var palavras = texto.split(" ");
	alert("total de palavras é: " + palavras.length);
	
}




