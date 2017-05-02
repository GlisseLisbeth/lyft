var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.body.scrollTop;
    if(lastScrollTop >= 100)
    {
      document.getElementsByClassName('menu')[0].style.display = "none";
      document.getElementsByClassName('solid')[0].style.display = "block";
    }
    else{
      document.getElementsByClassName('menu')[0].style.display = "block";
      document.getElementsByClassName('solid')[0].style.display = "none";
      }
    lastScrollTop = currentScroll;
  }, false);


var phone = document.getElementsByClassName("phone")[0];
phone.addEventListener('click',function(){
  document.getElementsByClassName('name')[0].style.display="block";
  document.getElementsByClassName('email')[0].style.display="block";
  document.getElementsByClassName('city')[0].style.display="block";
  document.getElementsByClassName('registro')[0].style.height ="500%";
});
