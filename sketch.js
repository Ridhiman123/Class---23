
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1,box2;
var ground;
var engine,world;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,300,70,100);
  box2 = new Box(240,100,70,70);
  ground = new Ground(200,380,400,10);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  box1.display(); 
  box2.display();
  ground.display();
}