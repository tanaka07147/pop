$(function () {
  // 1.#global_nav liにhoverメソッドを設定
  $("#global_nav").children("li").hover(function(){
      // 2.メニューの開閉
      $(this).children("ul").stop().slideToggle(180);
  });
});