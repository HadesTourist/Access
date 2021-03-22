// Popup.js - contains event listeners for button presses 


//////////////////////////////////////////////////// Page/Text contrast  //////////////////////////////////////////////////////////////////////////


// Disability element - event listener for contrast button
document.getElementById("access_contrast").addEventListener('click', function(){

    autism_textContrast();

});

function autism_textContrast() {

    var contrastValue = document.getElementById("access_contrast").getAttribute("value");
    var contrast = document.getElementById("access_contrast");

    if (contrastValue == "off"){

        console.log("Test - text-contrast - ON");
        contrast.setAttribute("value", "on");

        chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

            chrome.tabs.sendMessage(tabs[0].id, { name: 'constrast_on' });
        
        });

    }  else {

        console.log("Test - text-contrast - OFF");
        contrast.setAttribute("value", "off");
        
        chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

            chrome.tabs.sendMessage(tabs[0].id, { name: 'constrast_off' });
        
        });

    }  

}   // End of function


////////////////////////////////////////////////////// Enlarge text ////////////////////////////////////////////////////////////////////


// Disability element - event listener for alter text size button
document.getElementById("access_sizeup").addEventListener('click', function(){

    dyslexia_enlargeText();

});

function dyslexia_enlargeText() {

    var enlargeValue = document.getElementById("access_sizeup").getAttribute("value");
    var textsize = document.getElementById("access_sizeup");

    if (enlargeValue == "off"){

        console.log("Test - size-up - ON");
        textsize.setAttribute("value", "on");

        chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

            chrome.tabs.sendMessage(tabs[0].id, { name: 'size_on' });
        
        });

    }  else {

        console.log("Test - size-up - OFF");
        textsize.setAttribute("value", "off");

        chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

            chrome.tabs.sendMessage(tabs[0].id, { name: 'size_off' });
        
        });

    }  

}   // End of function


////////////////////////////////////////////////// Screens brightness //////////////////////////////////////////////////////////////////


// Disability element - event listener for brightness button
document.getElementById("access_brightness").addEventListener('click', function(){

    autism_brightness();

});

function autism_brightness() {

    var brightnessValue = document.getElementById("access_brightness").getAttribute("value");
    var brightness = document.getElementById("access_brightness");

    if (brightnessValue == "off"){

    console.log("Test - brightness - ON");
    brightness.setAttribute("value", "on");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'brightness_on' });
    
    });

    }  else {

    console.log("Test - brightness - OFF");
    brightness.setAttribute("value", "off");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'brightness_off' });
    
    });

    }  

}   // End of function


////////////////////////////////////////////////// Speak - Read website ///////////////////////////////////////////////////////////////////////


// Disability element - event listener for access page reader button
document.getElementById("access_speak").addEventListener('click', function(){

    blind_readsite();

});

function blind_readsite() {

    var speakingValue = document.getElementById("access_speak").getAttribute("value");
    var speaking = document.getElementById("access_speak");

    if (speakingValue == "off"){

    console.log("Test - speak - ON");
    speaking.setAttribute("value", "on");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'speak_on' });
    
    });

    }  else {

    console.log("Test - speak - OFF");
    speaking.setAttribute("value", "off");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'speak_off' });
    
    });

    }  

}   // End of function


/////////////////////////////////////////////////// Mute all audio //////////////////////////////////////////////////////////////////////////////////


// Disability element - event listener for muted website button
document.getElementById("access_muted").addEventListener('click', function(){

    muted_audio();

});

function muted_audio() {

    var audioValue = document.getElementById("access_muted").getAttribute("value");
    var audio = document.getElementById("access_muted");

    if (audioValue == "off"){

    console.log("Test - muted - ON");
    audio.setAttribute("value", "on");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'mute_on' });
    
    });

    }  else {

    console.log("Test - muted - OFF");
    audio.setAttribute("value", "off");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'mute_off' });
    
    });

    }  

}   // End of function


///////////////////////////////////////////////// Larger buttons //////////////////////////////////////////////////////////////////////////////


// Disability element - event listener for button size changer button
document.getElementById("access_buttons").addEventListener('click', function(){

    mobility_largerButtons();

});

function mobility_largerButtons() {

    var largerButtons_value = document.getElementById("access_buttons").getAttribute("value");
    var buttons = document.getElementById("access_buttons");

    if (largerButtons_value == "off"){

    console.log("Test - buttons larger - ON");
    buttons.setAttribute("value", "on");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'button_on' });
    
    });

    }  else {

    console.log("Test - buttons larger - OFF");
    buttons.setAttribute("value", "off");

    chrome.tabs.query( {active: true, currentWindow: true}, tabs => {

        chrome.tabs.sendMessage(tabs[0].id, { name: 'button_off' });
    
    });

    }  

}   // End of function