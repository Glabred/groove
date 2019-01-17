function main() {
    //const profileId = window.location.search.substring(1);
    get("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl", {}, function(songData) {
      renderSongData(songData);
    });
  }
  
  function renderSongData(user) {
    // rendering song image
    const songContainer = document.getElementById('song-image');
    const songImage = document.createElement('img');
    songImage.className = "ui medium rounded image";
    songImage.src = songData.album.images[0].url; // need to fill this out
    songContainer.appendChild(songImage);

    //rendering song title
    const songTitleContainer = document.getElementById('song-title');
    const songTitle = document.createElement('h1');
    songTitle.innerHTML = songData.name; //need to fill this out
    songTitle.className = "ui large header";
    songTitleContainer.appendChild(songTitle);

    //rendering song artist
    const songArtistContainer = document.getElementById('song-artist');
    const songArtist = document.createElement('p');
    songArtist.innerHTML = songData.artists[0].name; //need to fill this out
    songArtist.className = "ui medium header";
    songArtistContainer.appendChild(songArtist);
  }
  
  main();
  