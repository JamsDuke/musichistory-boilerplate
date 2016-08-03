var songs = [];

songs[songs.length] = "Through the Fire and the Flames > by Dragonforce on the album Inhuman Rampage";
songs[songs.length] = "Bus Stop Boxer > by The Eels on the album Souljacker";
songs[songs.length] = "Take on Me > by Ninja Sex Party on the album Under the Covers";
songs[songs.length] = "Regretroid > by Starbomb on the album Starbomb";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var removeCharArray = [];
for (i = 0; i < songs.length; i++) {
  removeCharArray.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

}

var finalSongArray = [];
for (i = 0; i < removeCharArray.length; i++) {
  finalSongArray.push(removeCharArray[i].replace(">", "-"));
  var songBox = document.getElementById("musicInfo");
    songBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
};