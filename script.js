$('td').on('click', function(){
    $('td').removeClass('selected');
    $(this).addClass('selected');
});