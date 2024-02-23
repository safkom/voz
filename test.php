<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Configurator Options</title>
<style>
    .option-button {
        display: block;
        margin-bottom: 10px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
</style>
</head>
<body>

<h1>Configurator Options</h1>

<h2>Sizes</h2>
<div id="size-options"></div>

<script>
// Function to generate size option buttons


// Function to fetch sizes data from the database based on machine name
function fetchConfigurations(machine) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'podatki.php?machine=' + machine, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var sizesData = JSON.parse(xhr.responseText);
            generateSizeOptionButtons(sizesData);
        } else {
            console.error('Failed to fetch sizes data');
        }
    };
    xhr.onerror = function() {
        console.error('Failed to fetch sizes data');
    };
    xhr.send();
}

// Call the function with the machine name
fetchSizes('standard'); // Change 'standard' to the desired machine name

// Dummy selectOption function for demonstration
function selectOption(group, button) {
    alert('Selected ' + group + ': ' + button.textContent);
}
</script>

</body>
</html>
