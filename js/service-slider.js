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


