var audio = document.getElementById("audio");
function play(){audio.play();}
function pause(){audio.pause();}
function stop(){audio.load();audio.pause();}
function mute(){audio.muted = ! audio.muted;}
var volume = document.getElementById("volume");
var speed = document.getElementById("speed");
var time = document.getElementById("time");
volume.addEventListener("input",function () {audio.volume = range.value;console.log(audio.volume);})
speed.addEventListener("change",function(){audio.playbackRate = speed.value});
window.onload = function (){time.max = audio.duration;}
time.addEventListener("input",function (){audio.currentTime = time.value;});
time.addEventListener("timeupdate",function(){time.value = audio.currentTime;});