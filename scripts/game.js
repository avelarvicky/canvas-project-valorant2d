class Game{
    constructor(background, player, boundaries, bomb){
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = player;
        this.bomb = bomb
        this.background = background;
        this.boundaries = boundaries;
        this.intervalId = null;
        this.frames = 0;
    }

    start(){
        this.intervalId = setInterval(this.update,10) // sets the clock speed of the game running at 100fps (1000ms / 10ms)
    }

    update = () => {    
        this.frames++;                                // Counts the frames since the game started
        this.clear();                                 // Clears previous Frame
        this.background.draw();

        this.boundaries.forEach(boundary => {
            boundary.draw()
        })
        this.player.draw();
        this.bomb.draw();
        this.logPlayerPos();
        //this.bomb.draw()
        //checkWinCondition()
        //checkLoseCondition()
    }

    logPlayerPos(){
        ctx.fillStyle = "black";
        ctx.fillText("x: " + this.background.x, 5, 10);
        ctx.fillText("y " + this.background.y, 5, 20);
    }

    stop(){
        clearInterval(this.intervalId);               // clears Interval aka: stops game
    }

    clear(){
        ctx.clearRect(0,0, this.width, this.height);  // Clears previous Frame
    }
    
    moveUp(){
        this.boundaries.forEach(boundary => {
            boundary.y += 10;
        })
        this.bomb.y += 10
        this.background.y += 10
    }

    moveDown(){
        this.boundaries.forEach(boundary => {
            boundary.y -= 10;
        })
        this.bomb.y -= 10
        this.background.y -= 10
    }

    moveLeft(){
        this.boundaries.forEach(boundary => {
            boundary.x += 10;
        })
        this.bomb.x += 10
        this.background.x += 10;
    }

    moveRight(){
        this.boundaries.forEach(boundary => {
            boundary.x -= 10;
        })
        this.bomb.x -= 10
        this.background.x -= 10;
    }

    checkWinCondition(){

    }

    checkLoseCondition(){

    }
}

const map = [
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",], //20 x 22
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","-","-","-","-","-","-","-","-","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","-","-","-","-","-","-","-","-","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","-","-","-","-","-","-","-","-","-","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-",],
    ["-","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-",],
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",],
];
  
class Boundary {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 40
        this.height = 40
    }

    draw(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const boundaries = [];

map.forEach((row, i) => {
    row.forEach((symbol, j) =>{ 
        if(symbol === "-"){
            boundaries.push(new Boundary(
                40*i + 250,
                40*j -180
            ))
        }
    })
})

