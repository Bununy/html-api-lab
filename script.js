const video = document.getElementById("myVideo");
const audio = document.getElementById("myAudio");

// Управление видео
document.getElementById("playVideo").onclick = () => video.play();
document.getElementById("pauseVideo").onclick = () => video.pause();
document.getElementById("muteVideo").onclick = () => video.muted = !video.muted;

// Управление аудио
document.getElementById("playAudio").onclick = () => audio.play();
document.getElementById("pauseAudio").onclick = () => audio.pause();
document.getElementById("muteAudio").onclick = () => audio.muted = !audio.muted;