window.addEventListener("DOMContentLoaded", (e) => {
 let stop = false;

  $('.slider').slick({
    infinite: true,
		draggable: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: true,
		swipeToSlide: true,
		touchThreshold: 100,
		speed: 500,
		pauseOnHover: true,
		autoplaySpeed: 3000,
    arrows: true,
    autoplay: true, 
  });
  function toggleFullScreen() {
    const rfs = video.requestFullscreen || video.webkitRequestFullScreen || video.mozRequestFullScreen || video.msRequestFullscreen;
    rfs.call(video);
}
  fullscreen.addEventListener("click", toggleFullScreen);
  setInterval(()=>{
    console.log();
    if(!video.webkitDisplayingFullscreen && !stop){
      video.play();
    }
    
  }, 200)
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
    stop = true;
  };
  restart.addEventListener("click", () => {
    video.play();
    sound.style.display = "block";
    fullscreen.style.display = "block";
    restart.style.display = "none";
    stop = false;
  });
});