var counterFirstTime = true;

$(window).scroll(function() {
  var top_of_element = $(".phase-container").offset().top;
  var bottom_of_element = $(".phase-container").offset().top + $(".phase-container").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
    var delay = 0;
    $(".phase-container").each(function() {
      $(this).delay(delay).animate({
        opacity:1
    },1000);
      delay += 1000;
    });
  }

  var top_of_element = $(".statistic-column").offset().top;
  var bottom_of_element = $(".statistic-column").offset().top + $(".statistic-column").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
    if (counterFirstTime) {
      counterFirstTime = false;
      $('.statistic-count').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  }
});

var video = $(".header-video");
var playBtn = $(".play-icon");

playBtn.click(function()  {
  if (video.get(0).paused) {
    video.get(0).play();
    playBtn.fadeOut();
    playBtn.attr('class', 'far fa-pause-circle fa-5x play-icon');
  } else {
    video.get(0).pause();
    playBtn.fadeIn();
    playBtn.attr('class', 'far fa-play-circle fa-5x play-icon');
  }
});

video.mouseout(function() {
  if(video.get(0).paused){
    playBtn.fadeIn();
  } else {
    playBtn.fadeOut();
  }
});

video.mouseover(function() {
  playBtn.fadeIn();
  setTimeout(function() {
    if(!video.get(0).paused){
      playBtn.fadeOut();
    }
  }, 5000);
});
