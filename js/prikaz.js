document.addEventListener("DOMContentLoaded", function() {
    // Hide all divs except the initial one and price div
    document.querySelectorAll('.jermenski, .profesional, .standard, .visoki, .image-container-jermenski, .image-container-profesional, .image-container-standard, .image-container-visoki, .price').forEach(function(el) {
        el.style.display = 'none';
    });
    
    // Show the initial div and price div
    document.querySelector('.zacetek').style.display = 'block';
    document.querySelector('.zacetek').classList.add('fade-in'); // Add fade-in class
    document.querySelector('.image-container-zacetek').style.display = 'block';
    document.querySelector('.image-container-zacetek').classList.add('fade-in'); // Add fade-in class

    // Add event listeners to nav buttons to handle showing appropriate div and price
    document.getElementById("zacetek").addEventListener("click", function() {
        window.scrollTo(0, 0);

        document.querySelectorAll('.jermenski, .profesional, .standard, .visoki, .image-container-jermenski, .image-container-profesional, .image-container-standard, .image-container-visoki, .price').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelector('.zacetek').style.display = 'block';
        document.querySelector('.zacetek').classList.remove('fade-in');
        document.querySelector('.image-container-zacetek').style.display = 'block';
        document.querySelector('.image-container-zacetek').classList.remove('fade-in');
        document.querySelector('.price').style.display = 'none'; // Hide price div
        setTimeout(function() {
            document.querySelector('.zacetek').classList.add('fade-in');
            document.querySelector('.image-container-zacetek').classList.add('fade-in');
        }, 10);
    });

    document.getElementById("standard").addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Show standard and hide other divs
        document.querySelectorAll('.jermenski, .profesional, .visoki, .zacetek, .image-container-jermenski, .image-container-profesional, .image-container-zacetek, .image-container-visoki').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelector('.standard').style.display = 'block';
        document.querySelector('.standard').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.image-container-standard').style.display = 'block';
        document.querySelector('.image-container-standard').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.price').style.display = 'block'; // Show price div
        setTimeout(function() {
            document.querySelector('.standard').classList.add('fade-in');
            document.querySelector('.image-container-standard').classList.add('fade-in')
        }, 10); // Delay adding fade-in for transition effect
        fetchConfigurations('standard');
        resetTotalPrice();

        var sizeOptionsDiv = document.getElementById('size-options');
        sizeOptionsDiv.innerHTML = ''; // Clear the content of the div

        var optionButton = document.createElement('button');
        optionButton.setAttribute('class', 'option-button');
        optionButton.setAttribute('data-group', 'size');
        optionButton.setAttribute('data-price', '1500');
        optionButton.textContent = '400x30cm (1500€)';
        optionButton.onclick = function() {
        selectOption('size', this);
        };

      sizeOptionsDiv.appendChild(optionButton);
    });

    document.getElementById("profesional").addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Show profesional and hide other divs
        document.querySelectorAll('.jermenski, .standard, .visoki, .zacetek, .image-container-jermenski, .image-container-zacetek, .image-container-standard, .image-container-visoki').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelector('.profesional').style.display = 'block';
        document.querySelector('.profesional').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.image-container-profesional').style.display = 'block';
        document.querySelector('.image-container-profesional').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.price').style.display = 'block'; // Show price div
        setTimeout(function() {
            document.querySelector('.profesional').classList.add('fade-in');
            document.querySelector('.image-container-profesional').classList.add('fade-in')
        }, 10); // Delay adding fade-in for transition effect
        fetchConfigurations('profesional');
        resetTotalPrice();
    });

    document.getElementById("jermenski").addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Show jermenski and hide other divs
        document.querySelectorAll('.profesional, .standard, .visoki, .zacetek, .image-container-zacetek, .image-container-profesional, .image-container-standard, .image-container-visoki').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelector('.jermenski').style.display = 'block';
        document.querySelector('.jermenski').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.image-container-jermenski').style.display = 'block';
        document.querySelector('.image-container-jermenski').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.price').style.display = 'block'; // Show price div
        setTimeout(function() {
            document.querySelector('.jermenski').classList.add('fade-in');
            document.querySelector('.image-container-jermenski').classList.add('fade-in')
        }, 10); // Delay adding fade-in for transition effect
        fetchConfigurations('jermenski');
        resetTotalPrice();
    });

    document.getElementById("visoki").addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Show visoki and hide other divs
        document.querySelectorAll('.jermenski, .standard, .profesional, .zacetek, .image-container-jermenski, .image-container-profesional, .image-container-standard, .image-container-zacetek').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelector('.visoki').style.display = 'block';
        document.querySelector('.visoki').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.image-container-visoki').style.display = 'block';
        document.querySelector('.image-container-visoki').classList.remove('fade-in'); // Remove fade-in class
        document.querySelector('.price').style.display = 'block'; // Show price div
        setTimeout(function() {
            document.querySelector('.visoki').classList.add('fade-in');
            document.querySelector('.image-container-visoki').classList.add('fade-in')
        }, 10); // Delay adding fade-in for transition effect
        fetchConfigurations('visoki');
        resetTotalPrice();
    });
});


