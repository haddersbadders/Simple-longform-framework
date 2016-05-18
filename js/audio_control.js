// Copy this function into the js/index.js file, at the bottom. 
//
// The function refers to two HTML elemen IDs: #playMe and #MyAudio.

// In your HTML you will need an audio element with an id="MyAudio" or similar.  E.g. <audio id="MyAudio" src="img/MyAudio.mp3"></audio>
// Note that the controls attribute is missing, because we don't want to see the player.

// At the point you want the player to start, in the HTML, add id="playMe" or similar e.g.  <section class="..." id="playMe"> ....
 
$(function () { // wait for document ready
      		// build scene
      		var scene = new ScrollMagic.Scene({triggerElement: "#playMe", duration: 400})
                  .on("enter", function (){
                      document.getElementById('MyAudio').play();
                  })
                  .on("leave", function () {
                      document.getElementById('MyAudio').pause();
                      })

      						.addTo(controller);
      	});

