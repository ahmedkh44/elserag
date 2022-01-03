// scroll navbar 
function checkScroll() {
    var startY = $('.nav-custom').height() * 0;
    //The Point Where The NavBar Changed in px
    if ($(window).scrollTop() > startY) {
        $('.nav-custom').addClass("scrolled");
    } else {
        $('.nav-custom').removeClass("scrolled");
    }
}
if ($('.nav-custom').length > 0) {
    $(window).on("scroll load resize",
        function() {
            checkScroll();
        });
}