
function gravar(){
    var nome = document.getElementById('nome');
    var telefone = document.getElementById('telefone');
    var email = document.getElementById('email');
    var lista = document.getElementById('lista');
   
    var novo = '<tr>'
               + '<td>'+ nome.value +'</td>'
               + '<td>'+ telefone.value +'</td>'
               + '<td>'+ email.value +'</td>'
               + '</tr>'
    
    lista.innerHTML +=  novo;

 
}

function pegar(){
    var dados = [
        {
            nome: "Edir",
            telefone: "1234-1234",
            email: "prog@prof.com"
        },
        {
            nome: "Jose",
            telefone: "1241-1234",
            email: "jose@prof.com"
        }
    ];

    var lista = document.getElementById("lista");

    for (var i = 0; 1 < dados.length; i++)
    {
        var novo = '<tr>'
                + '<td>'+ dados[i].nome +'</td>'
                + '<td>'+ dados[i].telefone +'</td>'
                + '<td>'+ dados[i].email +'</td>'
                + '</tr>'

        lista.innerHTML +=  novo;
    } 
    
}




