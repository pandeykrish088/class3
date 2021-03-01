class Form {

constructor() {
this.input = createInput("Name");
this.button = createButton('play');
this.greeting = createElement('h3');
}

display() {
var title = createElement('h2');
title.html("Online/Car Racing");
title.position(displayWidth/2,30);


this.input.position(displayWidth/2-45,displayHeight/2-75);

this.button.position(displayWidth/2+45,displayHeight/2);

this.button.mousePressed(function() {
this.input.hide();
this.button.hide();

player.name = this.input.value();
player.update();
player.updateCount(playerCount);

this.greeting.html("Welcome to our Car racing game " + player.name);
this.greeting.position(displayWidth/2-75,displayHeight/4);

}
)
}
}