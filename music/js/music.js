$.getJSON("https://raw.githubusercontent.com/danilolekovic/danilolekovic.github.io/main/music/music.json", function(json) {
    const songs = json["items"];

    for (var song in songs) {
        var currentSong = songs[song];
        var name = currentSong["track"]["name"];

        if (currentSong["track"]["name"].length > 26) {
            name = currentSong["track"]["name"].substr(0, 26) + "..";
        }

        $("#songs").append("<li><img class='album-art' src='" + currentSong["track"]["album"]["images"][0]["url"] + "'/><span class='track'>" 
        + name + "</span><span class='artist'>" + currentSong["track"]["album"]["artists"][0]["name"] + "</span></li>");
    }
});