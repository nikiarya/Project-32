const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var ground; 
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var launcher; 

var polygon, polygonImage; 
var score, bg; 

function preload() { 
  polygonImage = loadImage("polygon.png"); 
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world; 

  ground = new Ground(400,300,150,10);
  b1 = new Box(350,280,30,30); 
  b2 = new Box(380,280,30,30); 
  b3 = new Box(410,280,30,30); 
  b4= new Box(440,280,30,30); 
  b5 = new Box(370,250,30,30); 
  b6 = new Box(400,250,30,30); 
  b7 = new Box(430,250,30,30); 
  b8 = new Box(390,220,30,30); 
  b9 = new Box(420,220,30,30); 
  b10 = new Box(410,190,30,30); 

  polygon = Bodies.rectangle(100,300,50,50); 
  World.add(world,polygon); 

  launcher = new SlingShot(this.polygon,{x:100,y:350});

  score = 0; 
}

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display(); 
  fill("pink"); 
  b1.display();
  b2.display(); 
  b3.display(); 
  b4.display(); 
  b5.display(); 
  b6.display(); 
  b7.display(); 
  b8.display(); 
  b9.display(); 
  b10.display(); 

  imageMode(CENTER); 
  image(polygonImage,polygon.position.x,polygon.position.y,50,50); 

  launcher.display(); 
  
  nostroke(); 
  textSize(35); 
  fill("white"); 
  text("SCORE : ", +score, 750,40); 
  
  b1.score(); 
  b2.score(); 
  b3.score(); 
  b4.score(); 
  b5.score(); 
  b6.score(); 
  b7.score(); 
  b8.score(); 
  b9.score(); 
  b10.score(); 

}

function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed() {
  if(keyCode = 32) {
    Matter.Body.setPosition(polygon, {x:200,y:50}); 
    slingshot.attach(polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}