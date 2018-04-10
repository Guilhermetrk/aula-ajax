
var cidades = [];

function cadastrar()
{
	var input = document.getElementById("cidade");
	var lista = document.getElementById("lista");
	var total = document.getElementById("total");
	
	if (cidades.includes(input.value)){
		window.alert("A cidade " + input.value + "já esta cadastrada");
	} else {
		cidades.push(input.value);	
	}

	total.innerHTML = cidades.length;

	listar();
	input.value = "";
}

function ordenar()
{
	cidades.sort();
	listar();
}

function listar()
{
	var lista = document.getElementById("lista");

	lista.innerHTML = "";	
	for (var i = 0; i <= cidades.length - 1; i++)
	{
		lista.innerHTML += "<li>" + cidades[i] + "</li>";
	}
}






