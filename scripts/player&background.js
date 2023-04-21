class Player {
    constructor() {
      this.map_Size_X = 1000;
      this.map_Size_Y = 1000;
      this.x = 200;
      this.y = 10;

      // Assigning player character
      const characterImg = new Image();
      characterImg.addEventListener("load", () => {
      this.characterImg = characterImg;});
      characterImg.src = '../textures/debug.png';
      // Assigning Background Image
      const backgroundImg = new Image();
      backgroundImg.addEventListener("load", () => {
      this.backgroundImg = backgroundImg;});
      backgroundImg.src = '../textures/mapa_teste.jpg';
    }
  
    moveLeft(){
      this.x += 10;
    }

    moveUp(){
        this.y += 10; 
    }

    moveDown(){
        this.y -= 10;
    }
  
    moveRight(){
      this.x -= 10;
    }

    drawBackground(){
        ctx.drawImage(this.backgroundImg, this.x, this.y, this.map_Size_X, this.map_Size_Y);
    }
  
    drawCharacter(){
      ctx.drawImage(this.characterImg, ((canvas.width/2)-40), ((canvas.height/2)-40), 3, 3); // era 80 80Draws the actual car image
    }
}