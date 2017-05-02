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

var errorPhone = document.getElementById('error-phone');
var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorCity = document.getElementById('error-city');
document.getElementsByClassName("phone")[0].addEventListener('click',function(){
  document.getElementsByClassName('name')[0].style.display="block";
  document.getElementsByClassName('email')[0].style.display="block";
  document.getElementsByClassName('city')[0].style.display="block";
  document.getElementsByClassName('registro')[0].style.height ="500%";
});

var btnEnviar=document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function(){
  document.getElementsByClassName("phone")[0].addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      errorPhone.style.display ="inline-block;"
    }
    else {
      errorPhone.style.display ="none;"
    }
  });
  document.getElementsByClassName('name')[0].addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      errorName.style.display ="inline-block;"
    }
    else {
      errorName.style.display ="none;"
    }
  });
  document.getElementsByClassName('email')[0].addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      errorEmail.style.display ="inline-block;"
    }
    else {
      errorEmail.style.display ="none;"
    }
  });
  document.getElementsByClassName('city')[0].addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      errorCity.style.display ="inline-block;"
    }
    else {
      errorCity.style.display ="none;"
    }
  });
});
