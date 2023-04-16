function counterUp(target, start, end, duration) {
    let current = start;
    const increment = (end - start) / duration;
    const counter = document.getElementById(target);
    const timer = setInterval(function() {
      current += increment;
      counter.innerHTML = Math.floor(current);
      if (current >= end) {
        clearInterval(timer);
        counter.innerHTML = end;
      }
    }, 10);
  }
  
  window.addEventListener("scroll", function() {
    
    const counters = document.querySelectorAll(".counter");
    const windowHeight = window.innerHeight;
    const arr=[70,20,110,4];
    for (let i = 0; i < counters.length; i++) {
      const counter = counters[i];
      const targetPos = counter.getBoundingClientRect().top;
      const scrollPos = window.scrollY;
      
      if (targetPos < windowHeight + scrollPos) {
        if (!counter.classList.contains("counted")) {
          counterUp(`count${i+1}`, 0,arr[i], 2000);
          counter.classList.add("counted");
        }
      }
    }
  });
  var sonal=document.getElementById("gallary-image");
  var majalo12=document.getElementById("majalo");
    sonal.onclick =function(){
        
            majalo12.style.display ="none";
        
    }
  