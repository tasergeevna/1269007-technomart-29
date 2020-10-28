const lastArrow = document.querySelector(".last-arrow");
const nextArrow = document.querySelector(".next-arrow");
let slidePerf = document.querySelector(".perforator");
let slideDrill = document.querySelector(".drill");
const sliderBullets = document.querySelectorAll(".slider-bullet")

function callback(evt) {
    slidePerf.classList.toggle("display-none");
    slideDrill.classList.toggle("display-none");
    sliderBullets[0].classList.toggle("slider-bullet-selected");
    sliderBullets[1].classList.toggle("slider-bullet-selected");
}

lastArrow.addEventListener("click", callback);
nextArrow.addEventListener("click", callback);

for (let sliderBullet of sliderBullets) {
    sliderBullet.addEventListener("click", function () {
        if (!sliderBullet.classList.contains("slider-bullet-selected")){
            callback();
        }    
    });
}

