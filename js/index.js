// Uncomment to initialise WOW.js
new WOW().init();

// Carousel
$(document).ready(function() {

$("#owl-example").owlCarousel({

  singleItem: true,
  itemsScaleUp: true
});

});

// YouTube Stuff

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'tRKl0tSOKs0',
    playerVars: {
      controls: 0,
      modestbranding: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 600000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// Scroll Magic Stuff

var controller = new ScrollMagic.Controller();


$(function () { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#_video", duration: 500})


            .on("enter", function () {
                player.playVideo();
                })
            .on("leave", function () {
               player.pauseVideo();
             })
            .addTo(controller);
  });



// Parallax stuff

function parallax() {
  var prlax = document.getElementByID('prlax');
  prlax.style.top = -(window.pageYOffset / 4)+'px';
}
window.addEventListener("scroll", parallax, false);
