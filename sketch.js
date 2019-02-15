
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, world;
var b1,b2,b3, floor;
//let floorWidth, floorHeight;
//let boxy, boxw;

function setup() {
    let canvas = createCanvas(800, 600);
    engine = Engine.create(canvas.elt);
    world = engine.world;

//rectMode(RADIUS);
    floor = new Box(1, (height)-90, width*2, 40, {
        isStatic: true,
        restitution: 0

    });

     floor.draw();

       console.log(floor);
    
    b1 = new Box(width / 2, 20, 60, 50, {
        restitution: 1.2,
    });

    b2 = new Box(100, 20, 50, 50, {
        restitution: 1.5,
    });

  /*   b3 = new Box(90, -40, 40, 40, {
        restitution: 1.1,
    });
 */


    Engine.run(engine); //better than engine.update(engine) in draw, run in background faster!

}

function draw() {
    background(30);
  
    floor.draw();

    b1.draw();
    b2.draw();
   // b3.draw();
}