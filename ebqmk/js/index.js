$(document).ready(function(){
  var $slider = $('nav .slider'),
      width = $('nav ul li').width;
  $slider.width( width );
});
$(window).resize(function(){
  var $slider = $('nav .slider'),
      width = $('nav ul li').width,
      $isActive = $('nav ul li.isactive'),
      isX = $isActive.position().left,
      isW = $isActive.width();
  $slider.width( width );
  $('nav ul li').each(function(){
    var x = $(this).position().left,
        w = $(this).width();
    $(this).on({
      mouseenter: function(){
        $slider.css({ left: x, width: w });
      }, mouseleave: function(){
        $slider.css({ left: isX, width: isW });
      }
    });
  });
}).resize();