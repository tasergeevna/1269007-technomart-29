const buyButtons = document.querySelectorAll(".buy-button");
const modalPurchase = document.querySelector(".modal-purchase-wrapper");
const purchaseClose = modalPurchase.querySelector(".modal-close");
const continueShopping = modalPurchase.querySelector(".back-to-catalog");

for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalPurchase.classList.remove("display-none");
    });
    purchaseClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalPurchase.classList.add("display-none");
    });
    continueShopping.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalPurchase.classList.add("display-none");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
            if (!modalPurchase.classList.contains("display-none")) {
            evt.preventDefault();
            modalPurchase.classList.add("display-none");
            }
        }
    });
}

const feedbackButton = document.querySelector(".modal-link");
const feedbackModal = document.querySelector(".feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackName = feedbackModal.querySelector(".name-input");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackEmail = feedbackModal.querySelector(".email-input");
const feedbackLetter = feedbackModal.querySelector(".feedback-input-field");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("display-none");
    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    } 
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("display-none");
    feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
      evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else if (isStorageSupport) {localStorage.setItem("login", feedbackName.value);
        localStorage.setItem("email", feedbackEmail.value);
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (!feedbackModal.classList.contains("display-none")) {
        evt.preventDefault();
        feedbackModal.classList.add("display-none");
      }
      if (feedbackModal.classList.contains("modal-error")) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
      }
    }
});

const mapLink = document.querySelector(".map-link");
const modalMap = document.querySelector(".modal-map-wrapper");
const mapClose = modalMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("display-none");
});
  
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("display-none");
});
  
window.addEventListener("keydown", function (evt) {
if (evt.key === "Escape") {
    if (!modalMap.classList.contains("display-none")) {
    evt.preventDefault();
    modalMap.classList.add("display-none");
    }
}
});

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

const serviceButtons = document.querySelectorAll(".service-button");
const serviceItems = document.querySelectorAll(".service-item");

for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].addEventListener("click", function () {
        if (!serviceButtons[i].classList.contains("selected-service-button")) {
            const selectedButton = document.querySelector(".selected-service-button");
            const selectedItem = document.querySelector(".selected-service-item");
            selectedButton.classList.remove("selected-service-button");
            selectedItem.classList.remove("selected-service-item");
            serviceButtons[i].classList.add("selected-service-button");
            serviceItems[i].classList.add("selected-service-item");
        }   
    });
}





