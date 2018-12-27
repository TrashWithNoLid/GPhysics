class PhysicsObject extends BaseObject {

    constructor(xMeters, yMeters, widthMeters, heightMeters, massKg) {
        super(
            Conversion.metersToPixels(xMeters), 
            Conversion.metersToPixels(yMeters), 
            Conversion.metersToPixels(widthMeters), 
            Conversion.metersToPixels(heightMeters));

        //Define PhysicsObject properties
        this.force = 0; //TODO: Have force and acceleration passed in constructor
        //this.acceleration = 0;
        //this.velocity = 0;

        this.xVelocity = 0;
        this.yVelocity = 0;
        this.mass = massKg;

        this.pX = xMeters;
        this.pY = yMeters;
        this.pWidth = widthMeters;
        this.pHeight = heightMeters;

        this.totalAcceleration = 0;

        this.xAcceleration = 0;
        this.yAcceleration = 0;
    }

    setXAcceleration(newAccel) {
        this.xAcceleration = newAccel;
        this.totalAcceleration = this.calcTotalAcceleration();
        console.log(this.totalAcceleration);
    }

    setYAcceleration(newAccel) {
        this.yAcceleration = newAccel;
        this.totalAcceleration = this.calcTotalAcceleration();
        console.log(this.totalAcceleration);
    }

    calcTotalAcceleration() {
        return Math.sqrt(Math.pow(this.xAcceleration, 2) + Math.pow(this.yAcceleration,2));
    }

    updatePosition(time) { //Time since acceleration changed
        this.xVelocity = this.xAcceleration * time; //Velocity is meters per second (m/s)
        this.yVelocity = this.yAcceleration * time;

        this.pX = this.xVelocity * time;
        this.pY = this.yVelocity * time;
    }

    drawObject(context) {
        this.x = Conversion.metersToPixels(this.pX);
        this.y = Conversion.metersToPixels(this.pY);

        super.drawObject(context);
    }
}