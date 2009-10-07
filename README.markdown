Sprite Factory
========

A jQuery factory for creating sprites from images, even transparent PNG's in IE

Features
----

* Works from a rectuangluar grid of sprites.
* Fast, good for rendering large numbers of similar sprites
* Preloading CSS for large images (will add the 'loading' class to the element until the image has been loaded)
* Can use transparent PNGS for IE6 and IE7
* Light mode, using half the number of elements (only suitable for non-transparent images)
* Easy to update sprite to a different index - useful for animation

Example of use
----

<pre>
$().ready( function() {
  var options = {
                  src: "http://..." ,
                  width: 60, 
                  height: 60, 
                  index: [2,6], 
                  light: true
                }
  var factory = new SpriteFactory(options)
  $("#mydiv")
    .append(factory.generate([1,2]))
    .append(factory.generate([1,3])
})
</pre>

Also see [Demo](http://weepy.github.com/sprite-factory)

Options
---

* 'src' => location of source image
* 'width' => width of sprite
* 'height' => height of sprite
* 'index' => location of required sprite on image
* 'light' => Only use one element (no good for IE6, IE7)



Links
----

* [Demo](http://weepy.github.com/sprite-factory)
* [Javascript File](http://github.com/weepy/sprite-factory/raw/master/sprite-factory.js)
* [Github Project](http://github.com/weepy/sprite-factory)
* [Issue Tracker](http://github.com/weepy/sprite-factory/issues)

Compatibility
----

Tested in

* Firefox 3.5
* Safari 4
* IE 6, 7, 8


