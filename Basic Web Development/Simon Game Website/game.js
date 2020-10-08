var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = true;
var buttonColors = ["red", "blue", "green", "yellow"];

// start the game
$(document).keypress(function(event){
    if(started){
        nextSequence();
    }
    started = false;

})

// Next sequence
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //Animate button
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+randomChosenColor, play(randomChosenColor));
    level++;
    $("#level-title").text("Level "+level);
    userClickedPattern = [];

}

// check answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            console.log("succes");
            setTimeout(nextSequence, 1000);
        }
    }
    else{
        play("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        startOver();
    }
}

function startOver(){
    started = true;
    level = 0;
    gamePattern = [];
}

                            // Fungsi fungsi 

// clicked button
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $("#"+userChosenColor, play(userChosenColor));
    checkAnswer(userClickedPattern.length-1);
});

// Animate clicked button
function animatePress(currentColor){
    $(".btn").addClass("pressed");
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    }, 100);
}

// Play sound
function play(sound){
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}
 