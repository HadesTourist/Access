
var p = window.parent;

////////////////////////////////////////////////// Speak - Read website ///////////////////////////////////////////////////////////////////////

function speak() {

    var msg = new SpeechSynthesisUtterance();

    if ('speechSynthesis' in window) {

        msg.text = "Speech is supported on this site"
        speechSynthesis.speak(msg);

    }   else    {

        msg.text = "Sorry, speech is not supported on this site"
        speechSynthesis.speak(msg);

    }

    msg.text = p.document.querySelector('body').textContent;
    speechSynthesis.speak(msg);
    
}

function highlightWords() {

    var msg = new SpeechSynthesisUtterance();

    if ('speechSynthesis' in window) {

        msg.text = "Speech is supported on this site"
        speechSynthesis.speak(msg);

    }   else    {

        msg.text = "Sorry, speech is not supported on this site"
        speechSynthesis.speak(msg);

    }

    var utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-UK';
    utterance.rate = 0.7;

    var textContainer = p.document.querySelector('.alertBox');
    textContainer.classList.toggle('active');

    var text = p.document.querySelector('body').textContent;
    var textarea = p.document.querySelector('.access-speaktext');
    textarea.value = text;

    utterance.onboundary = onboundaryHandler;
    utterance.text = text;
    speechSynthesis.speak(utterance);

    function onboundaryHandler(event){
        var textarea = p.document.querySelector('.access-speaktext');
        var value = p.document.querySelector('body').textContent;
        var index = event.charIndex;
        var word = getWordAt(value, index);
        var anchorPosition = getWordStart(value, index);
        var activePosition = anchorPosition + word.length;
        
        textarea.focus();
        
        if (textarea.setSelectionRange) {
           textarea.setSelectionRange(anchorPosition, activePosition);
        }
        else {
           var range = textarea.createTextRange();
           range.collapse(true);
           range.moveEnd('character', activePosition);
           range.moveStart('character', anchorPosition);
           range.select();
        }
    };

    function getWordAt(str, pos) {
        // Perform type conversions.
        str = String(str);
        pos = Number(pos) >>> 0;
    
        // Search for the word's beginning and end.
        var left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);
    
        // The last word in the string is a special case.
        if (right < 0) {
            return str.slice(left);
        }
        
        // Return the word, using the located bounds to extract it from the string.
        return str.slice(left, right + pos);
    }

    function getWordStart(str, pos) {
        str = String(str);
        pos = Number(pos) >>> 0;

        // Search for the word's beginning
        var start = str.slice(0, pos + 1).search(/\S+$/);
        return start;
    }

}

function scrollToTop() {

    var textarea = p.document.querySelector('.access-speaktext');
    textarea.scrollTo(0, 0);

}

function stopSpeak() {

    if(speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    var textContainer = p.document.querySelector('.alertBox');
    textContainer.classList.toggle('active');

}

////////////////////////////////////////////////////// Enlarge text ////////////////////////////////////////////////////////////////////

function textLarge() {

        p.document.body.style.fontSize = "2em";
        p.document.querySelector('h2').style.fontSize = "1.5em";
        p.document.querySelector('a').style.fontSize = "1em";

}

function textNormal() {

    p.document.body.removeAttribute('style');
    p.document.querySelector('h2').removeAttribute('style');
    p.document.querySelector('a').removeAttribute('style');

}

//////////////////////////////////////////////////// Page/Text contrast  //////////////////////////////////////////////////////////////////////////

function textContrast() {

    if(!p) {

        display("[!] Error: Parent Missing");

    }   else    {

        document.body.style.background = "#000000";
        document.body.style.color = "#FBD46D";

    } 

}

function contrastNormal() {

    p.document.body.removeAttribute('style');

}

////////////////////////////////////////////////// Screens brightness //////////////////////////////////////////////////////////////////

function increaseBrightness() {

    if(!p) {

        display("[!] Error: Parent Missing");

    }   else    {

        p.document.body.style.filter = "brightness(50%)";
        p.document.body.style.background = "#888888";

    } 

}

function normalBrightness() {

    p.document.body.removeAttribute('style');

}

/////////////////////////////////////////////////// Mute all audio //////////////////////////////////////////////////////////////////////////////////

function muteMe(elem) {

    elem.muted = true;
    elem.pause();

}

function mutePage() {

    var elems = p.document.querySelectorAll("video, audio");

    [].forEach.call(elems, function(elem) { muteMe(elem); });

}

function unmuteMe(elem) {

    elem.muted = false;
    elem.play();

}

function unmutePage() {

    var elems = p.document.querySelectorAll("video, audio");

    [].forEach.call(elems, function(elem) { unmuteMe(elem); });

}

///////////////////////////////////////////////// Larger buttons //////////////////////////////////////////////////////////////////////////////

function largerButtons() {

    p.document.querySelector("input").style.width = "200px";
    p.document.querySelector("input").style.height = "100px";

}

function normalButtons() {

    p.document.querySelector("input").removeAttribute('style');

}
