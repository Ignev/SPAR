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
video.onended = function(e) {
  restart.style.display = "block";
  sound.style.display = "none";
  fullscreen.style.display = "none";
};
restart.addEventListener('click', ()=>{
  video.play();
  sound.style.display = "block";
  fullscreen.style.display = "block";
  restart.style.display = "none";
})


// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------







function createIframe(src, style) {
  var mainIframe = document.createElement("iframe");
  mainIframe.setAttribute("src", src);
  mainIframe.setAttribute("scrolling", "no");
  mainIframe.setAttribute("frameborder", "0");
  mainIframe.setAttribute("style", style);
  return mainIframe;
}

var isViewable = false;
var scrollBarOffset = 0;
/* == generator code == */

var viewportWidth = window.document.getElementById('page').clientWidth;


var topIframe = createIframe('./top/index.html?interscroller=true', 'bottom:0px;left:0;position:absolute;');
var bannerTopDiv = document.createElement("div");
bannerTopDiv.setAttribute("id", "banner-top");
bannerTopDiv.setAttribute("style", "width: 100%;top: 0;height:" + (viewportWidth / 4) + "px; left: 0; overflow-x: hidden; overflow-y: hidden; position: relative; -webkit-transform: translateZ(0) translateX(0); -moz-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0);");
bannerTopDiv.appendChild(topIframe);
var topCreativeContainer = document.getElementById("top-creative");
topCreativeContainer.appendChild(bannerTopDiv);

var bottomIframe = createIframe('./bottom/index.html?interscroller=true', 'bottom:0px;left:0;position:absolute;');
var bannerBottomDiv = document.createElement("div");
bannerBottomDiv.setAttribute("id", "banner-bottom");
bannerBottomDiv.setAttribute("style", "width: 100%; top: 0;height:" + (viewportWidth / 5.981) + "px; left: 0; overflow-x: hidden; overflow-y: hidden; position: relative; -webkit-transform: translateZ(0) translateX(0); -moz-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0);");
bannerBottomDiv.appendChild(bottomIframe);
var bottomCreativeContainer = document.getElementById("bottom-creative");
bottomCreativeContainer.appendChild(bannerBottomDiv);


var container = document.getElementById('inscroll-banner');
container.setAttribute('style', 'height:100vh;overflow:hidden; position: relative; margin: 0px 0;background-color:lightgray');

var inner = document.createElement('div');
inner.setAttribute('id', 'banner-core');
inner.setAttribute('style', 'width: 100%;top: 0;height:100vh; clip: rect(0,100%,100%,0); overflow-x: hidden; overflow-y: hidden; position: fixed;');
var art = document.createElement('iframe');

art.setAttribute('src', 'main/index.html?interscroller=true');
art.setAttribute('scrolling', 'no');
art.setAttribute('frameborder', '0');
art.setAttribute('style', 'bottom:0px;position:absolute;');

var topLine = document.createElement('div');
topLine.setAttribute('class', 'top-line');
topLine.innerText = 'Anzeige';
topLine.setAttribute('style', 'position:absolute;line-height: 23px; top:0; width:100%;background-color:black;color:white;z-index:65000');
container.appendChild(topLine);

var bottomLine = document.createElement('div');
bottomLine.setAttribute('class', 'bottom-line');
bottomLine.innerText = 'Scroll for more';
bottomLine.setAttribute('style', 'position:absolute;line-height: 23px; bottom:0; width:100%;background-color:black;color:white;z-index:65000');
container.appendChild(bottomLine);

inner.appendChild(art);

container.appendChild(inner);
window.addEventListener('resize', resizeBanner, false);
document.addEventListener('touchmove', function () {
  resizeBanner();
});

window.document.body.addEventListener('orientationchange', function () {
  //   log("resize offset"+scrollBarOffset);
});
var lastHeight = 0;
var mobileMode = false;
var creativeContainer = document.getElementById('ad-creative');

function resizeBanner() {
  var viewportWidth = window.document.getElementById('page').clientWidth;
  bannerTopDiv.style.height = (viewportWidth / 4)+"px";
  bannerBottomDiv.style.height = (viewportWidth / 5.981)+'px';

  if (viewportWidth < 480) {
      mobileMode = false;

      var height = Math.min((creativeContainer.clientWidth * (480 / 320)), innerHeight - 44) + 44;

      //var height = 400 ;
      creativeContainer.style.height = (height) + "px";
      // inner.style.boxShadow = "rgba(0, 0, 0, 0.65) 0 0 4px 2px";
      lastHeight = height;
      scrollBarOffset = innerHeight - document.documentElement.clientHeight;
  } else {
      mobileMode = false;
      scrollBarOffset = 0;
      var height = Math.min((creativeContainer.clientWidth * (0.5)), innerHeight - 44) + 44;
      // var height = 560;
      //Math.min((creativeContainer.clientWidth * (480/320)),innerHeight-44);
      creativeContainer.style.height = height + 'px';
      inner.style.boxShadow = '';
  }

  container.style.height = creativeContainer.clientHeight + 'px';

  art.style.width = (container.clientWidth) + 'px';

  inner.style.width = container.clientWidth + 'px';
  topLine.style.width = container.clientWidth + 'px';
  topLine.style.height = 22 + 'px';
  bottomLine.style.height = 22 + 'px';
  bottomLine.style.width = container.clientWidth + 'px';

  art.style.height = (container.clientHeight - 44) + 'px';
  inner.style.height = (container.clientHeight - 44) + 'px';
  updateBannerDimensions();
  window.setTimeout(function () {

  }, 500);
}

