$(document).ready(function(){

    $('button').click(function(){
        var cidade = $('input').val();

        var del = $('<span class="del">X</span>').click(function(){

         });
        
       var li = $('<li>'+ cidade + '</li>').append(del);

       $("ul").append(li);

    });

});