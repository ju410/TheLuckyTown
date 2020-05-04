$(function(){
  var myWave = $('.wave').wavify({
  height: 30,
  bones: 3,
  amplitude: 20,
  color: '#5A8397',
  // opacity:0.1,
  speed: .25
});
var myWave = $('.wave_down').wavify({
height: 30,
bones: 3,
amplitude: 20,
color: '#fff',
// opacity:0.1,
speed: .25
});
});

$(document).ready(function(){
  $(window).scroll(function(){
    $('.fadeInUp').each(function(i){
      var bottom_obj = $(this).offset().top+$(this).outerHeight();
      var bottom_win = $(window).scrollTop()+$(window).height();
      // var top_win = $(window).scrollTop();
      var top_obj = $(this).offset().top;
      if(bottom_win>bottom_obj/1.2){
        $(this).addClass('fadeInUp_ani');
      }

    });
  });
  $('.top_home').click( function() {
    $('html, body').animate({scrollTop: 0 }, 400);
          return false;
        });
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
