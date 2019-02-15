
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, world;
var b, floor;
let floorWidth, floorHeight;
let boxy, boxw;

function setup() {
    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;
     // add a box
    floorHeight = 50;
    floorWidth = width;

    boxw = 40, boxy = 50;
    
    b = Bodies.rectangle((width / 2), 10, boxw, boxy, {
        restitution: 1
    });
    floor = Bodies.rectangle(100, height-60, floorWidth, floorHeight, {
        isStatic: true,
        chamfer: { radius: 10 }
    });

    World.add(world, floor);
    World.add(world, b);

    Engine.run(engine); //better than engine.update(engine) in draw, run in background faster!

    //console.log(b);
}

function draw() {
    background(0);
  //  Engine.update(engine)
    
    rect(floor.position.x, floor.position.y, floorWidth, floorHeight);
    rect(b.position.x, b.position.y, boxw, boxy);


    
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