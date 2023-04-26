class Game {
  // game logic
  constructor(background, player, bomb, mapShadows, hudUi, enemy1) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.player = player;
    this.bomb = bomb;
    this.background = background;
    this.mapShadows = mapShadows;
    this.hudUi = hudUi;
    this.enemy1 = enemy1;
    this.intervalId = null;
    this.enemiesAnimation = null;
    this.frames = 0;
    this.timer = 6000;
  }

  start() {
    this.intervalId = setInterval(this.update, 10); // sets the clock speed of the game running at 100fps (1000ms / 10ms)
    this.enemiesAnimation = setInterval(this.enemiesUpdate, 250);
    spikePlanted.play();
    spikeMain.play();
  }

  update = () => {
    this.frames++; // Counts the frames since the game started
    this.clear(); // Clears previous Frame
    this.background.draw(); // draws the background
    this.player.draw();
    this.bomb.draw();
    this.enemy1.draw();
    this.mapShadows.draw();
    this.checkWinCondition();
    this.loseCondition();
    
    this.hudUi.draw();
    this.countdown();
  };

  enemiesUpdate = () => {
    this.enemy1Move();
  } 

  stop() {
    clearInterval(this.intervalId); // clears Interval aka: stops game
  }

  countdown() {
    this.timer--;
    let seconds = Math.floor(this.timer / 100);

    if (this.timer >= 0) {
      if (seconds < 10){
        ctx.fillStyle = "white";
        ctx.font = "25px Arial";
        ctx.fillText(`0:0${seconds}`, 377, 40);
      }
      else {
        ctx.fillStyle = "white";
        ctx.font = "25px Arial";
        ctx.fillText(`0:${seconds}`, 377, 40);
      }
    }
  }

  clear() {
    ctx.clearRect(0, 0, this.width, this.height); // clears previous Frame
  }

  // player movement
  moveUp() {
    let a = playerPosition[0];
    let b = playerPosition[1];

    if (collisionMap[a-1][b] === 2){
      this.bomb.y += 40;
      this.background.y += 40;
      this.mapShadows.y += 40,
      this.enemy1.y += 40,
      playerPosition[0] -=1;
      console.log(a,b)
    } else { 
    console.log("collision up");
    }
  }

  moveDown() {
    let a = playerPosition[0];
    let b = playerPosition[1];

    if(collisionMap[a+1][b] === 2){
      this.bomb.y -= 40;
      this.background.y -= 40;
      this.mapShadows.y -= 40,
      this.enemy1.y -= 40,
      playerPosition[0] +=1;
    } else {
      console.log("collision down");
    }
  }

  moveLeft() {
    let a = playerPosition[0];
    let b = playerPosition[1];

    if(collisionMap[a][b-1] === 2 ){
    this.bomb.x += 40;
    this.background.x += 40;
    this.mapShadows.x += 40,
    this.enemy1.x += 40,
    playerPosition[1] -=1;
    } else {
      console.log("collision left");
    }
  }

  moveRight() {
    let a = playerPosition[0];
    let b = playerPosition[1];

    if(collisionMap[a][b+1] === 2 ){
      this.bomb.x -= 40;
      this.background.x -= 40;
      this.mapShadows.x -= 40,
      this.enemy1.x -= 40,
      playerPosition[1] +=1;
    } else {
      console.log("collision right");
    }
    console.log(a,b)
  }

  // enemy movement
  enemy1Move() {

    let a = enemy1Position[0];
    let b = enemy1Position[1];

    
    if (collisionMap[a-1][b] === 2) {
      this.enemy1.y -= 40;
      enemy1Position[0]-=1;
      console.log(a,b)
    } 
    
    /*
    if (direction === 'down'){
      if (collisionMap[a+1][b] === 2) {
        this.enemy1.y += 40;
        enemy1Position[0] += 1;
      } else {
        this.enemy1Move('up')
      }
    } else if( direction === 'up'){
      if (collisionMap[a-1][b] === 2) { // limite cima
        this.enemy1.y -= 40;
        enemy1Position[0] -= 1;
      }
      this.enemy1Move('down') 
    }*/
  }

  // game logic  

  checkWinCondition() {
    let a = playerPosition[0];
    let b = playerPosition[1];

    if (collisionMap[a][b-1] === 3 ||
        collisionMap[a][b+1] === 3 ||
        collisionMap[a+1][b] === 3 ||
        collisionMap[a-1][b] === 3) {
          console.log("bomb here")

          ctx.fillStyle = "black";
          ctx.font = "30px Arial";
          ctx.fillText("You win", 400 - 30, 250);
    }
  }

  loseCondition() {
    if (this.timer <= 0) {
      ctx.fillStyle = "black";
      ctx.font = "30px Arial";
      ctx.fillText("Game Over", 400 - 30, 250);
    }
  }
}
