document.querySelector(".button").addEventListener("click", play);

function play(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 +".png");
    document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 +".png");

    if(randomNumber1 > randomNumber2){
        //1 menang
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        //2 menang
        document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
    }
    else{
        //draw
        document.querySelector("h1").innerHTML = "Draw!";
    }

    setTimeout(function(){
        document.querySelector("h1").innerHTML = "Play Me!"
    }, 2500)
}

