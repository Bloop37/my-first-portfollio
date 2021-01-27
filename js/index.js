window.onresize = function() {spread()}
var width = $(window).width() * 0.8;
var height = $(window).height();
var upleft = 0;
function goRight() {
    $("#animate").animate({
    left: width
  }, 5000, function() {
     setTimeout(goLeft, 30);
  });
}
function goLeft() {
    $("#animate").animate({
    left: 0
  }, 5000, function() {
     setTimeout(goRight, 30);
  });
}
setTimeout(goRight, 30);

$("#animate").on('click',function(){
    if ($('#animate').is(':animated')){
    $('#animate').stop();
}
else{
    goRight();
}
})
function spread(){
    width = $(window).width() * 0.8;
}