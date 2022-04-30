/*scrollreveal*/
ScrollReveal().reveal('.scrollrl',{
    distance: 1500,
    reset: true
});
/*年号自動更新*/
window.onload = function () {
  var nengou =　document.getElementById('yearnumber');
  var date = new Date();
  var year = date.getFullYear();
  console.log(year);
  target = nengou;
  target.innerHTML = "&copy; " + year + " taguchimaru" ;
};
