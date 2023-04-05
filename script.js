//divisor script

const divisor = () => {
  // Set const with all .divisor elements
  const divisorArray = document.querySelectorAll(".divisor");

  // Define function to be executed when mouse is Scrolled
  const rollDivisor = () => {
    divisorArray.forEach(divisor => {
      divisor.style.width = `${120 + (scrollY / 2) }%`
    });
  };

  // Calls out scroll listener on window element with callback function
  window.addEventListener("scroll", rollDivisor);
}

divisor();