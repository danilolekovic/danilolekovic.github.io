$("#canalyst-show").click(function() {
    $(".exerience-label-active").removeClass("exerience-label-active");
    $("#canalyst-show").addClass("exerience-label-active");
    $(".experience-active").removeClass("experience-active");
    $("#canalyst").addClass("experience-active");
});

$("#ips-show").click(function() {
    $(".exerience-label-active").removeClass("exerience-label-active");
    $("#ips-show").addClass("exerience-label-active");
    $(".experience-active").removeClass("experience-active");
    $("#ips").addClass("experience-active");
});

$("#bb-show").click(function() {
    $(".exerience-label-active").removeClass("exerience-label-active");
    $("#bb-show").addClass("exerience-label-active");
    $(".experience-active").removeClass("experience-active");
    $("#best-buy").addClass("experience-active");
});

$(".header-hamburger").click(function() {
    if ($(this).text() == "☰") {
        $(this).text("☷");
        $(".header-links").fadeIn();
    } else {
        $(this).text("☰");
        $(".header-links").hide();
    }
});