
		//Main Logic: listening to key pressed or button clicked
// Add eventListener to button if clicked
$(".drum").click(handleClick);

// Add eventListener key pressed to entire page
$(document).keypress(getKey);



// button click function
function handleClick(){
    var key = this.innerHTML;
    playSound(key);
    buttonPressed(key);
}

// key pressed
function getKey(event){
    var key = event.key;
    playSound(key);
    buttonPressed(key);
}

// playing specific sound
function playSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
        break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
        break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
        break;
        case "k":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
        break;
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;
    
        default:
            // alert("salah pencet gan");
            break;
    }
}

//Animater pressed
function buttonPressed(key){
    $("." + key).addClass("pressed");

    setTimeout(
        function(){
            $("." + key).removeClass("pressed");
        }, 100
    );
    
}
