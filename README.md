
#A Simple Long-form Framework

[A demo of this framework can be found here.](http://haddersbadders.github.io/Simple-longform-framework/)

[Here's the CSS almanac if you need it](https://css-tricks.com/almanac/properties/)

This template is in the style of a long-form page. The long-form style strips out web page furniture such as header, nav, sidebar etc and puts the focus on content. The style features full width images, large type and headers.

##Structure

The structure is really quite simple: Content is broken down into **sections** using the HTML tag ```<section>```.

There are four types of ```<section>```that are differentiated using three different class names:

- A content section using the class name **content**
- Full width and height section with background image that uses the class name **img_container**
- Full width and height section with background video that uses the class name **video_container**
- Full width and height section with background colour that uses the class name **color_container**

###Examples

When you want a full width/height image header section, use:

```<section class="img_container">
  //Content here
  </section>```

When you want some content, add:

```<section class="content"> //Some content </section> ```

##The content sections
The content section is used to put text and inline images in. Content in this section has a width of 60% and is centred. This is controlled by the **.content** selector in CSS.

You can add additional classes to your content sections for further styling. For example changing the background colour:

```<section class="content mountains">```
with the CSS of
``` .mountains {background: #CCD9E1; }```

In the above example, the section has two classes: content and mountains. The section takes instructions from **both** classes in the CSS.
##The header sections

The header sections are there to give nice big headers for content with full width image backgrounds. The ```.img_container``` class in CSS has only two properties:

1. ```height: 100vh``` which sets the height of the section to whatever the height of the viewport is
2. ```position: relative``` enables absolute positioning of elements inside the section

Because each header section is different - they will have a different background image - an additional class is given to each header section allowing a background image to be specified:

```<section class="rocks img_container">``` with CSS of ```.rocks { background: url(path/to/image.jpg); }```


##Sections, DIVs or headers?

I've used ```<section>``` elements, but because the styles are controlled by classes it doesn't really matter what elements are used. It could be ```<header class="rocks img_container">``` or ```<div class="rocks img_container">```.

##Effects

Also included are [Animate.css](https://daneden.github.io/animate.css/) and [Wow.js](http://mynameismatthieu.com/WOW/).

Animate.css provides animation for elements and Wow.js allows control over these animations so they occur when scrolled to.

##Image slider

Included is the [Owl Carousel image slider](http://www.owlcarousel.owlgraphic.com/). This will go in a content section or (TODO) full width.

##YouTube

YouTube is invoked using the [Youtube API](https://developers.google.com/youtube/) rather than just the iFrame embed. This is beacuase the YouTube video is paused until the user scrolls to it then pauses again once the user scrolls past. This is controlled in the js/index.js file using [ScrollMagic](http://scrollmagic.io/examples/index.html).


##Audio

Similar to firing off a Youtube vide when scrolled to, we can use ScrollMagic to play/pause an audio file:

[Scroll to "some pretty things in the desert" for as demo](http://haddersbadders.github.io/fancy-longform/) 

[The code is here](https://github.com/haddersbadders/fancy-longform/tree/Master)

In the "flowers" section header, audio is embeded using the ```<audio>``` element. Playback is controlled in js/index.js using ScollMagic. When the user scrolls to the trigger div, ScrollMagic plays the audio file and pauses when scrolled away.

##Background videos
There are a few methods for having background videos. Probably the easiest one, if you don't need to control playback with scrolling (e.g. your fist header), is to use the [Vide jQuery plugin](https://github.com/VodkaBears/Vide). This is easy to use: 

1. Download the Zip file from the link above. Extract andf copy the file src/jquery.vide.js to your project's js folder.
2. Near the bottom of your index.html file, add the line ```<script src="js/jquery.vide.js"></script>```  below where jquery.min.js is linked
3. Make sure you video is in mp4 format and in the img folder e.g. img/trailer.mp4
4. In the section you want the background video, add the data attribute data-vide-bg e.g. ```data-vide-bg="img/trailer"``` will load the video img/trailer.mp4 as background
5. Add any additional options e.g.```data-vide-options="loop: true, muted: true, position: 0% 0%"``` 

More info is at the [Vide jQuery plugin](https://github.com/VodkaBears/Vide) page

##Virtual Reality
The example 360_example.html shows how to use [the A-Frame WebVR framework](https://aframe.io/). It's quite simple to get going, and you can [see it part way down here in the mountains image](http://haddersbadders.github.io/Simple-longform-framework/360_example.html).

All we do is create an additional HTML file (see pano.html), include the A-frame JavaScript file and some specific HTML. This applies the 360 image or video onto the web page. The web page is then inserted in to your main page using an iframe tag. 

The pano.html file needs to be running on a web sever to work. 

