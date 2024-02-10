document.addEventListener("DOMContentLoaded", function() {
    // Hide all divs except the initial one
    document.querySelectorAll('.jermenski, .profesional, .standard, .visoki, .image-container-jermenski, .image-container-profesional, .image-container-standard, .image-container-visoki').forEach(function(el) {
        el.style.display = 'none';
    });
    
    // Show the initial div
    document.querySelector('.zacetek').style.display = 'block';
    document.querySelector('.zacetek').classList.add('fade-in'); // Add fade-in class
    document.querySelector('.image-container-zacetek').style.display = 'block';
    document.querySelector('.image-container-zacetek').classList.add('fade-in'); // Add fade-in class
});

document.getElementById("zacetek").addEventListener("click", function() {
    window.scrollTo(0, 0);

    document.querySelectorAll('.jermenski, .profesional, .standard, .visoki, .image-container-jermenski, .image-container-profesional, .image-container-standard, .image-container-visoki').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelector('.zacetek').style.display = 'block';
    document.querySelector('.zacetek').classList.remove('fade-in');
    document.querySelector('.image-container-zacetek').style.display = 'block';
    document.querySelector('.image-container-zacetek').classList.remove('fade-in');
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
    setTimeout(function() {
        document.querySelector('.standard').classList.add('fade-in');
        document.querySelector('.image-container-standard').classList.add('fade-in')
    }, 10); // Delay adding fade-in for transition effect
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
    setTimeout(function() {
        document.querySelector('.profesional').classList.add('fade-in');
        document.querySelector('.image-container-profesional').classList.add('fade-in')
    }, 10); // Delay adding fade-in for transition effect
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
    setTimeout(function() {
        document.querySelector('.jermenski').classList.add('fade-in');
        document.querySelector('.image-container-jermenski').classList.add('fade-in')
    }, 10); // Delay adding fade-in for transition effect
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
    setTimeout(function() {
        document.querySelector('.visoki').classList.add('fade-in');
        document.querySelector('.image-container-visoki').classList.add('fade-in')
    }, 10); // Delay adding fade-in for transition effect
});

function showPrice(dimensions) {
    var priceDiv = document.getElementById('price' + dimensions);
    if (priceDiv.style.display === 'none') {
      priceDiv.style.display = 'block';
    } else {
      priceDiv.style.display = 'none';
    }
  }
