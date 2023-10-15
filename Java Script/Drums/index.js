// var audio = new Audio("sounds/tom-3.mp3");
// audio.play();
for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);
    
        buttonanimation(buttonInnerHTML);    
    });
}
document.addEventListener("keydown", function(event) {    //event is like a variable which holds all the information about the keypressed also (Unlike the deprecated keypress event, the keydown event is fired for all keys, regardless of whether they produce a character value.)
    
    makesound(event.key);
    
    buttonanimation(event.key);
});

function makesound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonanimation(currentkey) {
    
    var activebutton = document.querySelector("."+ currentkey);

    activebutton.classList.add("pressed");

    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100); 
    
}

//The arrow function () => is a shorthand way of writing a function. It is often used in cases where a function takes a single argument and returns a single value. It has a shorter syntax and is more concise compared to the function keyword