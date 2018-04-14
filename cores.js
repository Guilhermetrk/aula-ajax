
$(document).ready(function(){

    $('#vermelho, #verde').change(function(){

        var vermelho = $('vermelho').val();
        var verde = $('verde').val();

        $('#lista-cores tbody').empty();
    for (var blue = 0; blue < 255; blue += 10)
    {
        var nova = '<tr>'
             + ' <td>rgb('+ vermelho + ','+ verde +','+ blue +')</td>'
             + ' <td style="background-color: rgb('+ vermelho + ','+ verde +','+ blue +') ></td>'
             + ' </tr>';
        $('#lista-cores').append(nova);       
    }

       
    });

    $('input[type=range]').change(function(){
        var vermelho = $('vermelho').val();
        var verde = $('verde').val();
        var azul = $('azul').val();

        $('#box-cor').css("background-color", "rgb("+vermelho+","+verde+", "+azul+")");
        $('#box-cor').html("rgb("+vermelho+","+verde+", "+azul+")");
    });

});