function log(message) {
  document.getElementById('log').innerHTML = message;
}

resizeBanner();

function updateBannerDimensions() {
  var pos = creativeContainer.getBoundingClientRect();
  if (pos.top < window.innerHeight - 80) {
      topCreativeContainer.className = "hide";
  } else {
      topCreativeContainer.className = "";
  }

  if (pos.top > -window.innerHeight + bottomCreativeContainer.clientHeight + 22) {
      bottomCreativeContainer.className = "hide";
  } else {
      bottomCreativeContainer.className = "";
  }
  if (isIFrameFullVisible(pos)) {

      inner.style.position = 'absolute';
  } else if (pos.top < 0) {
      var topPos = pos.top;
      inner.style.position = 'fixed';
      inner.style.top = topLine.clientHeight + 'px';
      inner.style.bottom = 'auto';
  } else {
      inner.style.position = 'fixed';

      if (mobileMode) {

          inner.style.top = topLine.clientHeight + 'px';
          inner.style.bottom = 'auto';
      } else {
          inner.style.top = 'auto';
          inner.style.bottom = (bottomLine.clientHeight - 1) + 'px';
      }

  }

  if (pos.top < 0 && pos.top > -(creativeContainer.clientHeight - topLine.clientHeight)) {

      topLine.style.position = 'fixed';
  } else {
      topLine.style.position = 'absolute';
  }

  if (pos.bottom > innerHeight && pos.bottom < innerHeight + (creativeContainer.clientHeight - bottomLine.clientHeight + 4)) {
      bottomLine.style.position = 'fixed';
  } else {
      bottomLine.style.position = 'absolute';
  }
}

function isIFrameFullVisible(pos) {
  return pos.top > 0 && (pos.top) <= (innerHeight - creativeContainer.clientHeight);
}

function isBannerVisible(pos) {
  if (mobileMode) {
      return pos.top < (creativeContainer.clientHeight / 4) && pos.top >= (-creativeContainer.clientHeight);
  } else {
      return pos.top < (window.innerHeight - creativeContainer.clientHeight) && pos.top >= (-creativeContainer.clientHeight);
  }
}

function checkElementVisibility(element) {
  var percentOfVisibility = 100;
  if (element != null) {
      var rect = element.getBoundingClientRect();
      var elHeight = rect.bottom - rect.top; // IE don't support properties .height
      var winHeight = getViewportSize().height;

      var diff = 0;
      if (rect.top > 0) {
          if (rect.top + rect.height > winHeight) {
              diff = elHeight - ((rect.top + rect.height) - winHeight);
          } else {
              diff = elHeight;
          }
      } else {
          diff = rect.top + elHeight;
          if (diff > winHeight) {
              diff = winHeight;
          }
      }
      if (diff > 0) {
          percentOfVisibility = diff * 100 / elHeight;
      } else {
          percentOfVisibility = 0;
      }
  }
  return Math.round(percentOfVisibility);
};


function getViewportSize() {
  // this works for all browsers except IE8 and before
  if (window.innerWidth != null) {
      return {
          width: window.innerWidth,
          height: window.innerHeight
      };
  }

  // For IE (or any browser) in Standards mode
  if (document.compatMode === 'CSS1Compat') {
      return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      };
  }

  // For browsers in Quirks mode
  return {
      width: document.body.clientWidth,
      height: document.body.clientWidth
  };
};

var viewPercent = checkElementVisibility(inner);

function updateViewableFlag() {
  var pos = container.getBoundingClientRect();
  isViewable = isBannerVisible(pos);
  
  viewPercent = checkElementVisibility(container);
}

function sendMessage() {
  var iframeRect = art.getBoundingClientRect();

  var obj = {
      viewable: isViewable,
      sasapi: '1234',
      rectangleLeft: iframeRect.left,
      rectangleTop: creativeContainer.getBoundingClientRect().top,
      rectangleWidth: iframeRect.width,
      rectangleHeight: iframeRect.height,
      viewablePercent: viewPercent,
  };

  art.contentWindow.postMessage(JSON.stringify(obj), '*');
}

window.onscroll = function () {
  updateBannerDimensions();
  updateIframe();
};

window.onload = function () {
  resizeBanner();
  updateIframe();
  window.setInterval(function () {
      updateIframe();
  }, 1000 / 30);
};

function updateIframe() {
  updateViewableFlag();
  sendMessage();
}