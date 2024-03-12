document.addEventListener("DOMContentLoaded", function() {
    function addField(containerId, className, labelText) {
        var container = document.getElementById(containerId);
    
        if (container) { // Check if container exists
            var newField = document.createElement('div');
            newField.classList.add(className);
            newField.innerHTML = `
                <label>${labelText}</label>
                <input type="text" name="${className}[]" required>
                <label>Cena</label>
                <input type="number" name="${className}_cena[]" required>
                <button class="deleteFieldBtn">Odstrani</button><br><br>
            `;
            container.appendChild(newField);
    
            // Attach event listener to the newly created field for deletion
            newField.querySelector('.deleteFieldBtn').addEventListener('click', deleteField);
        } else {
            console.error('Container element not found.');
        }
    }
       

    function deleteField(event) {
        if (event.target.classList.contains('deleteFieldBtn')) {
            event.target.parentElement.remove();
        }
    }

    document.getElementById('addFieldsBtn').addEventListener('click', function() {
        addField('velikostFields', 'velikost', 'Velikost');
    });    

    document.getElementById('addRezkarBtn').addEventListener('click', function() {
        addField('rezkarjiContainer', 'rezkar', 'Rezkar');
    });

    document.getElementById('addLaserBtn').addEventListener('click', function() {
        addField('laserjiContainer', 'laser', 'Laser');
    });

    document.getElementById('addDodatekBtn').addEventListener('click', function() {
        addField('dodatkiContainer', 'dodatek', 'Dodatek');
    });

    document.addEventListener('click', function(event) {
        // Check if the button to add fields for Velikost is clicked
        if (event.target.id === 'addFieldsVelikostBtn') {
            addField('velikostAddFields', 'velikost', 'Velikost');
        }
        // Add similar checks for other buttons here...
        if (event.target.id === 'addFieldsRezkarBtn'){
            addField('rezkarjiAddContainer', 'rezkar', 'Rezkar');
        }
        if (event.target.id === 'addFieldsLaserBtn'){
            addField('laserjiAddContainer', 'laser', 'Laser');
        }
        if (event.target.id === 'addFieldsDodatekBtn'){
            addField('dodatkiAddContainer', 'dodatek', 'Dodatek');
        }
    });
    

    // Move this listener inside the DOMContentLoaded event listener
    var deleteButtons = document.querySelectorAll('.delete-konfigurator-btn');
    deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener('click', function(event) {
            event.preventDefault();
    
            // Create FormData object
            var formData = new FormData();
    
            // Collect input values
            //get value from the pressed buttons attribute called data-user-id
            var konfiguratorId = this.getAttribute('data-konfigurator-id');
            formData.append('konfigurator_id', konfiguratorId);
    
            // AJAX request
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'info/deletekonfigurator.php', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    document.cookie = "obvestilo=Konfigurator izbrisan!; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
                    location.reload();
                } else {
                    document.cookie = "obvestilo=Prišlo je do napake! Ne morem doseči strani. Poskusite znova.; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
                    location.reload();
                    // Handle error response
                    console.error('Form submission failed. Status: ' + xhr.status);
                    // You can display an error message to the user here
                }
            };
            xhr.onerror = function() {
                // Handle connection error
                document.cookie = "obvestilo=Prišlo je do napake! Poskusite znova.; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
                location.reload();
                console.error('Form submission failed. Connection error.');
                // You can display an error message to the user here
            };
            xhr.send(formData);
        });
    });

    var editButtons = document.querySelectorAll('.edit-konfigurator-btn');

    editButtons.forEach(function(editButton) {
    editButton.addEventListener('click', function(event) {
        event.preventDefault();
        var konfiguratorId = this.getAttribute('data-konfigurator-id');
        var konfiguratorName = this.getAttribute('data-konfigurator-ime');
        var konfiguratorVelikost = JSON.parse(this.getAttribute('data-velikosti'));
        var konfiguratorRezkarji = JSON.parse(this.getAttribute('data-rezkarji'));
        var konfiguratorLaserji = JSON.parse(this.getAttribute('data-laserji'));
        var konfiguratorDodatek = JSON.parse(this.getAttribute('data-dodatki'));

        // Hide #izdelki-container
        document.getElementById('izdelkiContainer').style.display = 'none';

        // Create a new form
        var formContainer = document.createElement('div');
        formContainer.classList.add('container'); // Add both container and izdelki-box classes
        formContainer.id = 'editIzdelekContainer';

        formContainer.innerHTML = `
        <div class="modern-form">
            <h2>Uredi izdelek</h2>
            <form id="editKonfiguratorForm" action="info/uredikonfigurator.php" method="POST">
            <label>Uredi Ime</label>
            <input type="text" id="ime" name="ime" value="${konfiguratorName}" required><br><br>
            <div class = "izdelki-box">
            <div class="box upper-left" id="velikostFields">
                <h3>Uredi velikosti</h3>
                ${generateFieldsHTML(konfiguratorVelikost, 'velikost', 'Velikost')}
            </div>

            <div class="box upper-right" id="rezkarjiContainer">
                <h3>Uredi rezkarje</h3>
                ${generateFieldsHTML(konfiguratorRezkarji, 'rezkar', 'Rezkar')}
            </div>

            <div class="box lower-left" id="laserjiContainer">
                <h3>Uredi laserje</h3>
                ${generateFieldsHTML(konfiguratorLaserji, 'laser', 'Laser')}
            </div>

            <div class="box lower-right" id="dodatkiContainer">
                <h3>Uredi dodatke</h3>
                ${generateFieldsHTML(konfiguratorDodatek, 'dodatek', 'Dodatek')}
            </div>
            <input type="hidden" name="konfigurator_id" value="${konfiguratorId}">
            </div>
            <button type="submit" class = "blue-button">Uredi</button>
            <button type="button" class="close-konfigurator-btn red-button" id="nazajIzdelekButton">Zapri</button>
            </form>
        </div>
        <br>
        `;

        // Append the form to the document body
        document.body.appendChild(formContainer);
    });
});

