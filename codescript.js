 
     "use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}
// seting our values equal to html elements dom manp 
const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
//perform calculations on width
line.style.bottom = `calc(100% - 20px)`;
//returns the number of pixels that the document is currently scrolled vertically.
let prevScrollY = window.scrollY;
// set mobility and what isnt
let up, down;
let full = false;
let set = 0;
//property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

const targetY = window.innerHeight * .8;

// lets call them back, allows for the scroll up and down by making them equal != checks the value 
function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  // GetBOUND returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  //by scrolling down we will call the dist, subracting our dom proper
  const dist = targetY - timelineRect.top;
  console.log(dist);
//only if all the operands are true , Set was 0 now mat max of that and distance, now we take that value as paramter of sliding down
  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }
// OFFSET height of an element, including vertical padding and borders, as an integer. only if all the operands are true, and we sccroll
  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    //The bottom property sets or returns the bottom position of a positioned element.
    line.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    // console.log(item);

    //providing information about the size of an element and its position relative to the viewport.
    
    const rect = item.getBoundingClientRect(); //     console.log(rect);

//top property returns the topmost window in the current browser window 
//OFFSET height of an element, including vertical padding and borders, as an integer.
    //finally create the tag to call 
    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add('show-me');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

// how to display the screen and scroll, keep it block
scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);


// // image text transtions call both and set them
// let slideIndexs = 0;
// let slideIndexss = 0;
// showSlidess(slideIndexs)
//add the index to the parmater then make them equal again
// function plusSlidess (n) {
//     showSlidess (slideIndexs += n);
// }

// function currentSlides(n) {
//     showSlidess (slideIndexs = n);
// }

// function showSlidess(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides1");
//     let dots = document.getElementsByClassName("dot1");
//     if (n > slides.length) {slideIndexs = 1}
//     if (n < 1) {slideIndexs = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndexs-1].style.display = "block";
//     dots[slideIndexs-1].className += " active";
// }