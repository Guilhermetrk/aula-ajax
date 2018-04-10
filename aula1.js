
var nome = "Edir"; // String
var idade = 23; // int ->    Number
var peso = 43.9; // float -> Number
var acordado = true; // bool

nome.toUpperCase();

if (acordado == true) {
	console.log("sim");
} else {
	console.log("não");
}


function imprimirNome()
{
   var input = document.getElementById("nome");
   var h2 = document.getElementById("exibir");
   h2.innerHTML = input.value.toUpperCase();
}

 /*
  asd -> Asd
  ASD -> Asd
  aSD -> Asd
 */
function primeiraLetra()
{
	var input = document.getElementById("nome");
	var h2 = document.getElementById("exibir");
	var original = input.value.toLowerCase();
	var primeira = original.charAt(0).toUpperCase();
	
	h2.innerHTML = primeira + original.slice(1)

}





