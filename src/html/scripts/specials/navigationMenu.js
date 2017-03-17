window.onload = init;

function init() {
    $(".menu").bind('mouseover', function () {
        $('#m01').addClass("menuHover");
    });
    $(".menu").bind('mouseout', function () {
        $('#m01').removeClass("menuHover");
    });
}