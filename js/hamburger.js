$(document).ready(function(){
    $("#nav-button").on("click", function(){
        $(".sp-nav").slideToggle();
    });
});
$(document).ready(function(){
    $(".sp-nav .sp-nav-list a").on("click", function(){
        $(".sp-nav").slideToggle();
    });
});