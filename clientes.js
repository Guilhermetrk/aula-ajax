$(function() {
   // $("fieldset + button").click(function(){
        $.getJSON("/lista-clientes.json", function(valores){
          
            /* for(var i = 0; i < valores.length; i++)
            {
                var tr = '<tr>'
                        +'<td>'+ valores[i].nome +'</td>'
                        +'<td>'+ valores[i].email +'</td>'
                        +'<td>'+ valores[i].cep +'</td>'
                        +'<td>'+ valores[i].dataNasc +'</td>'
                        +'</tr>';

                $("tbody").append(tr);       
            }*/

            $('tbody').empty();
            valores.forEach(function(val, idx) {
                var tr = '<tr>'
                        +'<td>'+ val.nome +'</td>'
                        +'<td>'+ val.email +'</td>'
                        +'<td>'+ val.cep +'</td>'
                        +'<td>'+ val.dataNasc +'</td>'
                        +'</tr>';

                 $("tbody").append(tr);
            });
        });
   // });

});