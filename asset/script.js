'use strict';

$(() => {
  $(".pagetop").click( () => {
    console.log("aa");
    $('body,html').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  $(".header__nav__btn").on("click", () => {
    //アンカーの値取得
    let href = $(event.currentTarget).attr("href");
    console.log(href);
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body, html').animate({scrollTop:position}, 600, 'swing');
    return false;
  });
});