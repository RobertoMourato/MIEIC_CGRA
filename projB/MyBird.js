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
    }

    display() {
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
        this.scene.translate(-.9, 1, 0);
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
    }

    updateWings(t) {
        this.height = - (Math.sin(t / 125) / 3);
    }
}
