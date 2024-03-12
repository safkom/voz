function selectOption(group, button) {
  const buttons = document.querySelectorAll(`[data-group="${group}"].option-button`);

  // Unselect all buttons if the group is 'size'
  if (group === 'size') {
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });
  }
  
  // Toggle the selected state of the clicked button
  if (button.classList.contains('selected')) {
    button.classList.remove('selected');
  } else {
    button.classList.add('selected');
  }

  // Ensure only one option is selected if the group is 'drilling' or 'laser'
  if (group === 'drilling' || group === 'laser') {
    buttons.forEach(btn => {
      if (btn !== button && btn.classList.contains('selected')) {
        btn.classList.remove('selected');
      }
    });
  }

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
  document.getElementById('total-price').innerText = `Skupna cena: ${totalPrice}€`;
}

  function resetTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = `Skupna cena: 0€`;
}

function deselectButtons() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
}

function showPrice(dimensions) {
  var priceDiv = document.getElementById('price' + dimensions);
  if (priceDiv.style.display === 'none') {
    priceDiv.style.display = 'block';
  } else {
    priceDiv.style.display = 'none';
  }
}

var machineid = 0;
function fetchConfigurations(machine) {
  machineid = machine;
  //find <p> with id= konfigurator_id and set its innerHTML to machineid
  document.getElementById('konfigurator_id').innerHTML = machineid;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'info/podatki.php?machine=' + machine, true);
  xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
          var Data = JSON.parse(xhr.responseText);
          generateConfiguration(Data);
      } else {
          console.error('Failed to fetch configurations data');
      }
  };
  xhr.onerror = function() {
      console.error('Failed to fetch configurations data');
  };
  xhr.send();
}

function generateConfiguration(Data) {

  // Clear the content of the divs
  document.getElementById('size-options').innerHTML = '';
  document.getElementById('drilling-options').innerHTML = '';
  document.getElementById('laser-options').innerHTML = '';
  document.getElementById('addon-options').innerHTML = '';
  document.getElementById('total-price').innerHTML = 'Skupna cena: 0€';

  // Check if Data is empty
  if (Object.values(Data).every(arr => arr.length === 0)) {
      // Write out message if all arrays are empty
      // hide every .option-section
      document.querySelectorAll('.option-section').forEach(function(el) {
          el.style.display = 'none';
      });
      document.querySelectorAll('.submit-button').forEach(function(el) {
          el.style.display = 'none';
      });
      document.getElementById('total-price').innerHTML = 'Ni še podatkov za to konfiguracijo.';
      return;
  } else {
      // Show every .option-section
      document.querySelectorAll('.option-section').forEach(function(el) {
          el.style.display = 'block';
      });
      document.querySelectorAll('.submit-button').forEach(function(el) {
          el.style.display = 'block';
      });
  }
  

  // Generate buttons for sizes
  Data.velikosti.forEach(function(size) {
      var optionButton = createOptionButton('size', size.machine, size.velikost, size.cena, size.id);
      document.getElementById('size-options').appendChild(optionButton);
  });

  // Generate buttons for rezkarji (drilling)
  Data.rezkarji.forEach(function(rezkar) {
      var optionButton = createOptionButton('drilling', rezkar.machine, rezkar.ime, rezkar.cena, rezkar.id);
      document.getElementById('drilling-options').appendChild(optionButton);
  });

  // Generate buttons for laserji (laser)
  Data.laserji.forEach(function(laser) {
      var optionButton = createOptionButton('laser', laser.machine, laser.ime, laser.cena, laser.id);
      document.getElementById('laser-options').appendChild(optionButton);
  });

  // Generate buttons for dodatki (addons)
  Data.dodatki.forEach(function(dodatki) {
      var optionButton = createOptionButtonDodatki('addon', dodatki.machine, dodatki.ime, dodatki.cena, dodatki.id);
      document.getElementById('addon-options').appendChild(optionButton);
  });
}

function createOptionButton(group, machine, label, price, db_id) {
  var optionButton = document.createElement('button');
  optionButton.setAttribute('class', 'option-button');
  optionButton.setAttribute('data-group', group);
  optionButton.setAttribute('data-price', price);
  optionButton.setAttribute('database-id', db_id);
  optionButton.textContent = label + ' (' + price + '€)';
  optionButton.innerHTML =  label + ' (' + price + '€)';
  optionButton.onclick = function() {
      selectOption(group, this);
  };
  return optionButton;
}

function createOptionButtonDodatki(group, machine, label, price, db_id) {
  var optionButton = document.createElement('button');
  optionButton.setAttribute('class', 'option-button');
  optionButton.setAttribute('data-group', group);
  optionButton.setAttribute('data-price', price);
  optionButton.setAttribute('database-id', db_id);
  optionButton.textContent = label + ' (' + price + '€)';
  optionButton.innerHTML =  label + ' (' + price + '€)';
  optionButton.onclick = function() {
      toggleAddon(group, this);
  };
  return optionButton;
}





