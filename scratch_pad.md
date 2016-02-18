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
