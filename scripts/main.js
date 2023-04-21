const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Player();                                    // Creates an instance of the Car/Player class
const bomb = new Bomb();
const game = new Game(player,bomb);                                 // Creates an instance of the Game class 

window.onload = () => {

  document.addEventListener("keydown", (e) => {                // when Enter Key is clicked run startGame() function.
    if (e.code === "Enter"){
      game.start()                                             // starts running the game
    }            
  });

  document.addEventListener("keydown", (e) => {                // creates event listener for key press to move the car
    switch (e.code) {
      case "ArrowUp":
        player.moveUp()
      break;
      case "ArrowLeft":
        player.moveLeft()
      break;
      case "ArrowRight":
        player.moveRight()
      break;
      case "ArrowDown":
        player.moveDown()
      break;
    }
  });
}

