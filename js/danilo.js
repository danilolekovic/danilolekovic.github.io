// Buttons

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

// Stars

$.get("https://api.github.com/users/danilolekovic/repos", function(data) {
    console.log(data);
    for (repo in data) {
        if (data[repo]["name"] == "iode") {
            $(".iode-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "echo") {
            $(".echo-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "Butler") {
            $(".butler-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "kite") {
            $(".kite-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "iode") {
            $(".iode-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "COVID-Twitter-Bot") {
            $(".covid-stars").text("★ " + data[repo]["stargazers_count"]);
        } else if (data[repo]["name"] == "pitfall") {
            $(".pitfall-stars").text("★ " + data[repo]["stargazers_count"]);
        }
    }
});