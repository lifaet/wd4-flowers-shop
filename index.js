
$("#home").click(function () {
    $('html,body').animate({
        scrollTop: $(".font-container").offset().top - 45
    },
        'fast');
});
$("#feature").click(function () {
    $('html,body').animate({
        scrollTop: $(".features-container").offset().top - 45
    },
        'fast');
});
$("#featurex").click(function () {
    $('html,body').animate({
        scrollTop: $(".features-container").offset().top - 45
    },
        'fast');
});
$("#hot").click(function () {
    $('html,body').animate({
        scrollTop: $(".hot-container").offset().top
    },
        'fast');
});
$("#insta").click(function () {

    $('html,body').animate({
        scrollTop: $(".insta-container").offset().top
    },
        'fast');
});