function SpriteFactory(params) {
  this.params = params
  this.preload()
  this.template = params.light ?  this.renderLight() : this.render()    
}

SpriteFactory.fn = SpriteFactory.prototype

SpriteFactory.fn.preload = function() {
  this.loading = true
  this.to_convert = []
  var img = $("<img>").bind("load", this, this.imageLoaded).attr("src", this.params.src)
  if(img[0].complete)
    this.imageLoaded({data:this})
}

SpriteFactory.fn.generate = function(index) {
  var el = this.template.clone() 
  this.update(el, index)

  if(this.loading)
    this.to_convert.push(el[0])
  return el
}  
  
SpriteFactory.fn.imageLoaded = function(e) {
  var self = e.data
  $(self.to_convert).removeClass("loading")
  this.loading = false
}

SpriteFactory.fn.render = function() {
  var params = this.params
  var $$ = $("<span>").css({width: params.width, height: params.height, display: "block", overflow: "hidden", position: "relative"})

  if(this.loading)
    $$.addClass("loading")
    
  var css = { position : "absolute", 
              display: "block",
              width: this.params.index[0]*this.params.width, 
              height: this.params.index[1]*this.params.height
            }
  
  if($.browser.msie && $.browser.version.substr(0,1) < 7)
    css.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + params.src + "', sizingMethod='scale')"
  else
    css.backgroundImage = "url('" + params.src + "')"
  
  var img = $("<span>").css(css)
  $$.append(img) 
  return $$
}

SpriteFactory.fn.update = function(el, index) {
  var params = this.params
  var l = -index[0]*params.width, t = (-index[1]*params.height)
      
  if(params.light)
    el.css({backgroundPosition: l + "px" + " " + t + "px"})  
  else 
    el.children().css({left: l, top: t})

    
  return el
}

SpriteFactory.fn.renderLight = function() {
  var params = this.params
  var $$ = $("<span>").css({width: params.width, height: params.height, display: "block", position: "relative", background: "url('" + params.src + "')"})
  
  if(this.loading)
    $$.addClass("loading")
  return $$
}



