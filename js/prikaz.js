var konfigurator;

function ShowPage(divname, konfigurator_id) {
    var divs = document.getElementsByClassName("stran");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === divname) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }

    var divs = document.getElementsByClassName("image-container");
    var imageDiv = divname;
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === imageDiv) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
    if(konfigurator_id !== 0){
        var divs = document.getElementsByClassName("price");
        for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "block";
        }
        fetchConfigurations(konfigurator_id);
    }
    window.scrollTo(0,0);
}

function zacetek() {
    var divname = "zacetek";

    // Toggle the visibility of 'stran' divs
    var divs = document.getElementsByClassName("stran");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === divname) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }

    // Toggle the visibility of 'image-container' divs
    var imageDivs = document.getElementsByClassName("image-container");
    for (var i = 0; i < imageDivs.length; i++) {
        if (imageDivs[i].id === divname) {
            imageDivs[i].style.display = "block";
        } else {
            imageDivs[i].style.display = "none";
        }
    }

    // Hide all 'price' divs
    var priceDivs = document.getElementsByClassName("price");
    for (var i = 0; i < priceDivs.length; i++) {
        priceDivs[i].style.display = "none";
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Get the current URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var strani = urlParams.get('stran');

    // Only trigger the click if the current 'stran' value is not equal to 'zacetek'
    if (strani !== 'zacetek') {
        const gumb = document.getElementById(strani ? strani.toLowerCase() : "zacetek");
        if (gumb) {
            gumb.click();
        }
    }
}

function zacetekStran() {
    var divname = "zacetek";

    // Toggle the visibility of 'stran' divs
    var divs = document.getElementsByClassName("stran");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === divname) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }

    // Toggle the visibility of 'image-container' divs
    var imageDivs = document.getElementsByClassName("image-container");
    for (var i = 0; i < imageDivs.length; i++) {
        if (imageDivs[i].id === divname) {
            imageDivs[i].style.display = "block";
        } else {
            imageDivs[i].style.display = "none";
        }
    }

    // Hide all 'price' divs
    var priceDivs = document.getElementsByClassName("price");
    for (var i = 0; i < priceDivs.length; i++) {
        priceDivs[i].style.display = "none";
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}