function generateFieldsHTML(dataArray, className) {
    var fieldsHTML = '';
    dataArray.forEach(function(data, index) {
        var labelText;
        var inputValue;
        var idValue;
        // Determine label, input value, and ID based on className
        switch (className) {
            case 'velikost':
                labelText = 'Velikost';
                inputValue = data.velikost;
                idValue = data.id;
                break;
            case 'rezkar':
                labelText = 'Rezkar';
                inputValue = data.ime;
                idValue = data.id;
                break;
            case 'laser':
                labelText = 'Laser';
                inputValue = data.ime;
                idValue = data.id;
                break;
            case 'dodatek':
                labelText = 'Dodatek';
                inputValue = data.ime;
                idValue = data.id;
                break;
            default:
                labelText = 'Label'; // Default label if className doesn't match
                inputValue = '';
                idValue = '';
        }
        fieldsHTML += `
        <div class = "container">
            <div class="${className}" data-id="${idValue}">
                <input type="hidden" name="${className}_id[]" value="${idValue}">
                <label>${labelText}</label>
                <input type="text" name="${className}[]" value="${inputValue}" required>
                <label>Cena</label>
                <input type="number" name="${className}_cena[]" value="${data.cena}" required><br>
            </div>
        </div>
        `;
    });
    return fieldsHTML;
}

function generateFieldsHTMLReadOnly(dataArray, className) {
    var fieldsHTML = '';
    dataArray.forEach(function(data, index) {
        var labelText;
        var inputValue;
        var idValue;
        // Determine label, input value, and ID based on className
        switch (className) {
            case 'velikost':
                labelText = 'Velikost';
                inputValue = data.velikost;
                idValue = data.id;
                break;
            case 'rezkar':
                labelText = 'Rezkar';
                inputValue = data.ime;
                idValue = data.id;
                break;
            case 'laser':
                labelText = 'Laser';
                inputValue = data.ime;
                idValue = data.id;
                break;
            case 'dodatek':
                labelText = 'Dodatek';
                inputValue = data.ime;
                idValue = data.id;
                break;
            default:
                labelText = 'Label'; // Default label if className doesn't match
                inputValue = '';
                idValue = '';
        }
        fieldsHTML += `
            <div class="${className}" data-id="${idValue}">
                <label>${labelText}</label>
                <input type="text" name="${className}" value="${inputValue}" required readonly>
                <label>Cena</label>
                <input type="number" name="${className}_cena[]" value="${data.cena}" required readonly><br>
                <button class="deleteFieldDBBtn red-button" type="button">Odstrani</button><br><br>
            </div>
        `;
    });
    return fieldsHTML;
}

