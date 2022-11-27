$(document).ready(function(){


    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li ></li>');
        console.log(novoItem);

        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $('#nova-tarefa').val('')

        $(novoItem).appendTo('ul');
        $('li').click(function(){
            $(this).css("text-decoration", "line-through");
        })
    })
})
