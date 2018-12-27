class PhysicsObject extends BaseObject {
    constructor(xMeters, yMeters, widthMeters, heightMeters, massKg) {
        super(
            Conversion.metersToPixels(xMeters), 
            Conversion.metersToPixels(yMeters), 
            Conversion.metersToPixels(widthMeters), 
            Conversion.metersToPixels(heightMeters));

        //Define PhysicsObject properties
        this.force = 0; //TODO: Have force and acceleration passed in constructor
        this.acceleration = 0;
        this.velocity = 0;
        this.mass = massKg;

        this.pX = xMeters;
        this.pY = yMeters;
        this.pWidth = widthMeters;
        this.pHeight = heightMeters;
    }

    setAcceleration(metersPerSecondSquared) { //Sets the acceleration for the object (m/s^2)
        this.acceleration = metersPerSecondSquared;
        this.force = this.acceleration * this.mass;
    }

    setForce(newtons) { //Sets the force for the object (N)
        this.force = newtons;
        this.acceleration = this.force / this.mass;
    }

    updatePosition(time) { //Time since acceleration changed
        this.velocity = this.acceleration * time; //Velocity is meters per second (m/s)
        this.pY = this.velocity * time;

        $("#velocity").text("Velocity: " + Math.round(this.velocity));
    }

    showVelocity(val) {
        if(val)
            $("#velocity").show();
        else
            $("#velocity").hide();
    }

    drawObject(context) {
        this.x = Conversion.metersToPixels(this.pX);
        this.y = Conversion.metersToPixels(this.pY);

        super.drawObject(context);
    }
}