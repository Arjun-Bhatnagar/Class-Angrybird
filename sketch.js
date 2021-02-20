const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,590,70,70);
    box2 = new Box(900,590,70,70);
    pig1 = new Pig(800,590)
    log1 = new log(800,510,PI/2,300)
    pig2 = new Pig(800,460)
    box3 = new Box(700,460,70,70)
    box4 = new Box(900,460,70,70)
    log2 = new log(800,390,PI/2,300)
    box5 = new Box(800,320,70,70)
    ground = new Ground(600,height,1200,20)
    log3 = new log(750,300,PI/7,150)
    log4 = new log(850,300,-PI/7,150)
    bird1 = new Bird(10,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display()
    log1.display()
    pig2.display()
    box3.display()
    box4.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird1.display()
    ground.display();
}