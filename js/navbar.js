var parent = document.querySelector("ul");
var myNavitems = document.querySelectorAll('li a');

parent.addEventListener("click", handler, false);

function handler(e) {

  if (e.target !== e.currentTarget) {

    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }

    e.target.classList.add('active');
   }

  e.stopPropagation();
}

var myContactBar = document.getElementById('main-nav-menu');
var myContactButton = document.querySelector('[href="#button"]');

 myContactButton.addEventListener("click", contact, false);

function contact (e) {

 	if (myContactBar.classList.contains("nav-close")) {
    myContactBar.classList.remove("nav-close");
    myContactBar.classList.add("nav-open");
    
  }
  else {
    myContactBar.classList.remove("nav-open");
    myContactBar.classList.add("nav-close");
   
  }
 }


