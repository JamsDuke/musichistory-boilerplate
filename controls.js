// var songs = [];

// songs[songs.length] = "Through the Fire and the Flames > by Dragonforce on the album Inhuman Rampage";
// songs[songs.length] = "Bus Stop Boxer > by The Eels on the album Souljacker";
// songs[songs.length] = "Take on Me > by Ninja Sex Party on the album Under the Covers";
// songs[songs.length] = "Regretroid > by Starbomb on the album Starbomb";
// songs[songs.length] = "Brothers of Metal > by ManOWar on the album Louder Than Hell";

// var removeCharArray = [];
// for (i = 0; i < songs.length; i++) {
//   removeCharArray.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

// }

// var finalSongArray = [];
// for (i = 0; i < removeCharArray.length; i++) {
//   finalSongArray.push(removeCharArray[i].replace(">", "-"));
//   var songBox = document.getElementById("musicInfo");
//     songBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
// };




var moreSongs = (function () {
var loadSongs = [];

  return {
    getSongs: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'songs.json')
      xhr.addEventListener('load', function (evt) {
        songsJSON = JSON.parse(evt.target.responseText).songs
        cb(songsJSON)
      })
      xhr.send()
    },
    populatePage: function () {
      var container = document.querySelector(".songBox")

      songsJSON.forEach(function(songs) {
        container.innerHTML += `
          <p>${songs.name} by
          ${songs.artist} on the album
          ${songs.album}
          <button type="button" id="deleteButton">x</button></p>`
    })
  }
}

})(moreSongs || {})

moreSongs.getSongs(moreSongs.populatePage)

document.getElementById("addButton").addEventListener("click", function(evt){
  var userSong = document.getElementById("userSong").value
  var userArtist = document.getElementById("userArtist").value
  var userAlbum = document.getElementById("userAlbum").value
  var newSong = userSong + " by " + userArtist + " on the album " + userAlbum
  // finalSongArray.push(newSong)
    songBox.innerHTML += `<p>${newSong} <button id="deleteButton">x</button></p>`
    document.getElementById("userSong").value = "";
    document.getElementById("userArtist").value = "";
    document.getElementById("userAlbum").value = "";

})


