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