function houdini(){
    $('p').hide();
}

$(document).ready(function(){
    $('#hide-btn').on('click', function(){
        houdini();
});});