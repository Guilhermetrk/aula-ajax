
function gravar(){
    var nome = document.getElementById('nome');
    var telefone = document.getElementById('telefone');
    var email = document.getElementById('email');
    var lista = document.getElementById('lista');
   
    var div = document.getElementById("msg-erro");
    div.style.display="none";


    if (nome.value == "" || nome.value.length < 3){
        exibeErro("O campo nome é obrigatorio");
        nome.focus();
        return; // early return
    } 

    var regex = /^\([0-9]+\)[0-9]{4}\-[0-9]{4}$/gm;

    if ( regex.exec(telefone.value) == null ){
        exibeErro("O campo telefone é obrigatorio");
        telefone.focus();
        return; // early return
    } 

    if (email.value == ""){
        exibeErro("O campo email é obrigatorio");
        email.focus();
        return; // early return
    } 

    var novo = '<tr>'
               + '<td>'+ nome.value +'</td>'
               + '<td>'+ telefone.value +'</td>'
               + '<td>'+ email.value +'</td>'
               + '</tr>'
    
    lista.innerHTML +=  novo;

 
}

function exibeErro(msg){
    var div = document.getElementById("msg-erro");
    div.innerHTML = msg;
    div.style.display = "block";
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








