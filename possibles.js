$(document).ready(function(){
    $(".fancybox-thumb").fancybox({
        prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},thumbs:{width:50,height:50}}});
    $(function(){$("#intro").css({height:$(window).height()+"px"});
        $(window).resize(function(){$("#intro").css({height:$(window).height()+"px"})})});
    $(function(){$("#more a, .nav a, .nav li a, .brand, #footer li a").bind("click",function(event){var $anchor=$(this);
        $('[data-spy="scroll"]').each(function(){var $spy=$(this).scrollspy("refresh")});
        $("html, body").stop().animate({scrollTop:$($anchor.attr("href")).offset().top-61},1500,"easeInOutExpo");
        event.preventDefault()})});$(".fancybox").fancybox({openEffect:"none",closeEffect:"none"});$(".nav a").click(function(){$(".nav-collapse").collapse("hide")})});