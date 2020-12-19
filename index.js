
let txt = `Hello I am Kingsley`;
let getEl = document.getElementById("memo");
i = 0;

window.onload = () => {
  let typeWr = setInterval(() => {
    getEl.textContent += txt[i];
    i = i + 1;
    if(i > txt.length - 1){
      clearInterval(typeWr);
    }
  }, 150) 
}
$("b").click(function(){
    $("body section, ul").css("background-color","#1a1c20")
    $("p.text_body,h1,h2,h3,li,span ").css("color","#fff")

    $("time,p.time").css("color","#222")
});


$("b.eyecare").click(function(){
  $("body").css("background-color","#f8b400")
});


(function() {

    'use strict';
    // define variables
    var items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    
  })();
