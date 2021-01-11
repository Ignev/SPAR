window.addEventListener("DOMContentLoaded", (e) => {
  const track = slider__track;
  const next = slider__next;
  const pre = slider__pre;
  let pos = track.style.left.split("p")[0];
  track.style.left = 0;
  let slideCount = -1;
  const slides = document.querySelectorAll(".slide");
  let slideWidth = 0;
  slides.forEach((item) => {
    var marginLeft = parseInt(getComputedStyle(item, true).marginLeft);
    var marginRight = parseInt(getComputedStyle(item, true).marginRight);
    slideWidth = item.offsetWidth + marginLeft + marginRight
  });
  console.log(slideWidth, slideCount);

  next.addEventListener("click", () => {
    if (pos <= -slideWidth * 4) {
    } else {
      pos -= slideWidth;
    }
    if (pos < -slideWidth * 4) {
    } else {
      track.style.left = pos + "px";
    }
  });
  pre.addEventListener("click", () => {
    if (pos >= 0) {
    } else {
      pos += slideWidth;
    }
    if (pos > 0) {
    } else {
      track.style.left = pos + "px";
    }
  });
  Hammer(slider).on("swiperight", (e) => {
    if (pos >= 0) {
    } else {
      pos += slideWidth;
    }
    if (pos > 0) {
    } else {
      track.style.left = pos + "px";
    }
  });
  Hammer(slider).on("swipeleft", (e) => {
    if (pos <= -slideWidth * 4) {
    } else {
      pos -= slideWidth;
    }
    if (pos < -slideWidth * 4) {
    } else {
      track.style.left = pos + "px";
    }
  });
  fullscreen.addEventListener("click", () => {
    console.log(1);
    console.log(video);
    console.log(video.requestFullscreen());
  });
  sound.addEventListener("click", () => {
    if (video.muted == true) {
      video.muted = false;
      sound.innerHTML = '<img src="mute.svg" alt="play" class="sound__img"/>';
    } else {
      video.muted = true;
      sound.innerHTML = '<img src="sound.svg" alt="play" class="sound__img"/>';
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
