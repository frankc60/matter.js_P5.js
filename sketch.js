
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, world;
var b, floor;
let floorWidth, floorHeight;

function setup() {
    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;
     // add a box
    floorHeight = 50;
    floorWidth = width;
    
    b = Bodies.rectangle((width / 2), 10, 50, 50);
    floor = Bodies.rectangle((50), height-20, floorWidth, floorHeight, {
        isStatic: true,
        chamfer: { radius: 10 }
    });

    World.add(world, floor);

    World.add(world, b);

    Engine.run(engine); //better than engine.update(engine) in draw, run in background faster!


}

function draw() {
    background(0);
  //  Engine.update(engine)
    
    rect(floor.position.x, floor.position.y, floorWidth, floorHeight);
    rect(b.position.x, b.position.y, 50, 50);
    
   /*  
    World.add(world,
        Bodies.circle(310, 40, 30, { isStatic: false })
    );

    World.add(world, [
        rect(10, 10, 20, 30),
        rect(40, 80, 20, 10),

        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]); */
}