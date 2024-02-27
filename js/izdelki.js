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
        formContainer.classList.add('container');
        formContainer.id = 'editIzdelekContainer';
        formContainer.innerHTML = `
            <h2>Uredi izdelek</h2>
            <div class="modern-form">
                <form id="editKonfiguratorForm" action="info/uredikonfigurator.php" method="POST">
                    <label>Uredi Ime</label>
                    <input type="text" id="ime" name="ime" value="${konfiguratorName}" required><br><br>

                    <h3>Uredi velikosti</h3>
                    <div id="velikostFields">
                        ${generateFieldsHTML(konfiguratorVelikost, 'velikost', 'Velikost')}
                    </div>

                    <h3>Uredi rezkarje</h3>
                    <div id="rezkarjiContainer">
                        ${generateFieldsHTML(konfiguratorRezkarji, 'rezkar', 'Rezkar')}
                    </div>

                    <h3>Uredi laserje</h3>
                    <div id="laserjiContainer">
                        ${generateFieldsHTML(konfiguratorLaserji, 'laser', 'Laser')}
                    </div>

                    <h3>Uredi dodatke</h3>
                    <div id="dodatkiContainer">
                        ${generateFieldsHTML(konfiguratorDodatek, 'dodatek', 'Dodatek')}
                    </div>
                    <input type="hidden" name="konfigurator_id" value="${konfiguratorId}">

                    <button type="submit">Uredi</button>
                    <button type="button" class="close-konfigurator-btn" id="nazajIzdelekButton">Zapri</button>
                </form>
            </div>

            <br>
            <div id="deletedFields"></div>
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
            <div class="${className}" data-id="${idValue}">
                <input type="hidden" name="${className}_id[]" value="${idValue}">
                <label>${labelText}</label>
                <input type="text" name="${className}[]" value="${inputValue}" required>
                <label>Cena</label>
                <input type="number" name="${className}_cena[]" value="${data.cena}" required><br>
                <button class="deleteFieldBtn" type="button">Odstrani</button><br><br>
            </div>
        `;
    });
    return fieldsHTML;
}


//if .deleteFieldBtn is clicked, remove the parent element
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteFieldBtn')) {
        // Get the class name of the parent element
        var className = event.target.parentElement.classList[0];
        // Get the ID of the parent element
        var id = event.target.parentElement.getAttribute('data-id');
        // Save data to deletedFields div
        var deletedFields = document.getElementById('deletedFields');
        deletedFields.innerHTML += `<input type="hidden" name="deletedFields[]" value="${className}_${id}">`;
        event.target.parentElement.remove();
    }
});



});
