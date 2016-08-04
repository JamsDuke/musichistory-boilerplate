var Music = (function songModule(music = {}) {
  songs = [];

  music.getSavedSongs = function getSongs(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'songs.json');
    xhr.addEventListener('load', function onLoad() {
      songs = JSON.parse(xhr.responseText);
      console.info('Success: Loaded songs from songs.json.');
      callback(songs);
    });
    xhr.send();
  }

  return music;
})(Music);


var Music = (function controlsModule(music = {}) {
  // Load the saved songs from the JSON file
  var songs;

  music.getSavedSongs(load);

  function load(sng) {
    songs = sng.songs;

    // Load the saved songs into the DOM
    for (var i = 0; i < songs.length; i++) {
      music.addSongToDom(i, songs[i]);
    }
  }

  var songBox = document.querySelector('.songBox');

  music.addSong = function addSong(song) {
    // Add message to private array
    songs.push(song);
    var newIndex = songs.length;
    music.addSongToDom(newIndex, song)
  };

  music.addSongToDom = function addSongToDom(id, song) {
    var songElement = document.createElement('div');
    songElement.style.margin = '5px';
    songElement.id = id;

    // Message elements must have an ID; the first index should be 0.
    var elementContent = `
      <p style="display:inline">${song.name}, ${song.artist}, ${song.album}</p>
      <button type="button" onclick="Music.removeSong('${id}')" class="btn btn-danger">X
      </button>
      <hr>
    `;

    songElement.innerHTML = elementContent;

    // Append the new element to the chat box
    songBox.appendChild(songElement);
  };

  // Searches for a specific id and deletes that element
  music.removeSong = function removeSong(id) {
    var song = document.getElementById(id);
    songBox.removeChild(song);
    songs.splice(id, 1);
  };

  music.getNextId = function getNextId() {
    return songs.length - 1;
  };

  document.getElementById("addButton").addEventListener("click", function(evt){
    var userSong = document.getElementById("userSong");
    var userArtist = document.getElementById("userArtist");
    var userAlbum = document.getElementById("userAlbum");
    var newSong = {
        "name": userSong.value,
        "artist": userArtist.value,
        "album": userAlbum.value
      }
      music.addSong(newSong)
      userSong.value = "";
      userArtist.value = "";
      userAlbum.value = "";
        console.log('this works', newSong)

  })
  music.deleteSongs = function() {
    songs = [];
  };

  return music;
})(Music);
