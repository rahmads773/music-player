let audio = document.getElementById("audio");
let audiotext = document.getElementById("audio-text");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let buttons = document.getElementById("buttons");
let next = document.getElementById("next");
let back = document.getElementById("back");

buttons.addEventListener("click", (eo) => {
  if (eo.target.className == "bi bi-play-circle-fill") {
    audio.play();
    play.classList.add("playnone");
    pause.classList.add("pauseblock");
  } else if (eo.target.className == "bi bi-pause-circle-fill pauseblock") {
    pause.classList.remove("pauseblock");
    play.classList.remove("playnone");
    audio.pause();
  }
});

let audioName = [];
audioName[0] = "Little things";
audioName[1] = "One thing";
audioName[2] = "History";
audioName[3] = "Olivia";

let audioSource = [];
audioSource[0] = "music/One-Direction-Little-Things-(TrendyBeatz.com).mp3";
audioSource[1] = "music/OneDirectionOneThingLyricsPicturesmp4-arabix.mp3";
audioSource[2] = "music/OneDirectionHistoryAudio-arabix.mp3";
audioSource[3] = "music/OneDirectionOliviaAudio-arabix.mp3";
let count = 0;
if (localStorage.getItem("save") != null) {
  count = localStorage.getItem("save");
}
audio.src = audioSource[count];
audiotext.innerHTML = audioName[count];

next.addEventListener("click", (eo) => {
  if (count < audioSource.length - 1) {
    ++count;
    play.classList.add("playnone");
    pause.classList.add("pauseblock");
  } else {
    count = 0;
  }
  localStorage.setItem("save", count);
  audio.src = audioSource[count];
  audiotext.innerHTML = audioName[count];
  audio.play();
});

back.addEventListener("click", (eo) => {
  if (count > 0) {
    play.classList.add("playnone");
    pause.classList.add("pauseblock");
    --count;

    play.classList.add("playnone");
    pause.classList.add("pauseblock");
  } else {
    count = audioSource.length - 1;
  }
  localStorage.setItem("save", count);
  audio.src = audioSource[count];
  audiotext.innerHTML = audioName[count];
  audio.play();
});
