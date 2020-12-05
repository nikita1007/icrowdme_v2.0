let slides = document.querySelectorAll('.slider__item');
var btn_next = document.querySelector('.arrow__right');
var btn_prev = document.querySelector('.arrow__left');
let slides_arr = [];

let step = 0,
    offset = 0; 

for (let i= 0; i < slides.length; i++) {
  slides_arr[i] = slides[i];
  slides[i].remove();
}

console.log(slides_arr[0]);

// for (let j = 0; j < slides_arr.length; j++) {
//   console.log(slides_arr[j]);
// }

function draw() {
  document.querySelector('#slider').appendChild(slides_arr[step]);
  document.querySelector('#slider').appendChild(slides_arr[step+1]);
  if (step + 1 == slides_arr.lenght) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

console.log(slides);

draw();