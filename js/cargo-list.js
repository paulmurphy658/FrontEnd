$(document).ready( function () {
    $('table').DataTable();

    $(window).resize(function(){
        $('table').DataTable();
    })
} );