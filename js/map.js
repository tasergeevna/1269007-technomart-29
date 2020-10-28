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
  