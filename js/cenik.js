function selectOption(group, button) {
  const buttons = document.querySelectorAll(`[data-group="${group}"].option-button`);
  buttons.forEach(btn => {
    btn.classList.remove('selected');
  });
  button.classList.add('selected');
  calculateTotalPrice();
}

function toggleAddon(addon) {
  event.target.classList.toggle('selected');
  calculateTotalPrice();
}

function calculateTotalPrice() {
  const selectedOptions = document.querySelectorAll('.option-button.selected');
  let totalPrice = 0;
  selectedOptions.forEach(option => {
    totalPrice += parseInt(option.getAttribute('data-price'));
  });
  document.getElementById('total-price').innerText = `Total Price: ${totalPrice}â‚¬`;
}

  function resetTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = `Skupna cena: 0€`; // Reset the total price to 0
}

function deselectButtons() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
}
  