function generateFieldsHTMLEmpty(className) {
    if(className == 'velikost'){
        //add to container with id velikostFields
        var container = document.getElementById('velikostFields');
    }
    else if(className == 'rezkar'){
        //add to container with id rezkarjiContainer
        var container = document.getElementById('rezkarjiContainer');
    }
    else if(className == 'laser'){
        //add to container with id laserjiContainer
        var container = document.getElementById('laserjiContainer');
    }
    else if(className == 'dodatek'){
        //add to container with id dodatkiContainer
        var container = document.getElementById('dodatkiContainer');
    }
    if (container) { // Check if container exists
        var newField = document.createElement('div');
        newField.classList.add(className);
        newField.innerHTML = `
            <label>${className}</label>
            <input type="text" name="${className}[]" required>
            <label>Cena</label>
            <input type="number" name="${className}_cena[]" required>
            <button class="deleteFieldBtn">Odstrani</button><br><br>
        `;
        container.appendChild(newField);

        // Attach event listener to the newly created field for deletion
        newField.querySelector('.deleteFieldBtn').addEventListener('click', deleteField);
    } else {
        console.error('Container element not found.');
    }
}


//if .deleteFieldBtn is clicked, remove the parent element
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteFieldBtn')) {
        // Get the class name of the parent element
        var className = event.target.parentElement.classList[0];
        // Get the ID of the parent element
        var id = event.target.parentElement.getAttribute('data-id');
        // Save data to deletedFields div
        //check if deletedFields div exists
        if(document.getElementById('deletedFields') !== null){
            var deletedFields = document.getElementById('deletedFields');
            deletedFields.innerHTML += `<input type="hidden" name="deletedFields[]" value="${className}_${id}">`;
        }
        event.target.parentElement.remove();
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-konfigurator-fields-btn')) {
        var konfiguratorId = event.target.getAttribute('data-konfigurator-id');
        var konfiguratorName = event.target.getAttribute('data-konfigurator-ime');
        var konfiguratorVelikost = JSON.parse(event.target.getAttribute('data-velikosti'));
        var konfiguratorRezkarji = JSON.parse(event.target.getAttribute('data-rezkarji'));
        var konfiguratorLaserji = JSON.parse(event.target.getAttribute('data-laserji'));
        var konfiguratorDodatek = JSON.parse(event.target.getAttribute('data-dodatki'));

        // Hide #izdelki-container
        document.getElementById('izdelkiContainer').style.display = 'none';

        // Create a new form and if no fields for specific category, display message
        var formContainer = document.createElement('div');
        formContainer.classList.add('container');
        formContainer.id = 'deletePoljaContainer';
        formContainer.innerHTML = `
            <h2>Izbriši polja izdelka</h2>
            <div class="modern-form">
                <form id="deleteKonfiguratorForm" readonly>
                <div class = "izdelki-box">
                <div class="box upper-left">
                    <h3>Velikosti</h3>
                    <div id="velikostFields">
                        ${konfiguratorVelikost.length > 0 ? generateFieldsHTMLReadOnly(konfiguratorVelikost, 'velikost') : 'Ni polj za Velikosti.'}
                    </div>
                </div>

                <div class="box upper-right">
                    <h3>Rezkarji</h3>
                    <div id="rezkarjiContainer">
                        ${konfiguratorRezkarji.length > 0 ? generateFieldsHTMLReadOnly(konfiguratorRezkarji, 'rezkar') : 'Ni polj za Rezkarje.'}
                    </div>
                </div>

                <div class="box lower-left">
                    <h3>Laserji</h3>
                    <div id="laserjiContainer">
                        ${konfiguratorLaserji.length > 0 ? generateFieldsHTMLReadOnly(konfiguratorLaserji, 'laser') : 'Ni polj za Laserje.'}
                    </div>
                </div>

                <div class="box lower-right">
                    <h3>Dodatki</h3>
                    <div id="dodatkiContainer">
                        ${konfiguratorDodatek.length > 0 ? generateFieldsHTMLReadOnly(konfiguratorDodatek, 'dodatek') : 'Ni polj za Dodatke.'}
                    </div>
                </div>
                    <input type="hidden" name="konfigurator_id" value="${konfiguratorId}">
                    <button type="button" class="close-konfigurator-btn red-button" id="nazajIzdelekButton">Zapri</button>
                </div>
                </form>
            </div>
        `;
        // Append the form to the document body
        document.body.appendChild(formContainer);
    }
});


