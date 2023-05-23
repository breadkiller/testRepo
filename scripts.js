var time = new Date();
var hour = time.getHours();

var dayContent = document.getElementById("day");
var ssContent = document.getElementById("sunset");
var nightContent = document.getElementById("night");

var selectedTrack = null;
var dayTrack = new Audio("items/test.ogg");
var ssTrack = new Audio("items/test.ogg");
var nightTrack = new Audio("items/test.ogg");

// Disable video paused by clicking
dayContent.onpause = () => { dayContent.play(); }
ssContent.onpause = () => { ssContent.play(); }
nightContent.onpause = () => { nightContent.play(); }


// Day: Select content and audio to play (8 hours)
if (hour >= 6 && hour < 14) {
  dayContent.style.display = "flex";
  ssContent.style.display = "none"
  nightContent.style.display = "none";
  selectedTrack = dayTrack;
}

// Sunset: Select content and audio to play (6 hours)
if (hour >= 14 && hour < 20) {
  dayContent.style.display = "none";
  ssContent.style.display = "flex"
  nightContent.style.display = "none";
  selectedTrack = ssTrack;
}

// Night_1: Select content and audio to play (10 hours)
if (hour >= 20 && hour < 24) {
  dayContent.style.display = "none";
  ssContent.style.display = "none"
  nightContent.style.display = "flex";
  selectedTrack = nightTrack;
}

// Night_2: Select content and audio to play
if (hour >= 0 && hour < 6) {
  dayContent.style.display = "none";
  ssContent.style.display = "none"
  nightContent.style.display = "flex";
  selectedTrack = nightTrack;
}

// Enable clicking to play audio
function playAudio() { 
  if (selectedTrack.paused == true) { selectedTrack.play(); }
  else { selectedTrack.pause(); }
} 
