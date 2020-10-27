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
      console.log(feedbackModal);
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else {
        if (isStorageSupport)
        {localStorage.setItem("login", feedbackName.value);
        localStorage.setItem("email", feedbackEmail.value);
    }
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