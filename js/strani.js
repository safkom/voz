//if create-page-btn is pressed
document.getElementById("create-page-btn").addEventListener("click", function() {
    //show create-page-form
    document.getElementById("create-page-form").style.display = "block";
    //hide create-page-btn
    document.getElementById("straniContainer").style.display = "none";
});

var numberInOrder = 0;
function getNumberInOrder(){
    numberInOrder++;
    return numberInOrder;
}

// Function to add text paragraph
function addText() {
    var textSection = document.createElement("section");
    textSection.classList.add("text-section");
    //add attrubute order
    textSection.setAttribute("order", getNumberInOrder());

    var paragraph = document.createElement("textarea");
    paragraph.setAttribute("rows", "4");
    paragraph.setAttribute("cols", "50");
    paragraph.setAttribute("placeholder", "Vnesite besedilo"); // Add placeholder
    
    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("red-button");
    deleteButton.style.marginLeft = "10px"; // Add margin-left
    deleteButton.onclick = function() {
        textSection.remove(); // Remove the entire section when delete button is clicked
    };

    // Add space <br> before section
    var br = document.createElement("br");
    textSection.appendChild(br);
    var naslov = document.createElement("h3");
    naslov.textContent = "Odstavek";
    textSection.appendChild(naslov);
    
    textSection.appendChild(paragraph);
    textSection.appendChild(deleteButton); // Append delete button to the section

    document.getElementById("stran").appendChild(textSection);
}




function addImage() {
    var textSection = document.createElement("section");
    textSection.classList.add("text-section");
    textSection.setAttribute("order", getNumberInOrder());

    var br = document.createElement("br");
    textSection.appendChild(br);
    var naslov = document.createElement("h3");
    naslov.textContent = "Slika:";
    textSection.appendChild(naslov);

    var fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", "image/*"); // Allow only image files
    fileInput.setAttribute("id", "ImgInput");
    fileInput.classList.add("image-upload");
    fileInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var image = document.createElement("img");
                image.setAttribute("src", e.target.result);
                image.setAttribute("alt", "Uploaded Image");
                image.classList.add("img-fluid");
                image.style.maxWidth = "200px"; // Limit maximum width
                image.style.height = "auto"; // Maintain aspect ratio
                textSection.appendChild(br);
                textSection.appendChild(image);
            };
            reader.readAsDataURL(file);
        }
    });

    textSection.appendChild(fileInput);

    

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("red-button");
    deleteButton.onclick = function() {
        textSection.remove(); // Remove the entire section when delete button is clicked
    };
    textSection.appendChild(deleteButton); // Append delete button under the input

    document.getElementById("stran").appendChild(textSection);
}

function deleteStran(id) {
    var formData = new FormData();
    formData.append("id", id);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'info/deletepage.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.cookie = "obvestilo=Stran uspešno izbrisana.; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
            location.reload();
            console.log(xhr.responseText);
            // Handle success response here
        } else {
            document.cookie = "obvestilo=Prišlo je do napake! Poskusite znova.; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
            location.reload();
            console.error('Page deletion failed. Status: ' + xhr.status);
            // Handle error response here
        }
    };
    xhr.onerror = function() {
        document.cookie = "obvestilo=Prišlo je do napake! Poskusite znova.; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
            location.reload();
        console.error('Page deletion failed. Connection error.');
    };
    xhr.send(formData);
}





// Function to generate the webpage
function generateWebPage() {
    //get all text-sections from #stran
    var sections = document.querySelectorAll("#stran .text-section");
    //from all inputs that are text, get their value and put them in an array
    var orderedValues = Array.from(sections).map(function(section) {
        var input = section.querySelector("input[type='text']");
        if (section.querySelector("input[type='text']")) {
            return input.value;
        }
        if (section.querySelector("img")){
            return section.querySelector("img");
        }
        else{
            return "";
        }
    });
    //filter out empty strings
    // generete page
    var preview = document.getElementById("predogled");
    preview.innerHTML = "";
    preview.innerHTML = "<h1>Predogled strani</h1>";
    orderedValues.forEach(function(value) {
        if (value instanceof HTMLImageElement) {
            preview.appendChild(value);
        } else {
            var paragraph = document.createElement("p");
            paragraph.textContent = value;
            preview.appendChild(paragraph);
        }
    });

}

function SavePage() {
    var sections = document.querySelectorAll("#stran .text-section");
    var formData = new FormData();
    var naslov = document.getElementById("naslov").value;
    var konfigurator_id = document.getElementById("konfigurator").value;
    var lowerCaseAndNoSpaces = naslov.toLowerCase().replace(/\s/g, '');

    var slike = [];
    var htmlCode = "<div class='container stran' id = '"+ lowerCaseAndNoSpaces +"'><header class='text-center'><h1 class='naslovi'>" + naslov + "</h1></header><div class='container'><section class='text-center'><br><br>";

    sections.forEach(function(section) {
        var input = section.querySelector("textarea");
        if (input) {
            formData.append("text", input.value);
            htmlCode += "<section class = 'text-section'><p>" + input.value + "</p> </section>";
        }
        var img = section.querySelector("img");
        if (img) {
            var file = img.src; // This should be changed
            //also look for id of the image
            var fileInput = section.querySelector("input#ImgInput[type='file']");
            if (fileInput.files.length > 0) {
                file = fileInput.files[0]; // Use the file from the input element
                formData.append("slika[]", file); // Append the file to FormData
                slike.push(file); // Push the file to the array
            }
            htmlCode += "<img src='img/" + file.name + "' class='img-fluid' style='max-width: 20%; height: auto;'>"; // Use file name instead of src
        }
    });
    var stranImage = document.getElementById("stranImg");
    var slika_html;
    if (stranImage) {
        var fileInput = document.getElementById("stranImg");
        if (fileInput.files.length > 0) {
            var file = fileInput.files[0]; // Use the file from the input element
            formData.append("slika[]", file); // Append the file to FormData
            slike.push(file); // Push the file to the array

            // Get the file name
            var fileName = file.name;
            
            // Set the background URL to the file name
            slika_html = "<div class='image-container' id = '"+ lowerCaseAndNoSpaces +"' style='background: url(\"img/" + fileName + "\")'><div class='fade-overlay'></div></div>";
        }
    }
    else{
        alert("Dodajte sliko za stran!");
    }

    htmlCode += "</section></div></div>";

    formData.append("naslov", naslov);
    formData.append("htmlCode", htmlCode);
    formData.append("konfigurator_id", konfigurator_id);
    formData.append("slikaStrani", slika_html);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'info/uploadimage.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Proceed with inserting HTML into the database
            insertHTML(formData);
            console.log(xhr.responseText);
        } else {
            console.error('Image upload failed. Status: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        console.error('Image upload failed. Connection error.');
    };
    xhr.send(formData);
}

function insertHTML(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'info/addstran.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            // Handle success response here
            location.reload();
        } else {
            console.error('HTML insertion failed. Status: ' + xhr.status);
            // Handle error response here
        }
    };
    xhr.onerror = function() {
        console.error('HTML insertion failed. Connection error.');
    };
    xhr.send(formData);
}


function insertHTML(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'info/addstran.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            // Handle success response here
            location.reload();
        } else {
            console.error('HTML insertion failed. Status: ' + xhr.status);
            // Handle error response here
        }
    };
    xhr.onerror = function() {
        console.error('HTML insertion failed. Connection error.');
    };
    xhr.send(formData);
}