function opozoriloIzbira(message) {
  var opozorilo = document.getElementById('opozorilo-izbira');
  opozorilo.style.display = 'block';
  opozorilo.innerText = '⚠️' + message;
  var window = document.getElementById('konfigurator-window')
  window.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(function() {
      opozorilo.style.display = 'none';
  }, 4000);
}

function showForm() {
  var configurator = document.querySelector('#cenik');
  //add fade out to configurator
  configurator.classList.remove('fade-in');
  configurator.classList.add('fade-out');
  //hide configurator
  configurator.style.display = 'none';

  var form = document.querySelector('.povprasevanje-form');
  form.style.display = 'block';

  // Scroll to the form element
  var window = document.getElementById('konfigurator-window')
  window.scrollIntoView({ behavior: 'smooth', block: 'start' });

  setTimeout(function() {
      form.classList.add('fade-in');
  }, 10);
}


function hideForm(){
  var form = document.querySelector('.povprasevanje-form');
  form.style.display = 'none';

  var configurator = document.querySelector('#cenik');
  configurator.style.display = 'block';
}
document.addEventListener('click', function(event) {
  if(event.target && event.target.id === 'nazaj') {
  hideForm();
  }
});


document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'povprasevanje') {
    var selectedSize = document.querySelector('.option-button.selected[data-group="size"]');
    var selectedSizeId = selectedSize ? selectedSize.getAttribute('database-id') : null;
    
    var selectedDrilling = document.querySelector('.option-button.selected[data-group="drilling"]');
    var selectedDrillingId = selectedDrilling ? selectedDrilling.getAttribute('database-id') : null;
    
    var selectedLaser = document.querySelector('.option-button.selected[data-group="laser"]');
    var selectedLaserId = selectedLaser ? selectedLaser.getAttribute('database-id') : null;

    var selectedAddons = document.querySelectorAll('.option-button.selected[data-group="addon"]');
    var selectedAddonsIds = [];
    selectedAddons.forEach(function(addon) {
      selectedAddonsIds.push(addon.getAttribute('database-id'));
    });

    if (selectedSizeId) {
      showForm();
      console.log(selectedSizeId);
      // Proceed with further actions here
    } else {
      opozoriloIzbira('Izberite velikost za napravo.');
      console.log(selectedSizeId);
    }
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.querySelector('.submit-button-form');
  if(submitButton){
    submitButton.addEventListener('click', function(event) {
      console.log("submit pressed");
        event.preventDefault();
  
        // Create FormData object
        var formData = new FormData();
  
        // Get selected options' IDs
        var selectedSize = document.querySelector('.option-button.selected[data-group="size"]');
        var selectedSizeId = selectedSize ? selectedSize.getAttribute('database-id') : null;
  
        var selectedDrilling = document.querySelector('.option-button.selected[data-group="drilling"]');
        var selectedDrillingId = selectedDrilling ? selectedDrilling.getAttribute('database-id') : null;
  
        var selectedLaser = document.querySelector('.option-button.selected[data-group="laser"]');
        var selectedLaserId = selectedLaser ? selectedLaser.getAttribute('database-id') : null;
  
        var selectedAddons = document.querySelectorAll('.option-button.selected[data-group="addon"]');
        var selectedAddonsIds = [];
        selectedAddons.forEach(function(addon) {
            selectedAddonsIds.push(addon.getAttribute('database-id'));
        });
  
        // Append selected option IDs to FormData object
        formData.append('selectedSizeId', selectedSizeId);
        formData.append('selectedDrillingId', selectedDrillingId);
        formData.append('selectedLaserId', selectedLaserId);
        selectedAddonsIds.forEach(function(addonId) {
            formData.append('selectedAddonsIds[]', addonId);
        });
  
        // Collect input values
        var nameInput = document.getElementById("ime").value;
        var emailInput = document.getElementById("email").value;
        var messageInput = document.getElementById("opombe").value;
        var phoneInput = document.getElementById("telefon").value;
  
  
        // Append input values to FormData object
        formData.append('ime', nameInput);
        formData.append('email', emailInput);
        formData.append('opombe', messageInput);
        formData.append('telefon', phoneInput);
        formData.append('konfigurator', document.getElementById('konfigurator_id').innerHTML);

        //print the selected buttons
        console.log(selectedSizeId);

        if(selectedDrillingId == null){
          selectedDrillingId = 0;
        }
        if(selectedLaserId == null){
          selectedLaserId = 0;
        }
        console.log(selectedDrillingId);
        console.log(selectedLaserId);
        console.log(selectedAddonsIds);
  
        
        // AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'info/povprasevanje.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // show success div
                console.log(xhr.responseText);
                var successDiv = document.querySelector('.success');
                successDiv.style.display = 'block';
                successDiv.classList.add('fade-in');
                // hide form
                var form = document.querySelector('.modern-form');
                form.style.display = 'none';
                // hide success div after 4 seconds
                // You can show a success message or redirect the user to another page here
            } else {
                // Handle error response
                console.error('Form submission failed. Status: ' + xhr.status);
                // You can display an error message to the user here
            }
        };
        xhr.onerror = function() {
            // Handle connection error
            console.error('Form submission failed. Connection error.');
            // You can display an error message to the user here
        };
        xhr.send(formData);
    });
  } 
});





