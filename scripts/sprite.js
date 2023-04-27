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

// Assigning Win Image
const winImg = new Image();
winImg.addEventListener("load", () => {
this.winImg = winImg;});
winImg.src = '../textures/Win.png';

// Assigning Loss Image
const lossImg = new Image();
lossImg.addEventListener("load", () => {
this.lossImg = lossImg;});
lossImg.src = '../textures/loss.png';


// Assigning enemies Image 

//E 1
const enemy1Img = new Image();
enemy1Img.addEventListener("load", () => {
this.enemy1Img = enemy1Img;})
enemy1Img.src = '../textures/enemy1.png'

//E 2
const enemy2Img = new Image();
enemy2Img.addEventListener("load", () => {
this.enemy2Img = enemy2Img;})
enemy2Img.src = '../textures/enemy2.png'

//E 3
const enemy3Img = new Image();
enemy3Img.addEventListener("load", () => {
this.enemy3Img = enemy3Img;})
enemy3Img.src = '../textures/enemy3.png'