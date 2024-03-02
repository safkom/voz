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
    var uporabnikiElement = document.querySelector('#uporabnikiContainer');
    var izdelkiElement = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');
    var deletePoljaContainer = document.querySelector('#deletePoljaContainer');
    var addPoljaContainer = document.querySelector('#addPoljaContainer');
    var straniContainer = document.querySelector('#straniContainer');
    var createStranContainer = document.querySelector('#create-page-form');
    if(document.querySelector('#editIzdelekContainer') !== null){
        var editIzdelekContainer = document.querySelector('#editIzdelekContainer');
        }
        hideElement(dodajIzdelekContainer);
        if(document.querySelector('#editIzdelekContainer') !== null){
        hideElement(editIzdelekContainer);
    }
    if(document.querySelector('#deletePoljaContainer') !== null){
        hideElement(deletePoljaContainer);
    }
    if(document.querySelector('#addPoljaContainer') !== null){
        hideElement(addPoljaContainer);
    }
    hideElement(createStranContainer);
    hideElement(izdelkiElement);
    hideElement(straniContainer);
    hideElement(uporabnikiElement);
    hideElement(profilElement);
    showElement(narocilaElement);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.getElementById("straniButton").addEventListener("click", function() {
    // Hide profil and show narocila
    var profilElement = document.querySelector('#profilContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');
    var uporabnikiElement = document.querySelector('#uporabnikiContainer');
    var izdelkiElement = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');
    var deletePoljaContainer = document.querySelector('#deletePoljaContainer');
    var addPoljaContainer = document.querySelector('#addPoljaContainer');
    var straniContainer = document.querySelector('#straniContainer');
    var createStranContainer = document.querySelector('#create-page-form');
    if(document.querySelector('#editIzdelekContainer') !== null){
        var editIzdelekContainer = document.querySelector('#editIzdelekContainer');
    }
        hideElement(dodajIzdelekContainer);
        if(document.querySelector('#editIzdelekContainer') !== null){
        hideElement(editIzdelekContainer);
    }
    if(document.querySelector('#deletePoljaContainer') !== null){
        hideElement(deletePoljaContainer);
    }
    if(document.querySelector('#addPoljaContainer') !== null){
        hideElement(addPoljaContainer);
    }
    hideElement(createStranContainer);
    hideElement(narocilaElement);
    hideElement(izdelkiElement);
    hideElement(uporabnikiElement);
    hideElement(profilElement);
    showElement(straniContainer);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.getElementById("dodajIzdelekButton").addEventListener("click", function() {
    // Hide profil and show narocila
    var izdelkiContainer = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');

    hideElement(izdelkiContainer);
    showElement(dodajIzdelekContainer);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.getElementById("nazajIzdelekButton").addEventListener("click", function() {
    // Hide profil and show narocila
    var izdelkiContainer = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');

    hideElement(dodajIzdelekContainer);
    showElement(izdelkiContainer);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.getElementById("izdelkiButton").addEventListener("click", function() {
    // Hide profil and show narocila
    var profilElement = document.querySelector('#profilContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');
    var uporabnikiElement = document.querySelector('#uporabnikiContainer');
    var izdelkiElement = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');
    var deletePoljaContainer = document.querySelector('#deletePoljaContainer');
    var addPoljaContainer = document.querySelector('#addPoljaContainer');
    var straniContainer = document.querySelector('#straniContainer');
    var createStranContainer = document.querySelector('#create-page-form');
    if(document.querySelector('#editIzdelekContainer') !== null){
    var editIzdelekContainer = document.querySelector('#editIzdelekContainer');
    }
    hideElement(dodajIzdelekContainer);
    if(document.querySelector('#editIzdelekContainer') !== null){
    hideElement(editIzdelekContainer);
    }
    if(document.querySelector('#deletePoljaContainer') !== null){
        hideElement(deletePoljaContainer);
    }
    if(document.querySelector('#addPoljaContainer') !== null){
        hideElement(addPoljaContainer);
    }
    hideElement(straniContainer);
    hideElement(createStranContainer);
    hideElement(narocilaElement);
    hideElement(uporabnikiElement);
    hideElement(profilElement);
    showElement(izdelkiElement);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});



// Event listener for profilButton
document.getElementById("profilButton").addEventListener("click", function() {
    // Hide narocila and show profil
    var profilElement = document.querySelector('#profilContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');
    var uporabnikiElement = document.querySelector('#uporabnikiContainer');
    var izdelkiElement = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');
    var deletePoljaContainer = document.querySelector('#deletePoljaContainer');
    var addPoljaContainer = document.querySelector('#addPoljaContainer');
    var straniContainer = document.querySelector('#straniContainer');
    var createStranContainer = document.querySelector('#create-page-form');
    if(document.querySelector('#editIzdelekContainer') !== null){
        var editIzdelekContainer = document.querySelector('#editIzdelekContainer');
        }
        hideElement(dodajIzdelekContainer);
        if(document.querySelector('#editIzdelekContainer') !== null){
        hideElement(editIzdelekContainer);
        }
        if(document.querySelector('#deletePoljaContainer') !== null){
            hideElement(deletePoljaContainer);
        }
        if(document.querySelector('#addPoljaContainer') !== null){
            hideElement(addPoljaContainer);
        }
        hideElement(straniContainer);
        hideElement(createStranContainer);
    hideElement(izdelkiElement);
    hideElement(uporabnikiElement);
    hideElement(narocilaElement);
    showElement(profilElement);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
});

document.getElementById("uporabnikiButton").addEventListener("click", function() {
    // Hide narocila and show profil
    var uporabnikiElement = document.querySelector('#uporabnikiContainer');
    var narocilaElement = document.querySelector('#narocilaContainer');
    var profilElement = document.querySelector('#profilContainer');
    var izdelkiElement = document.querySelector('#izdelkiContainer');
    var dodajIzdelekContainer = document.querySelector('#novIzdelekContainer');
    var deletePoljaContainer = document.querySelector('#deletePoljaContainer');
    var addPoljaContainer = document.querySelector('#addPoljaContainer');
    var straniContainer = document.querySelector('#straniContainer');
    var createStranContainer = document.querySelector('#create-page-form');
    if(document.querySelector('#editIzdelekContainer') !== null){
        var editIzdelekContainer = document.querySelector('#editIzdelekContainer');
        }
        hideElement(dodajIzdelekContainer);
        if(document.querySelector('#editIzdelekContainer') !== null){
        hideElement(editIzdelekContainer);
        }
        if(document.querySelector('#deletePoljaContainer') !== null){
            hideElement(deletePoljaContainer);
        }
        if(document.querySelector('#addPoljaContainer') !== null){
            hideElement(addPoljaContainer);
        }
    hideElement(straniContainer);
    hideElement(createStranContainer);
    hideElement(izdelkiElement);
    hideElement(profilElement);
    hideElement(narocilaElement);
    showElement(uporabnikiElement);

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
            console.log("no password change");
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

                if(password1Input.length !== 0 && password2Input.length !== 0){
                    document.getElementById("gesloText").style.display = 'block';
                }
                else{
                    document.getElementById("gesloText").style.display = 'none';
                }
                // Add fade-out class after 4 seconds to hide the success div
                setTimeout(function() {
                successDiv.classList.remove('fade-in');    
                successDiv.classList.add('fade-out');
                }, 4000);
                setTimeout(function() {
                successDiv.style.display = 'none';
                document.getElementById("gesloText").style.display = 'none';
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

  //if delete-usr-btn is clicked
    document.addEventListener("DOMContentLoaded", function() {
        var deleteButton = document.querySelector('.delete-user-btn');
    
        deleteButton.addEventListener('click', function(event) {
            event.preventDefault();
    
            // Create FormData object
            var formData = new FormData();
    
            // Collect input values
            //get value from the pressed buttons attribute called data-user-id

            var userId = this.getAttribute('data-user-id');
            formData.append('user_id', userId);
    
            // AJAX request
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'info/deleteuser.php', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    //refresh page
                    location.reload();
    
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

    document.addEventListener("DOMContentLoaded", function() {
        // Event delegation for edit-user-btn
        document.body.addEventListener('click', function(event) {
            if (event.target.classList.contains('edit-user-btn')) {
                var userName = event.target.getAttribute('data-user-name');
                var userSurname = event.target.getAttribute('data-user-surname');
                var userMail = event.target.getAttribute('data-user-mail');
                var userId = event.target.getAttribute('data-user-id');
    
                var popupBox = document.querySelector('.popup-box');
                popupBox.innerHTML = `
                    <h2>Podatki uporabnika</h2>
                        <label for="ime">Ime:</label>
                        <input type="text" id="editIme" name="ime" value="${userName}" required><br>
                        <label for="priimek">Priimek:</label>
                        <input type="text" id="editPriimek" name="priimek" value="${userSurname}" required><br>
                        <label for="email">Email:</label>
                        <input type="text" id="editEmail" name="email" value="${userMail}" required><br>
                        <div id = "userId" style = "display:none;">${userId}</div>
                        <div class="button-container">
                        <button class="edit-profile-submit-button">Shrani</button>
                        <button class="delete-order-btn" id="close-popup" style="float: right;">Zapri</button></div>
                `;
    
                var popupContainer = document.getElementById('popupContainer');
                popupContainer.style.display = 'block';
    
                var closePopupBtn = document.querySelector('#close-popup');
                closePopupBtn.addEventListener('click', function() {
                    popupContainer.style.display = 'none';
                });

                //if profile-submit-button is clicked
                var submitButton = document.querySelector('.edit-profile-submit-button');
    
                submitButton.addEventListener('click', function(event) {
                    console.log("submit button clicked");
                    event.preventDefault();
            
                    var formData = new FormData();
                    console.log("formdata created")
            
                    var nameInput = document.getElementById("editIme").value;
                    var priimekInput = document.getElementById("editPriimek").value;
                    var mailInput = document.getElementById("editEmail").value;
                    formData.append('ime', nameInput);
                    formData.append('priimek', priimekInput);
                    formData.append('email', mailInput);
                    formData.append('userId', document.getElementById("userId").textContent);
                    formData.append('geslo', "");
                    formData.append('geslo2', "");

                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'info/profileedit.php', true);
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            //refresh page
                            location.reload();
                        } else {
                            console.error('Form submission failed. Status: ' + xhr.status);
                        }
                    };
                    xhr.onerror = function() {
                        console.error('Form submission failed. Connection error.');
                    };
                    xhr.send(formData);
                });
            }
        });
    
        
    });

    // if #add-user-btn is clicked
    document.addEventListener("DOMContentLoaded", function() {
        var addUserButton = document.querySelector('#add-user-btn');
    
        addUserButton.addEventListener('click', function(event) {
            var popupBox = document.querySelector('.popup-box');
            popupBox.innerHTML = `
                <h2>Dodaj uporabnika</h2>
                    <label for="ime">Ime:</label>
                    <input type="text" id="addIme" name="ime" required><br>
                    <label for="priimek">Priimek:</label>
                    <input type="text" id="addPriimek" name="priimek" required><br>
                    <label for="email">Email:</label>
                    <input type="text" id="addEmail" name="email" required><br>
                    <label for="geslo">Geslo:</label>
                    <input type="password" id="addGeslo" name="geslo" required><br>
                    <label for="geslo2">Ponovi geslo:</label>
                    <input type="password" id="addGeslo2" name="geslo2" required><br>
                    <br>
                    <label for "admin">Admin?</label>
                    <input type="checkbox" id="admin" name="admin" value="admin">
                    <div class="button-container">
                    <button class="add-profile-submit-button">Dodaj</button>
                    <button class="delete-order-btn" id="close-popup" style="float: right;">Zapri</button></div>
            `;
    
            var popupContainer = document.getElementById('popupContainer');
            popupContainer.style.display = 'block';
    
            var closePopupBtn = document.querySelector('#close-popup');
            closePopupBtn.addEventListener('click', function() {
                popupContainer.style.display = 'none';
            });

            //if profile-submit-button is clicked
            var submitButton = document.querySelector('.add-profile-submit-button');
    
            submitButton.addEventListener('click', function(event) {
                event.preventDefault();
        
                var formData = new FormData();
        
                var nameInput = document.getElementById("addIme").value;
                var priimekInput = document.getElementById("addPriimek").value;
                var mailInput = document.getElementById("addEmail").value;
                var password1Input = document.getElementById("addGeslo").value;
                var password2Input = document.getElementById("addGeslo2").value;
                var adminInput = document.getElementById("admin").checked;

                if(adminInput){
                    adminInput = 1;
                }
                else{
                    adminInput = 0;
                }

                if(password1Input !== password2Input){
                    alert("Gesli se ne ujemata!");
                    return;
                }

                formData.append('ime', nameInput);
                formData.append('priimek', priimekInput);
                formData.append('email', mailInput);
                formData.append('geslo', password1Input);
                formData.append('geslo2', password2Input);
                formData.append('admin', adminInput);

                var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'info/adduser.php', true);
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            //refresh page
                            location.reload();
                        } else {
                            console.error('Form submission failed. Status: ' + xhr.status);
                        }
                    };
                    xhr.onerror = function() {
                        console.error('Form submission failed. Connection error.');
                    };
                    xhr.send(formData);
                });
            });
        });


    
    