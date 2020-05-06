$(function(){
    $('.devoured').on('click', function(e){
        e.preventDefault();
        let id = $(this).data('id');  
        var devouredStatus = {
            devoured: 1
        };
        $.ajax('/api/burgers/' + id,{
            type: 'PUT',
            data: devouredStatus
        }).then(function(){
            location.reload();
        })
    });

    $('.add').on('submit', function(e){
        e.preventDefault();
        console.log(newBurg);
        var newBurg = {
            burger_name: $('#newBurger').val().trim(),
            devoured: 0
        };
        
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurg
        }).then(function(){
            console.log('added burger: ' + burger_name);
            location.reload();
        });
    });  
});