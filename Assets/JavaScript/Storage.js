console.log("Test CONTENT");


var button1 = document.getElementById("access-contrast");

button1.click.body.style.background = "#000000";

    






function dyslexia_enlargeText() {

    var enlargeValue = document.getElementById("access-sizeup").getAttribute("value");
    var textsize = document.getElementById("access-sizeup");

    if (enlargeValue == "off"){

        textLarge();
        textsize.setAttribute("value", "on");

    }  else {

        textNormal();
        textsize.setAttribute("value", "off");

    }  

}   // End of function

function autism_textContrast() {

    var contrastValue = document.getElementById("access-contrast").getAttribute("value");
    var contrast = document.getElementById("access-contrast");

    if (contrastValue == "off"){

        if(!p) {

            display("[!] Error: Parent Missing");
    
        }   else    {
    
            BACKGROUND.document.body.style.background = "#000000";
            BACKGROUND.document.body.style.color = "#FBD46D";
    
        } 

        contrast.setAttribute("value", "on");

    }  else {

        BACKGROUND.document.body.removeAttribute('style');
        contrast.setAttribute("value", "off");

    }  

}   // End of function

function autism_brightness() {

    var brightnessValue = document.getElementById("access-brightness").getAttribute("value");
    var brightness = document.getElementById("access-brightness");

    if (brightnessValue == "off"){

    increaseBrightness();
    brightness.setAttribute("value", "on");

    }  else {

    normalBrightness();
    brightness.setAttribute("value", "off");

    }  

}   // End of function

function blind_readsite() {

    var speakingValue = document.getElementById("access-brightness").getAttribute("value");
    var speaking = document.getElementById("access-brightness");

    if (speakingValue == "off"){

    highlightWords();
    setTimeout(function() { scrollToTop(); }, 3500);
    speaking.setAttribute("value", "on");

    }  else {

    stopSpeak();
    speaking.setAttribute("value", "off");

    }  

}   // End of function

function muted_audio() {

    var audioValue = document.getElementById("access-muted").getAttribute("value");
    var audio = document.getElementById("access-muted");

    if (audioValue == "off"){

    mutePage();
    audio.setAttribute("value", "on");

    }  else {

    unmutePage();
    audio.setAttribute("value", "off");

    }  

}   // End of function

function mobility_largerButtons() {

    var largerButtons_value = document.getElementById("access-buttons").getAttribute("value");
    var buttons = document.getElementById("access-buttons");

    if (largerButtons_value == "off"){

    largerButtons();
    buttons.setAttribute("value", "on");

    }  else {

    normalButtons();
    buttons.setAttribute("value", "off");

    }  

}   // End of function