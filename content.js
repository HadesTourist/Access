chrome.runtime.onMessage.addListener((request, sender, resp) => {

    // Constrast
    if (request.name == 'constrast_on')
    {

        document.body.style.background = "#000000";
        document.body.style.color = "#FBD46D";

    }
    else if (request.name == "constrast_off")
    {

        document.body.removeAttribute('style');

    }

    // Text size
    if (request.name == "size_on")
    {

        document.body.style.fontSize = "2em";
        document.querySelector('h2').style.fontSize = "1.5em";
        document.querySelector('a').style.fontSize = "1em";

    }
    else if (request.name == "size_off")
    {

        document.body.removeAttribute('style');
        document.querySelector('h2').removeAttribute('style');
        document.querySelector('a').removeAttribute('style');

    }

    // Brightness
    if (request.name == "brightness_on")
    {

        document.body.style.filter = "brightness(50%)";
        document.body.style.background = "#888888";

    }
    else if (request.name == "brightness_off")
    {

        document.body.removeAttribute('style');

    }

    // Speak
    if (request.name == "speak_on")
    {

        var msg = new SpeechSynthesisUtterance();

        if ('speechSynthesis' in window) {
    
            msg.text = "Speech is supported on this site"
            speechSynthesis.speak(msg);
    
        }   else    {
    
            msg.text = "Sorry, speech is not supported on this site"
            speechSynthesis.speak(msg);
    
        }
    
        msg.text = document.querySelector('body').textContent;
        speechSynthesis.speak(msg);

    }
    else if (request.name == "speak_off")
    {

        if(speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
    
        var textContainer = p.document.querySelector('.alertBox');
        textContainer.classList.toggle('active');

    }

    // Mute
    if (request.name == "mute_on")
    {

        var elems = document.querySelectorAll("video, audio");

        [].forEach.call(elems, function(elem) { muteMe(elem); });

    }
    else if (request.name = "mute_off")
    {

        var elems = document.querySelectorAll("video, audio");

        [].forEach.call(elems, function(elem) { unmuteMe(elem); });

    }

    // Buttons
    if (request.name == "button_on")
    {

        document.querySelector("input").style.width = "200px";
        document.querySelector("input").style.height = "100px";

    }
    else if (request.name == "button_off")
    {

        document.querySelector("input").removeAttribute('style');

    }
    

});

function muteMe(elem) {

    elem.muted = true;
    elem.pause();

}

function unmuteMe(elem) {

    elem.muted = false;
    elem.play();

}