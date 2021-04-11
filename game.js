$(document).ready(function(){

var level = 0;

$(document).keydown(function(){
if (level === 0)
{
$("h1").text("Level "+level);
nextSequence();
}
});

var userClickedPattern=[];
var gamePattern=[];

$("div.btn").on("click",function(){
userClickedPattern.push($(this).attr("Id"));
playSound($(this).attr("Id"));
animatePress($(this).attr("Id"));

checkAnswer(level);

});

var randomNumber;
var buttonColors = ["red","blue","green","yellow"];

function nextSequence()
{
randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColors[randomNumber];
gamePattern.push(randomChosenColour);
$("div#"+randomChosenColour).fadeOut(100).fadeIn(100);

switch(randomChosenColour)
{
case "red":
var audio = new Audio('sounds/red.mp3');
audio.play();
break;
case "blue":
var audio = new Audio('sounds/blue.mp3');
audio.play();
break;
case "green":
var audio = new Audio('sounds/green.mp3');
audio.play();
break;
case "yellow":
var audio = new Audio('sounds/yellow.mp3');
audio.play();
break;
default:
console.log(randomChosenColour);
}

level = level + 1;
$("h1").text("Level "+level);
}

function playSound(name){
switch(name)
{
case "red":
var audio = new Audio('sounds/red.mp3');
audio.play();
break;
case "blue":
var audio = new Audio('sounds/blue.mp3');
audio.play();
break;
case "green":
var audio = new Audio('sounds/green.mp3');
audio.play();
break;
case "yellow":
var audio = new Audio('sounds/yellow.mp3');
audio.play();
break;
default:
console.log(randomChosenColour);
}
}

function animatePress(currentColour){
$(this).addClass("pressed");
setTimeout(function(){
$(this).removeClass("pressed");
},
100);
}

function checkAnswer(currentLevel) {
var count = 0;
var check = 0;
while (count < userClickedPattern.length)
{
if (userClickedPattern[count] === gamePattern[count]) 
{
console.log(userClickedPattern[count]);
console.log(gamePattern[count]);
check = check + 1;
}
count = count + 1;
}
console.log(check);
console.log(count);
console.log(currentLevel);
console.log(userClickedPattern);
console.log(gamePattern);

if(check === count)
{
if(userClickedPattern.length === gamePattern.length){
userClickedPattern = [];
setTimeout(function() {
    nextSequence()
}, 1000);
}
}
else
{
$("body").addClass("game-over");
setTimeout(function() {
    $("body").removeClass("game-over")
}, 200);
var audio = new Audio('sounds/wrong.mp3');
audio.play();
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}
}

function startOver(){
level = 0;
userClickedPattern = [];
gamePattern = [];
}
});

