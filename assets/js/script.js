$(document).ready(function() {

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
   $("#sidebar-button").click( function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      
     $("body").addClass("no-scroll");
     setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  });

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $(".page-wrapper").click( function() {
    $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
  });

  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click( function() {
    var curr = parseInt($("#carousel").css('margin-left').replace("px", ""));
    if (curr <= -3480) {
      return false;

    } else {
       $("#carousel").css('margin-left', (curr - 960)+"px");
    }
  });


  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click( function() {
    var curr = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curr >= 0) {
      return false;
    } else {
       $("#carousel").css("margin-left", (curr + 960)+"px");
    }
  });

function parallax() {
  var scrolled = $(window).scrollTop();
  $('#profile-pic').css('top', scrolled*.2+ "px");
}

$(window).scroll(parallax);

  $.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 0,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

$("#resume.nav-item").click( function() {
  $('body').scrollTo('#resume-section');
})

$("#skills.nav-item").click( function() {
  $('body').scrollTo('#skills-section');
})

$("#reddit.nav-item").click( function() {
  $('body').scrollTo('#reddit-section');
})
$("#plugd.nav-item").click( function() {
  $('body').scrollTo('#plugd-section');
})
$("#top.nav-item").click( function() {
  $('body').scrollTo('#name-section');
})

});