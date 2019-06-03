/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyUnitCubeQuad(scene); 
        this.body = new MyUnitCubeQuad(scene);
        this.tail = new MyCone(scene, 4, 1);
        this.eye = new MyUnitCubeQuad(scene);
        this.nose = new MyCone(scene, 4, 1);
        this.wingLeft = new MyWing(scene, 0);
        this.wingRight = new MyWing(scene, 1);

        this.height = 0;
        this.angle = 0;
        this.speed = 0;
        this.position_x = 0;
        this.position_y = 0;
        this.position_z = 0;
    }
 
    display() {
        this.scene.pushMatrix();
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.translate(this.position_x, this.position_y, this.position_z);

            this.scene.pushMatrix();
            this.scene.birdColor.apply();
            this.body.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0.5, 1, 0);
            this.scene.birdColor.apply();
            this.head.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(Math.PI/4, 1, 0, 0);
            this.scene.rotate(Math.PI/2, 0, 0, 1);
            this.scene.scale(0.7, 0.7, 0.7);
            this.scene.birdColor.apply();
            this.tail.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0.2 + this.height, -1);
            this.scene.birdColor.apply();
            this.wingLeft.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0.2 + this.height, 1);
            this.scene.birdColor.apply();
            this.wingRight.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.rotate(-Math.PI/2, 0, 0, 1);
            this.scene.translate(-0.9, 1, 0);
            this.scene.scale(0.2, 0.35, 0.2);
            this.scene.birdFace.apply();
            this.nose.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(1, 1.25, -0.25);
            this.scene.scale(0.2, 0.2, 0.2);
            this.scene.birdFace.apply();
            this.eye.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(1, 1.25, 0.25);
            this.scene.scale(0.2, 0.2, 0.2);
            this.scene.birdFace.apply();
            this.eye.display();
            this.scene.popMatrix();
        
        this.scene.popMatrix();
    }

    updateWings(t) {
        this.height = - (Math.sin(t / 125) / 3);
    }

    turn(v) {
        this.angle += v;
        this.scene.rotate(this.angle, 0, 1, 0);
    }

    accelerate(v) {
        this.speed = v;
        if(this.speed < 0) {
            this.speed = 0;
        }
        else {
            this.position_x += Math.cos(this.angle) * (this.speed/1000);
            this.position_z += Math.sin(this.angle) * (this.speed/1000);
        }
    }

    reset() {
        this.angle = 0;
        this.speed = 0;
        this.scene.rotate(this.angle, 0, 1, 0);
        this.position_x = 0;
        this.position_y = 0;
        this.position_z = 0;
    }
}
