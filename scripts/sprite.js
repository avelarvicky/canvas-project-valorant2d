class Sprite {
    constructor(x, y, image) {
      this.x = x; // initial position x
      this.y = y; // initial position y
      this.image = image
    }

    draw(){
      ctx.drawImage(this.image, this.x, this.y); 
    }

    /*logPos() {
      ctx.fillStyle = "orange";
      ctx.fillText("x: " + this.x, this.x, this.y-20);
      ctx.fillText("y " + this.y, this.x, this.y-10);
    } */
}

// Assigning player Image
const characterImg = new Image();
characterImg.addEventListener("load", () => {
this.characterImg = characterImg;});
characterImg.src = '../textures/sage_temp.png';

// Assigning background Image
const backgroundImg = new Image();
backgroundImg.addEventListener("load", () => {
this.backgroundImg = backgroundImg;});
backgroundImg.src = '../textures/mapa_teste.jpg';

// Assigning bomb Image
const bombImg = new Image();
bombImg.addEventListener("load", () => {
this.bombImg = bombImg;});
bombImg.src = '../textures/spike.png';