// Function to show the element with fade-in animation
function showElement(element) {
    element.style.display = 'block'; // Make sure the element is visible before adding the fade-in clas // Delay adding fade-in for transition effect
}

// Function to hide the element with fade-out animation
function hideElement(element) {
    element.classList.remove('fade-in');
    element.style.display = 'none';
}

// Event listener for narocilaButton
document.getElementById("narocilaButton").addEventListener("click", function() {
    // Hide profil and show narocila
    var profilElement = document.querySelector('#profilContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');

    hideElement(profilElement);
    showElement(narocilaElement);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

// Event listener for profilButton
document.getElementById("profilButton").addEventListener("click", function() {
    // Hide narocila and show profil
    var profilElement = document.querySelector('#profilContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');

    hideElement(narocilaElement);
    showElement(profilElement);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector('.profile-submit-button');
  
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Create FormData object
        var formData = new FormData();
  
  
        // Collect input values
        var nameInput = document.getElementById("ime").value;
        var priimekInput = document.getElementById("priimek").value;
        var mailInput = document.getElementById("email").value;
        var password1Input = document.getElementById("geslo").value;
        var password2Input = document.getElementById("geslo2").value;

        if(password1Input.length == 0 && password2Input.length == 0){
            formData.append('ime', nameInput);
            formData.append('priimek', priimekInput);
            formData.append('email', mailInput);
            formData.append('userId', document.getElementById('userId').textContent);
        }
        else{
            // Append input values to FormData object
            formData.append('ime', nameInput);
            formData.append('priimek', priimekInput);
            formData.append('email', mailInput);
            formData.append('geslo', password1Input);
            formData.append('geslo2', password2Input);
            formData.append('userId', document.getElementById('userId').textContent);
        }
  
  
        // AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'info/profileedit.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // show success div
                var successDiv = document.querySelector('.success');
                successDiv.style.display = 'block'; // Display the success div
                successDiv.classList.remove('fade-out'); // Remove fade-out class initially
                successDiv.classList.add('fade-in'); // Add fade-in class

                // Add fade-out class after 4 seconds to hide the success div
                setTimeout(function() {
                successDiv.classList.remove('fade-in');    
                successDiv.classList.add('fade-out');
                }, 4000);
                setTimeout(function() {
                successDiv.style.display = 'none';
                }, 4500); // hide success div after 4 seconds

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
  });
