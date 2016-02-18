#Scratch Pad

This document contains all the snippets you need with explanations.

###Big heading sections with full width/height background images

The img_container class sets up the dimensions of the element.

```
<section class="img_container">

</section>
```

Add an additional class name, in this case "dogs" so that you can define a background image in CSS:

```
<section class="dogs img_container">

</section>
```
To accompany this, add a new CSS style in style.css:

```
.dogs {
  background: url(../img/dog_pic.jpg);
  background-size: cover;
  background-attachment: fixed;
}
```

You can then put content inside this section, for example a header with headings:
```
<section class="dogs img_container">
  <header>
    <h1>Some content</h1>
  </header>
</section>
```

But it doesn't need to be headings, it could be blockquote, or anything. This may require additional CSS.

###Content sections

A content section gives you a column to put your text and any other media.

```
<section class="content">
  //Your content
</section>
```

This is straight forward.

###Big heading sections with full width/height and background colour

As well as headers with background images, you can have just a colour.

```
<section class="color_conatiner">

</section>
```
The "color_conatiner" class sets up the section's dimensions. The addition of your own class e.g. "bg_green" allows you to set it's colour:
```
<section class="color_conatiner bg_green">

</section>
```
And in CSS, create a new style:
```
.bg_green {
  background: #bada55;
}
```
###Image carousel
[Own Carousel](http://smashingboxes.github.io/OwlCarousel2/) has been integrated. Simply create some HTML like:

```
<div class="owl-carousel">
  <div> <img src="img/Slider/IMG_2712.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2927.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2959.JPG" alt="" /> </div>
</div>

```
Noting the class name given e.g. "owl-carousel". Then initialise the carousel in index.js.
```

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true
  });

  $(".alps-carousel").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut'
  }); //

});
```

The above initialises two separate carousels, one with a class "owl-carousel" and the other "alps-carousel".
