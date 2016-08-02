var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var removeCharArray = [];
for (i = 0; i < songs.length; i++) {
  removeCharArray.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

}
console.log(removeCharArray);


var finalSongArray = [];
for (i = 0; i < removeCharArray.length; i++) {
  finalSongArray.push(removeCharArray[i].replace(">", "-"));
  var songBox = document.getElementById("musicInfo");
    songBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
};
console.log(finalSongArray);