var Music = (function controlsModule(music = {}) {
  // Load the saved messages from the JSON file
  var songs;

  music.getSavedSongs(load);

  function load(sng) {
    songs = sng.songs;

    // Load the saved messages into the DOM
    for (var i = 0; i < songs.length; i++) {
      music.addSongToDom(i, songs[i]);
    }
  }

  var songBox = document.querySelector('.songBox');

  music.addSong = function addSong(song) {
    // Add message to private array
    songs.push(song);
  };

  music.addSongToDom = function addSongToDom(id, song) {
    var songElement = document.createElement('div');
    songElement.style.margin = '5px';
    songElement.id = id;

    // Message elements must have an ID; the first index should be 0.
    var elementContent = `
      <p style="display:inline">${message.message}</p>
      <button type="button" onclick="Music.removeSong('${id}')" class="btn btn-danger">
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

  music.deleteSongs = function removeSongs() {
    songs = [];
  };

  return music;
})(Music);