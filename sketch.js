var gameState = 0;
var playerCount;
var form,player,game;
var database;
var car1,car2,car3,car4,cars;
var allPlayers;

function setup(){
createCanvas(displayWidth-30,displayHeight-30);
database = firebase.database()

game = new Game();
game.getState();
game.start();
}

function draw(){

}

