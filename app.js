const slider = document.querySelector('.slider-bar');
const toggle = document.querySelector('.slider')
const output = document.querySelector(".value");
const output2 = document.querySelector(".value2");
const toggleSlider = document.querySelector(".toggle-slider")
const progress = document.querySelector(".progress")
let view = document.getElementById("pageView");
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMount = [8, 12, 16, 24, 36];
let isYearly = false;

output.innerHTML = perMount[slider.value];
output2.innerHTML = perMount[slider.value];



toggleSlider.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValue();
});

function updateValue(){
  if(isYearly == true){
    output.innerHTML = perMount[slider.value] * 0.75;
    output2.innerHTML = perMount[slider.value] * 0.75;
  }else{
    output.innerHTML = perMount[slider.value];
    output2.innerHTML = perMount[slider.value]
  }
}

slider.oninput = function() {
  output.innerHTML =  perMount[slider.value];
  output2.innerHTML =  perMount[slider.value];
  view.innerHTML = pageViews[slider.value];
  updateValue();
  let bar = this.value * 25;

  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${bar}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
}












