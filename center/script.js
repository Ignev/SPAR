const track = slider__track;
const next = slider__next;
const pre = slider__pre;
let pos = track.style.left.split("p")[0];
track.style.left = 0;

next.addEventListener("click", () => {
  if (pos <= -464) {
  } else {
    pos -= 116;
  }
  if (pos < -464) {
  } else {
    track.style.left = pos + "px";
  }
});
pre.addEventListener("click", () => {
  if (pos >= 0) {
  } else {
    pos += 116;
  }
  if (pos > 0) {
  } else {
    track.style.left = pos + "px";
  }
});
Hammer(track).on("swiperight", (e) => {
  if (pos >= 0) {
  } else {
    pos += 116;
  }
  if (pos > 0) {
  } else {
    track.style.left = pos + "px";
  }
});
Hammer(track).on("swipeleft", (e) => {
  if (pos <= -464) {
  } else {
    pos -= 116;
  }
  if (pos < -464) {
  } else {
    track.style.left = pos + "px";
  }
});
fullscreen.addEventListener('click', ()=>{
    console.log(1);
    console.log(video);
   console.log(video.requestFullscreen());
})
sound.addEventListener('click', ()=>{
    if(video.muted == true){
        video.muted = false;
        sound.innerHTML = '<img src="mute.svg" alt="play" class="sound__img"/>'
    }
    else{
        video.muted = true;
        sound.innerHTML = '<img src="sound.svg" alt="play" class="sound__img"/>'
    }   
    
})

