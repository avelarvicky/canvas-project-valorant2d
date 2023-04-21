class Game{
    constructor(player, bomb){
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = player;
        this.bomb = bomb;
        this.intervalId = null;
        this.frames = 0;
    }

    start(){
        this.intervalId = setInterval(this.update,10) // sets the clock speed of the game running at 100fps (1000ms / 10ms)
    }

    update = () => {    
        this.frames++;                                // Counts the frames since the game started
        this.clear();                                 // Clears previous Frame
        this.player.drawBackground()                  // Draws Player and Map
        this.player.drawCharacter()
        //this.bomb.draw()
        //checkWinCondition()
        //checkLoseCondition()
        ctx.fillText("map_x: " + this.player.x, 580, 40);
        ctx.fillText("map_y " + this.player.y, 580, 60);
    }

    stop(){
        clearInterval(this.intervalId);               // clears Interval aka: stops game
    }

    clear(){
        ctx.clearRect(0,0, this.width, this.height); // Clears previous Frame
    }
    
    checkWinCondition(){

    }

    checkLoseCondition(){

    }
}

class Bomb{
    constructor(){
        this.x = 500;
        this.y = 0;

        /*
        const bombImg = new Image();
        bombImg.addEventListener("load", () => {
        this.bombImg = bombImg;});
        bombImg.src = '../textures/spike.png';
        */
    }

    draw(){
        ctx.drawImage(this.bombImg, this.x, this.y, 100, 100)
    }
}
