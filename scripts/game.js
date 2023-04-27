class Game {
  // game logic
  constructor(background, player, bomb, mapShadows, hudUi, enemy1, win, loss) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.player = player;
    this.bomb = bomb;
    this.background = background;
    this.mapShadows = mapShadows;
    this.loss = loss;
    this.win = win;
    this.hudUi = hudUi;
    this.enemy1 = enemy1;
    this.intervalId = null;
    this.enemiesAnimation = null;
    this.frames = 0;
    this.playerPos = [2,21];
    this.enemy1Pos = [15,17];
    this.timer = 6000;
  }

  start() {
    this.intervalId = setInterval(this.update, 100); // sets the clock speed of the game running at 100fps (1000ms / 10ms)
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

    this.hudUi.draw();
    this.countdown();

    this.checkWinCondition();
    this.loseCondition();
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
    let a = this.playerPos[0];
    let b = this.playerPos[1];

    if (collisionMap[a-1][b] === 2){
      this.bomb.y += 40;
      this.background.y += 40;
      this.mapShadows.y += 40;
      this.enemy1.y += 40;
      this.playerPos[0] -=1;
    }
  }

  moveDown() {
    let a = this.playerPos[0];
    let b = this.playerPos[1];
    console.log(a, b);

    if(collisionMap[a+1][b] === 2){
      console.log(a,b);
      this.bomb.y -= 40;
      this.background.y -= 40;
      this.mapShadows.y -= 40;
      this.enemy1.y -= 40;
      this.playerPos[0] +=1;
    } 
  }

  moveLeft() {
    let a = this.playerPos[0];
    let b = this.playerPos[1];

    if(collisionMap[a][b-1] === 2 ){
    this.bomb.x += 40;
    this.background.x += 40;
    this.mapShadows.x += 40;
    this.enemy1.x += 40;
    this.playerPos[1] -=1;
    } 
  }

  moveRight() {
    let a = this.playerPos[0];
    let b = this.playerPos[1];

    if(collisionMap[a][b+1] === 2 ){
      this.bomb.x -= 40;
      this.background.x -= 40;
      this.mapShadows.x -= 40;
      this.enemy1.x -= 40;
      this.playerPos[1] +=1;
    } 
  }

  // enemy movement
  enemy1Move() {
      let a = this.enemy1Pos[0];
      let b = this.enemy1Pos[1];
  
      if(a === 11 && b === 16){
        this.enemy1.y += 40;
        this.enemy1Pos[0] += 1;
      } else if (collisionMap[a-1][b] === 2) {
        this.enemy1.y -= 40;
        this.enemy1Pos[0] -= 1;
      } 
    }

  // game logic  
  checkWinCondition() {
    let a = this.playerPos[0];
    let b = this.playerPos[1];

    if (collisionMap[a][b-1] === 3 ||
        collisionMap[a][b+1] === 3 ||
        collisionMap[a+1][b] === 3 ||
        collisionMap[a-1][b] === 3) {

          ctx.fillStyle = "black";
          ctx.font = "30px Arial";
          this.win.draw();
    }
  }

  loseCondition() {
    if (this.timer <= 0) {
      ctx.fillStyle = "black";
      ctx.font = "30px Arial";
      this.loss.draw();
    }
  }
}

