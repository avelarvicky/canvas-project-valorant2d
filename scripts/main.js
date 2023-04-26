console.log('hello vi and p')

const canvas = document.getElementById("canvas"); //canvas
const ctx = canvas.getContext("2d"); //2d

const buttonL = document.querySelector('.left-bttn') //buttons Left
const buttonR = document.querySelector('.right-bttn') //buttons
const buttonU = document.querySelector('.up-bttn') //buttons
const buttonD = document.querySelector('.down-bttn') //buttons 
     
const background = new Sprite(-480, 130, backgroundImg); // creates new object for the backgroundimg
const mapShadows = new Sprite(-480, 130, backgroundShadows); // creates new object for the backgroundShadows
const hudUi= new Sprite(0,0, hudImg); // creates new object for the Hud Img

const spikePlanted = new Audio("../textures/spike-planted.mp3");
const spikeMain = new Audio("../textures/spike-main.m4a");

const bomb = new Sprite(-400, 652, bombImg); // creates new object for the bomnimg

const player = new Sprite(360, 210, characterImg); // creates new object for the characterimg

const win = new Sprite(0,0, winImg); // creates new object for the win condition
const loss = new Sprite(0,0, lossImg); // creates new object for the loss condition

const enemy1 = new Sprite(200, 730, enemy1Img);    // creates new object for the enemy1

// ' '  = wall
// 2    = chao
// 3    = bomba
// 4    = enemy 

const game = new Game(background, player, bomb, mapShadows, hudUi, enemy1, win, loss);                 // Creates an instance of the Game

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
        game.moveUp();
        buttonPress(buttonU)
      break;
      case "ArrowLeft":
        game.moveLeft();
        buttonPress(buttonL);
      break;
      case "ArrowRight":
        game.moveRight();
        buttonPress(buttonR);
      break;
      case "ArrowDown":
        game.moveDown();
        buttonPress(buttonD);
      break;
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowUp":
        buttonDepress(buttonU)
      break;
      case "ArrowLeft":
        buttonDepress(buttonL);
      break;
      case "ArrowRight":
        buttonDepress(buttonR);
      break;
      case "ArrowDown":
        buttonDepress(buttonD);
      break;
    }
  });
}

function buttonPress(button) {  
  button.classList.remove("button-style-Depressed");
  button.classList.add("button-style-Pressed");
}

function buttonDepress(button) {
  button.classList.remove("button-style-Pressed");
  button.classList.add("button-style-Depressed");
}
