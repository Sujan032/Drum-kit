
//for clickable buttons on drums.

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

//for keyboard buttons.
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {


    switch (key) {
        case "z":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "x":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        case "c":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "v":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "b":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "n":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(key){
    var pressEffect=document.querySelector("."+key);
    pressEffect.classList.add("pressed");
    setTimeout(() => {
        pressEffect.classList.remove("pressed"); 
    }, 100);
}