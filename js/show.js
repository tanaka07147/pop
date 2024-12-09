$(function(){
  $(".one").each(function(i, elem){
      var contentsPOS = $(elem).offset().top;
      $(window).on("load scroll resize", function(){
          var winHeight = $(window).height();
          var scrollTop = $(window).scrollTop();
          var showClass = "show";
          var timing = 300; // 100pxコンテンツが見えたら次のif文がtrue
          if (scrollTop >= contentsPOS - winHeight + timing){
            $(elem).addClass(showClass);
          } else {
            $(elem).removeClass(showClass);
          }
      });
  });
});