$(document).ready(function(){
    $(function(){
        $("#intro").css({height:$(window).height()-62});
        $(window).resize(function(){
            $("#intro").css({height:$(window).height()-62})
        })
    });
});