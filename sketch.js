var play =1;
var end = 0;
var gameState =play;

var score;

var knife;

var fruitGroup;
var alienGroup;

function preload(){
  knifeImage = loadImage('sword.png');
 cutSound=loadSound('knifeSwooshSound.mp3');
  gameOverSound=loadSound('gameover.mp3');
  fruit1=loadImage('fruit1.png')
  fruit2=loadImage('fruit2.png')
  fruit3=loadImage('fruit3.png')
  fruit4=loadImage('fruit4.png')
  alien1=loadImage('alien1.png')
  alien2=loadImage('alien2.png')
}

function setup(){
  createCanvas(600,600);
  
  fruitGroup=new Group();
  alienGroup=new Group();
  
   knife=createSprite(300,300,20,20);
knife.addImage(knifeImage);
  
  score=0;
}


function draw(){
  
  background('orange');
  
 
  
  knife.x=mouseX;
  knife.y=mouseY;
  
  if(gameState===play){
    if(knife.isTouching(fruitGroup)){
    fruitGroup.destroyEach()
      score=score+1;
    cutSound.play()
    }
   
       
      
      spawnFruits();
  spawnAlien();
    
    
    
   if(knife.isTouching(alienGroup)){
    knife.destroy()
    gameOverSound.play();
     gameState=end;
  }
  }
  else if(gameState===end){
    alienGroup.destroyEach();
    fruitGroup.destroyEach();
    textSize(20);
    text("Gameover",300,300);
  }
  drawSprites();
   text('score:'+score,490,49)  
}

function spawnFruits(){
  if(frameCount % 70 === 0){
    var fruit = createSprite(random(100,400),590,20,20);
    fruit.velocityY=-(8+3*score/10)
    
    fruit.scale=0.3;
    
    
     var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;
  }
     fruit.lifetime = 200;
    
    fruitGroup.add(fruit);
  }
}

function spawnAlien(){
  if(frameCount %180===0){
    var alien = createSprite(random(100,400),590,20,20);

    alien.velocityY=-(10+3*score/5)
    
    
    alien.lifetime=200;

alienGroup.add(alien);
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: alien.addImage(alien1);
              break;
      case 2: alien.addImage(alien2);
              break;
      default: break;
      
      

  }
    }
  
}


