class Game {
  // game logic
  constructor(background, player, boundaries, bomb) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.player = player;
    this.bomb = bomb;
    this.background = background;
    this.boundaries = boundaries;
    this.intervalId = null;
    this.frames = 0;
    this.timer = 6000;
  }

  start() {
    this.intervalId = setInterval(this.update, 10); // sets the clock speed of the game running at 100fps (1000ms / 10ms)
    spikePlanted.play();
    spikeMain.play();
  }

  update = () => {
    this.frames++; // Counts the frames since the game started
    this.clear(); // Clears previous Frame

    //console.log(this.collisions());
    this.background.draw(); // draws the background

    this.boundaries.forEach((boundary) => {
      boundary.draw(); // draws each boundary
      //boundary.logPos(); // log position of
    });

    this.player.draw();
    //this.player.logPos();
    this.bomb.draw();

    //checkWinCondition()
    this.loseCondition();
    this.countdown();
  };

  stop() {
    clearInterval(this.intervalId); // clears Interval aka: stops game
  }

  countdown() {
    this.timer--;
    let seconds = Math.floor(this.timer / 100);

    if (this.timer >= 0) 
    {   ctx.fillStyle = "black";
        ctx.font = "40px Cutive Mono";
        ctx.fillText(`${seconds}`, 380, 30);
    }
  }

  clear() {
    ctx.clearRect(0, 0, this.width, this.height); // clears previous Frame
  }

  collisions() {
    for (let i = 0; i < boundaries.length; i++) {
      return boundaries[i].y >= 250;
      /*&& //top
        boundaries[i].x <= 400 && //left
        boundaries[i].x + 40 >= 360 //right */
    }
  }

  moveUp() {
    this.boundaries.forEach((boundary) => {
      // for each element of array,
      boundary.y += 10;
    });
    this.bomb.y += 10;
    this.background.y += 10;
  }

  moveDown() {
    this.boundaries.forEach((boundary) => {
      boundary.y -= 10;
    });
    this.bomb.y -= 10;
    this.background.y -= 10;
  }

  moveLeft() {
    this.boundaries.forEach((boundary) => {
      boundary.x += 10;
    });
    this.bomb.x += 10;
    this.background.x += 10;
  }

  moveRight() {
    this.boundaries.forEach((boundary) => {
      boundary.x -= 10;
    });
    this.bomb.x -= 10;
    this.background.x -= 10;
  }

  checkWinCondition() {}

  loseCondition() {
    if (this.timer <= 0) {
      ctx.fillStyle = "black";
      ctx.font = "30px Cutive Mono"
      ctx.fillText("Game Over", 400-30, 250);
    }
  }
}

const map = [
  [
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ], //20 x 22
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-",
  ],
  [
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ],
];

class Boundary {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
  }

  /*logPos() {
    ctx.fillStyle = "black";
    ctx.fillText("x: " + this.x, this.x, this.y + 10);
    ctx.fillText("y: " + this.y, this.x, this.y);
  }*/

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const boundaries = [];

for (let i = 0; i < map.length; i++) {
  // loop each row of the map (index i of map array)
  for (let j = 0; j < map[i].length; j++) {
    // loop each column (index j of arrays within map array)
    if (map[i][j] === "-") {
      // if loop finds '-'
      boundaries.push(
        new Boundary( // pushes a boundary class object to the boundaries array
          40 * i + 250, // defines x - 40 is the width of the boundary, plus 250 due to the offset of the image
          40 * j - 180 // defines x - 40 is the width of the boundary, plus 250 due to the offset of the image
        )
      );
    }
  }
}
