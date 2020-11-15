var canvas, backgroundImg, gameState = 0, playerCount, form, game, player, commonDatabase;


function setup() {
  database = firebase.database();
  canvas = createCanvas(400, 400);

  game = new Game()
  game.getState()

  game.start()

}

function draw() {
  background("white");


  drawSprites();

}


