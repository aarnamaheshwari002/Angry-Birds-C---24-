const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, object;
var box1;

function setup(){ 
  createCanvas(700, 600);
  engine = Engine.create();
  world = engine.world; 
 box1 = new box(500, 400, 50, 50);
 box2 = new box(550, 400, 50, 50);
 box3 = new box(500, 300, 50, 50);
 box4 = new box(550, 300, 50, 50);
 box5 = new box(490, 200, 50, 50);
 Ground = new ground(350, height, 700, 50);
 pig1 = new Pig(525, 400);
 pig2 = new Pig(525, 300);
 bird = new Bird(100, 100);
 log1 = new log(520, 350, 270, PI/2);
 log2 = new log(520, 250, 270, PI/2);
 log3 = new log(565, 200, 150, -(PI/4.5));
 log4 = new log(490, 200, 150, PI/4.5);
} 

function draw(){ 
  background("lightgreen"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  Ground.display();
  pig1.display();
  pig2.display();
  bird.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();

}