//if .deleteFieldDBBtn button is pressed, close the form
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteFieldDBBtn')) {
        // Save data to deletedFields div
        var id = event.target.parentElement.getAttribute('data-id');
        var className = event.target.parentElement.classList[0];

        // Delete data in the database
        var formData = new FormData();
        formData.append('id', id);
        if(className == 'velikost'){
            formData.append('className', 'velikost');
        }
        else if(className == 'rezkar'){
            formData.append('className', 'rezkarji');
        }
        else if(className == 'laser'){
            formData.append('className', 'laserji');
        }
        else if(className == 'dodatek'){
            formData.append('className', 'dodatki');
        }


        // AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'info/izbrisipolje.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Refresh page
                console.log(xhr.responseText);
                //remove the deleted field from the form
                event.target.parentElement.remove();
                // Reload the page after successful deletion
            } else {
                // Handle error response
                console.error('Form submission failed. Status: ' + xhr.status);
                // You can display an error message to the user here
            }
        };

        xhr.send(formData); // Send the form data
    }
    if (event.target.id === 'nazajIzdelekButton') {
        //check if the form exists
        if (document.getElementById('deletePoljaContainer')) {
            // Remove the form
            document.getElementById('deletePoljaContainer').remove();
            // Show #izdelki-container
            document.getElementById('izdelkiContainer').style.display = 'block';
        }
        if (document.getElementById('editIzdelekContainer')) {
            document.getElementById('editIzdelekContainer').remove();
            document.getElementById('izdelkiContainer').style.display = 'block';
        }
    }
});

//if .add-konfigurator-fields-btn is pressed, show form for adding fields to konfigurator
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-konfigurator-fields-btn')) {
        // Hide #izdelki-container
        document.getElementById('izdelkiContainer').style.display = 'none';
        var konfiguratorId = event.target.getAttribute('data-konfigurator-id');

        // Create a new form
        var formContainer = document.createElement('div');
        formContainer.classList.add('container');
        formContainer.id = 'addPoljaContainer';
        formContainer.innerHTML = `
            <h2>Dodaj polja izdelka</h2><br>
            <div class="modern-form">
                <form id="addKonfiguratorForm" action="info/dodajpolje.php" method="POST">
                <button id="addFieldsVelikostBtn" class = "blueBtn" type = "button">Dodaj več velikosti</button>
                <button id="addFieldsRezkarBtn" class = "yellowBtn" type = "button">Dodaj več rezkarjev</button>
                <button id="addFieldsLaserBtn" class = "greenBtn" type = "button">Dodaj več laserjev</button>
                <button id="addFieldsDodatekBtn" class = "redBtn" type = "button">Dodaj več dodatkov</button>
                <br><br>
                <div class = "izdelki-box">
                <div class="box upper-left">
                    <h3>Velikosti</h3>
                    <div id="velikostAddFields">
                </div>
                    </div>
                    <div class="box upper-right">
                    <h3>Rezkarji</h3>
                    <div id="rezkarjiAddContainer">
                        
                    </div>
                    </div>
                    <div class="box lower-left">
                    <h3>Laserji</h3>
                    <div id="laserjiAddContainer">
                    
                    </div>
                    </div>
                    <div class="box lower-right">
                    <h3>Dodatki</h3>
                    <div id="dodatkiAddContainer">
                        
                    </div>
                    </div>
                    <input type="hidden" name="konfigurator_id" value="${konfiguratorId}">
                    <button type="submit" class = "blue-button">Dodaj</button>
                    <button type="button" class="close-konfigurator-btn red-button" id="nazajIzdelekButton">Zapri</button>
                </form>
            </div>
        `;
        // Append the form to the document body
        document.body.appendChild(formContainer);
    }
    if (event.target.id === 'nazajIzdelekButton') {
        //check if the form exists
        if (document.getElementById('addPoljaContainer')) {
            // Remove the form
            document.getElementById('addPoljaContainer').remove();
            // Show #izdelki-container
            document.getElementById('izdelkiContainer').style.display = 'block';
        }
    }

});
//if 
});