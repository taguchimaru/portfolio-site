
/*wowの読み込み*/
/*年号自動更新*/
window.onload = function () {
  var nengou =　document.getElementById('yearnumber');
  var date = new Date();
  var year = date.getFullYear();
  console.log(year);
  target = nengou;
  target.innerHTML = "&copy; " + year + " taguchimaru" ;
};
/*スムーススクロール*/
$(function(){
    $('a[href^="#"]').click(function(){
      let speed =400;
      let type ='swing';
      let href=$(this).attr("href");
      let target=$(href == "#index"?'html':href);
      let position = target.offset().top;
      $('body,html').animate({scrollTop:position},speed,type);
      return false;
    });
});
/*フェードイン*/
$(function(){
  $(window).scroll(function(){
    $(".fade").each(function(){
      var pos = $(this).offset().top;
      var scroll =$(window).scrollTop();
      var windowHeight =$(window).height();
      if(scroll > pos - windowHeight + windowHeight/4){
        $(this).addClass("fade_on");
      }else{
        $(this).removeClass("fade_on");
      }
    });
  });
});
