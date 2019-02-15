class Box {
    constructor(x, y, w, h, obj) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, obj);

        World.add(world, this.body);

    }

    draw() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rect(0,0, this.w, this.h);
        pop();
    }

}
