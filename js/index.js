$(document).ready(function(){
    $(".menu-main").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});