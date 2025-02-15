const d = document;

document.addEventListener("DOMContentLoaded", function () {
    const inputCheckbox = d.getElementById("time-prices");
    const priceBasic = d.getElementById("price-basic");
    const pricePro = d.getElementById("price-pro");
    const priceMaster = d.getElementById("price-master");

    const prices = {
        monthly: {
            basic: "$19.99",
            pro: "$24.99",
            master: "$39.99"
        },
        annually: {
            basic: "$199.99",
            pro: "$249.99",
            master: "$399.99"
        }
    };

    function updatePrices() {
        const selectedPrices = inputCheckbox.checked ? prices.monthly : prices.annually;

        priceBasic.textContent = selectedPrices.basic;
        pricePro.textContent = selectedPrices.pro;
        priceMaster.textContent = selectedPrices.master;
    }

    updatePrices();
    inputCheckbox.addEventListener("change", updatePrices);

});