function showPrice(dimensions) {
    var priceDiv = document.getElementById('price' + dimensions);
    if (priceDiv.style.display === 'none') {
      priceDiv.style.display = 'block';
    } else {
      priceDiv.style.display = 'none';
    }
  }


  function fetchConfigurations(machine) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'podatki.php?machine=' + machine, true);
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

    // Check if Data is empty
    if (Object.values(Data).every(arr => arr.length === 0)) {
        // Write out message if all arrays are empty
        // hide every .option-section
        document.querySelectorAll('.option-section').forEach(function(el) {
            el.style.display = 'none';
        });
        document.getElementById('total-price').innerHTML = 'Ni še podatkov za to konfiguracijo.';
        return;
    } else {
        // Show every .option-section
        document.querySelectorAll('.option-section').forEach(function(el) {
            el.style.display = 'block';
        });
    }
    

    // Generate buttons for sizes
    Data.velikosti.forEach(function(size) {
        var optionButton = createOptionButton('size', size.machine, size.velikost, size.cena);
        document.getElementById('size-options').appendChild(optionButton);
    });

    // Generate buttons for rezkarji (drilling)
    Data.rezkarji.forEach(function(rezkar) {
        var optionButton = createOptionButton('drilling', rezkar.machine, rezkar.ime, rezkar.cena);
        document.getElementById('drilling-options').appendChild(optionButton);
    });

    // Generate buttons for laserji (laser)
    Data.laserji.forEach(function(laser) {
        var optionButton = createOptionButton('laser', laser.machine, laser.ime, laser.cena);
        document.getElementById('laser-options').appendChild(optionButton);
    });

    // Generate buttons for dodatki (addons)
    Data.dodatki.forEach(function(dodatki) {
        console.log(dodatki);
        var optionButton = createOptionButtonDodatki('addon', dodatki.machine, dodatki.ime, dodatki.cena);
        document.getElementById('addon-options').appendChild(optionButton);
    });
}

function createOptionButton(group, machine, label, price) {
    var optionButton = document.createElement('button');
    optionButton.setAttribute('class', 'option-button');
    optionButton.setAttribute('data-group', group);
    optionButton.setAttribute('data-price', price);
    optionButton.textContent = label + ' (' + price + '€)';
    optionButton.innerHTML =  label + ' (' + price + '€)';
    optionButton.onclick = function() {
        selectOption(group, this);
    };
    return optionButton;
}

function createOptionButtonDodatki(group, machine, label, price) {
    var optionButton = document.createElement('button');
    optionButton.setAttribute('class', 'option-button');
    optionButton.setAttribute('data-group', group);
    optionButton.setAttribute('data-price', price);
    optionButton.textContent = label + ' (' + price + '€)';
    optionButton.innerHTML =  label + ' (' + price + '€)';
    optionButton.onclick = function() {
        toggleAddon(group, this);
    };
    return optionButton;
}




