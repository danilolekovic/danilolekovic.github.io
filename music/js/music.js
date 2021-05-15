$.getJSON("https://raw.githubusercontent.com/danilolekovic/danilolekovic.github.io/main/music/music.json", function(json) {
    const songs = json["songs"];

    for (var song in songs) {
        var currentSong = songs[song];

        if (currentSong["Track name"].length > 26) {
            currentSong["Track name"] = currentSong["Track name"].substr(0, 26) + "..";
        }

        $("#songs").append("<li><img class='album-art' src='" + currentSong["Art"] + "'/><span class='track'>" 
        + currentSong["Track name"] + "</span><span class='artist'>" + currentSong["Artist name"] + "</span></li>");
    }
});