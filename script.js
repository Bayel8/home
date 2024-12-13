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
  
  