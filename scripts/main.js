console.log('hello vi and p')

const canvas = document.getElementById("canvas"); //canvas
const ctx = canvas.getContext("2d"); //2d

const player = new Sprite(360, 210, characterImg); // creates new object for the characterimg        
const background = new Sprite(250, -180, backgroundImg); // creates new object for the backgroundimg    
const bomb = new Sprite(360, 430, bombImg); // creates new object for the bomnimg
const spikePlanted = new Audio("../textures/spike-planted.mp3")
const spikeMain = new Audio("../textures/spike-main.m4a")

const game = new Game(background, player, boundaries, bomb);                 // Creates an instance of the Game

window.onload = () => {
  document.addEventListener("keydown", (e) => {
    // when Enter Key is clicked run startGame() function.
    if (e.code === "Enter") {
      game.start(); // starts running the game
    }
  });

  document.addEventListener("keydown", (e) => {                // creates event listener for key press to move the car
    switch (e.key) {
      case "ArrowUp":
        game.moveUp()
      break;
      case "ArrowLeft":
        game.moveLeft()
      break;
      case "ArrowRight":
        game.moveRight()
      break;
      case "ArrowDown":
        game.moveDown()
      break;
    }
  });
}

/* Keys
const htmlUp = document.getElementById("up-bttn");
const htmlDown = document.getElementById("down-bttn");
const htmlLeft = document.getElementById("left-bttn");
const htmlRight = document.getElementById("right-bttn");
*/
