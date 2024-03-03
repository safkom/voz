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

function zacetek(){
    var divname = "zacetek";
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
    // hide div cenik
    var divs = document.getElementsByClassName("price");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    window.scrollTo(0,0);
}







