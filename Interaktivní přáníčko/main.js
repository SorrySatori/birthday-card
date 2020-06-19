
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let screenWidth = 1280;
let screenHeight = 650;
let jazykven = false;
let warpaint = false;
let kapustnak = false;
let psychokiller = false;
let bezcelisti = false;

let width = 50;

class GameCharacter {
    constructor(x, y, width, height, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.maxSpeed = 4;
    }
    moveVertically() {
       
        this.y += this.speedY;

        if( this.x < 0 ) {             // left
            this.speedX *= -1;
            }
            if(this.x > screenWidth) {  // right
            this.speedX *= -1;
            
            }
            if(this.y < 0 ) {        //top
            this.speedY *= -1;
            }
            if(this.y > screenHeight) {    //bottom
                this.speedY *= -1;

            }
        
    };

    moveHorizontally() {
        this.x += this.speedX;
    }
}

let matej = new GameCharacter(550, 160,  width, width, "black", 0, 0);
let jirifony = new GameCharacter(1050, 90,  width, width, "black", 0, 0);
let metelkapavlica = new GameCharacter(-1050, 250, width, width, "rgb(0, 255, 0)", 0, 0);
let kormanik = new GameCharacter(1080, 400, width, width, "rgb(0, 255, 0)", 0, 0);
let hedvicka = new GameCharacter(125, 193, width, width, "rgb(0, 255, 0)", 0, 0);
let dana = new GameCharacter(800, -60, width, width, "rgb(0, 255, 0)", 0, 0);
let jazyk = new GameCharacter(282, 295, width, width, "rgb(0, 255, 0)", 0, 0);
let matejpaint = new GameCharacter(550, 160,  width, width, "black", 0, 0);
let kapustnaci = new GameCharacter(1050, 90,  width, width, "black", 0, 0);
let pila = new GameCharacter(920, -60, width, width, "rgb(0, 255, 0)", 0, 0);
let celist = new GameCharacter(1102, 520, width, width, "rgb(0, 255, 0)", 0, 0);

let sprites = {};

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

  let blastsound = new sound("sounds/blast.wav");
  let pigs = new sound("sounds/pigs.wav");
  let chainsaw = new sound("sounds/chainsaw.wav");
  let evil = new sound("sounds/evil.wav");
  let snake = new sound("sounds/snake.wav");
  let metal = new sound("sounds/metal.wav");
  let famfara = new sound("sounds/famfara.wav");






function initInput() {
    document.addEventListener("mousemove", mousemoved);
    document.addEventListener("mousedown", mouseclicked);
  }
  initInput();

  function zapniKapustnaky() {
      return ctx.drawImage(sprites.kapustnaci, kapustnaci.x, kapustnaci.y);
  }


  function vyplazniJazyk() {
    return ctx.drawImage(sprites.jazyk, jazyk.x, jazyk.y);

  }

  function nahodWarpaint() {
    return ctx.drawImage(sprites.matejpaint, matejpaint.x, matejpaint.y);

  }
  function vyndejPilu() {
    return ctx.drawImage(sprites.pila, pila.x, pila.y);
   

  }





  function mouseclicked(evt) {
    if (mouseX < 200 && mouseY > 250) {  
    metelkapavlica.speedX += metelkapavlica.maxSpeed; 
    famfara.play();
    } 
    if ((mouseX>150 && mouseX<280) && (mouseY>180 && mouseY<300)) {
        jazykven = true;
        vyplazniJazyk();
        snake.play();
    }
    if ((mouseX>600 && mouseX<700) && (mouseY>180 && mouseY<270)) {
        warpaint = true;
        nahodWarpaint();
        metal.play();
    }
    if ((mouseX>1000 && mouseX<1200) && (mouseY>50 && mouseY<400)) {
        kapustnak = true;
        zapniKapustnaky();
        pigs.play();
    }
    if ((mouseX>800 && mouseX<1000) && (mouseY>0 && mouseY<200)) {
        psychokiller = true;
        vyndejPilu();
        evil.play();
        chainsaw.play();
    }
    if ((mouseX>1000 && mouseX<1200) && (mouseY>450 && mouseY<600)) {  
    celist.speedX -= celist.maxSpeed; 
    celist.speedY -= celist.maxSpeed; 
    bezcelisti = true;
    blastsound.play();
    }
    
    else return;
  }


  function mousemoved(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

 mouseX = evt.clientX - rect.left - root.scrollLeft;
 mouseY = evt.clientY - rect.top - root.scrollTop;

    

    var tileOverCol = Math.floor(mouseX / 50);
    var tileOverRow = Math.floor(mouseY / 50);    
  }

  
let loadSprites = function() {
    sprites.metelkapavlica = new Image();
    sprites.metelkapavlica.src = 'images/metelkapavlica2.png';

    sprites.background = new Image();
    sprites.background.src = 'images/pozadi.jpg';

    sprites.matej = new Image();
    sprites.matej.src = 'images/matej.png';

    sprites.jirifony = new Image();
    sprites.jirifony.src = 'images/jirifony.png';

    sprites.kormanik = new Image();
    sprites.kormanik.src = 'images/kormanik_bezcelisti.png';

    sprites.hedvicka = new Image();
    sprites.hedvicka.src = 'images/hedvicka.png';

    sprites.dana = new Image();
    sprites.dana.src = 'images/dana.png';

    sprites.jazyk = new Image();
    sprites.jazyk.src = 'images/jazyk.png';

    sprites.matejpaint = new Image();
    sprites.matejpaint.src = 'images/matejpaint.png';

    sprites.kapustnaci = new Image();
    sprites.kapustnaci.src = 'images/kapustnaci.png';

    sprites.pila = new Image();
    sprites.pila.src = 'images/pila.png';

    sprites.celist = new Image();
    sprites.celist.src = 'images/celist.png';
 
}

let draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    ctx.drawImage(sprites.background, 0, 0)
    ctx.drawImage(sprites.metelkapavlica, metelkapavlica.x, metelkapavlica.y);
    ctx.drawImage(sprites.matej, matej.x, matej.y);
    ctx.drawImage(sprites.jirifony, jirifony.x, jirifony.y);
    ctx.drawImage(sprites.kormanik, kormanik.x, kormanik.y);
    ctx.drawImage(sprites.hedvicka, hedvicka.x, hedvicka.y);
    ctx.drawImage(sprites.dana, dana.x, dana.y);
    ctx.drawImage(sprites.celist, celist.x, celist.y);


    if(jazykven) {
    ctx.drawImage(sprites.jazyk, jazyk.x, jazyk.y);
    } 
    if(warpaint) {
        ctx.drawImage(sprites.matejpaint, matejpaint.x, matejpaint.y);
        } 
        if(kapustnak) {
            ctx.drawImage(sprites.kapustnaci, kapustnaci.x, kapustnaci.y);

        }
        if(psychokiller) {
            ctx.drawImage(sprites.pila, pila.x, pila.y);

        }

        else return;



}



let update = function() {
    
    metelkapavlica.moveHorizontally();
    vyplazniJazyk();
    nahodWarpaint();
    celist.moveHorizontally();
    celist.moveVertically();
}

let step = function() {
    update();
    draw();
    window.requestAnimationFrame(step)
}

loadSprites();
step();