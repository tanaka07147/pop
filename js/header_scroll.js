$(function () {
  $(window).on("scroll", function () {
    if (500 < jQuery(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});