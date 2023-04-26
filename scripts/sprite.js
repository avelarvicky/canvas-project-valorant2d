class Sprite {
  constructor(x, y, image) {
    this.x = x; // initial position x
    this.y = y; // initial position y
    this.image = image;
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y); 
  }

  logPos(){
    ctx.fillStyle = "black"
    ctx.fillText("x: " + this.x, 580, 40);
    ctx.fillText("y: " + this.y, 580, 60);
  }
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
backgroundImg.src = '../textures/ValorantBreeze2D.png';

// Assigning background Shadows Image
const backgroundShadows = new Image();
backgroundShadows.addEventListener("load", () => {
this.backgroundShadows = backgroundShadows;});
backgroundShadows.src = '../textures/ValorantBreeze2D_Shadows.png';

// Assigning Hud
const hudImg = new Image();
hudImg.addEventListener("load", () => {
this.hudImg = hudImg;});
hudImg.src = '../textures/hud.png';

// Assigning bomb Image
const bombImg = new Image();
bombImg.addEventListener("load", () => {
this.bombImg = bombImg;});
bombImg.src = '../textures/spike.png';