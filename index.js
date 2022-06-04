var buttons = document.querySelectorAll(".drum");

document.querySelector(".w").style.backgroundImage = 'url(images/tom1.png)';
document.querySelector(".a").style.backgroundImage = 'url(images/tom2.png)';
document.querySelector(".s").style.backgroundImage = 'url(images/tom3.png)';
document.querySelector(".d").style.backgroundImage = 'url(images/tom4.png)';
document.querySelector(".j").style.backgroundImage = 'url(images/snare.png)';
document.querySelector(".k").style.backgroundImage = 'url(images/crash.png)';
document.querySelector(".l").style.backgroundImage = 'url(images/kick.png)';

const makeSound = event =>
{
    var audio = false;
    switch(event)
    {
        case "w" : audio = new Audio("sounds/tom-1.mp3"); break;
        case "a" : audio = new Audio("sounds/tom-2.mp3"); break;
        case "s" : audio = new Audio("sounds/tom-3.mp3"); break;
        case "d" : audio = new Audio("sounds/tom-4.mp3"); break;
        case "j" : audio = new Audio("sounds/snare.mp3"); break;
        case "k" : audio = new Audio("sounds/crash.mp3"); break;
        case "l" : audio = new Audio("sounds/kick-bass.mp3"); break;
        default: console.log(event + " key was presssed"); break;
    }
    if(audio){
        audio.play();
    }
};

const buttonAnimation = event =>
{
    if(event === "w" || event === "a" || event === "s" || event === "d" || event === "j" || event === "k" || event === "l"){
        let activebutton = document.querySelector("." + event);
        activebutton.classList.add("pressed");
        setTimeout(() => {activebutton.classList.remove("pressed");}, 100);
    }

};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        makeSound(button.innerHTML);
        buttonAnimation(button.innerHTML);
    });
});

document.addEventListener("keydown", event => {
    makeSound(event.key);
    buttonAnimation(event.key);
});