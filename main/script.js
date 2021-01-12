window.addEventListener("DOMContentLoaded", (e) => {
 

  $('.slider').slick({
    variableWidth: true,
  });

  fullscreen.addEventListener("click", () => {
    console.log(video);
    console.log(video.requestFullscreen());
  });
  sound.addEventListener("click", () => {
    if (video.muted == true) {
      video.muted = false;
      mute.style.display = "block";
      sound.style.display = "none";
    } else {
      video.muted = true;
      sound.style.display = "block";
      mute.style.display = "none";
    }
  });
  mute.addEventListener("click", () => {
    if (video.muted == true) {
      video.muted = false;
      mute.style.display = "block";
      sound.style.display = "none";
    } else {
      video.muted = true;
      sound.style.display = "block";
      mute.style.display = "none";
    }
  });
  video.onended = function (e) {
    restart.style.display = "block";
    sound.style.display = "none";
    fullscreen.style.display = "none";
  };
  restart.addEventListener("click", () => {
    video.play();
    sound.style.display = "block";
    fullscreen.style.display = "block";
    restart.style.display = "none";
  });
});
