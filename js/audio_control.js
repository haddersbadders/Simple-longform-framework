$(function () { // wait for document ready
      		// build scene
      		var scene = new ScrollMagic.Scene({triggerElement: "#play", duration: 400})
                  .on("enter", function (){
                      document.getElementById('dub').play();
                  })
                  .on("leave", function () {
                      document.getElementById('dub').pause();
                      })

      						.addTo(controller);
      	});

