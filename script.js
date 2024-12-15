const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});


function updatePriceOutput() {
    const priceSlider = document.getElementById("price-range");
    document.getElementById("price-max").textContent = priceSlider.value;
  }
  
  function updateAreaOutput() {
    const areaSlider = document.getElementById("area-range");
    document.getElementById("area-max").textContent = areaSlider.value;
  }
  
  

  // трейд ин

  function calculateTradeIn() {
    const apartmentPrice = parseFloat(document.getElementById("apartment-price").value);
    const newHomePrice = parseFloat(document.getElementById("new-home-price").value);
  
    if (isNaN(apartmentPrice) || isNaN(newHomePrice) || apartmentPrice <= 0 || newHomePrice <= 0) {
      document.getElementById("trade-in-result").textContent = "Пожалуйста, введите корректные данные.";
      return;
    }
  
    const remainingAmount = newHomePrice - apartmentPrice;
  
    let resultMessage;
    if (remainingAmount > 0) {
      resultMessage = `Вам нужно будет доплатить: ${remainingAmount.toLocaleString()} C.`;
    } else if (remainingAmount < 0) {
      resultMessage = `Вы получите остаток: ${Math.abs(remainingAmount).toLocaleString()} C.`;
    } else {
      resultMessage = "Ваш трейд-ин полностью покрывает стоимость нового дома!";
    }
  
    document.getElementById("trade-in-result").textContent = resultMessage;
  }