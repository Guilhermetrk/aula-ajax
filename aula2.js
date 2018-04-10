// comentario de linha
/*
	multiplas linhas
*/

var cidade = "Curitiba";

var cidades = ["Curitiba", "Pinhais", "Colombo", 123];

cidades.push("Araucaria");

console.log(cidades[1]);

var ini = 0;
var ult = cidades.length - 1;

while (ini <= ult)
{
	console.log(cidades[ini]);
	
	ini += 1;
}


// Decrescente
var ult = 0;

for (var ini = cidades.length - 1; ini >= ult; ini = ini - 1)
{
	console.log(cidades[ini]);
}
