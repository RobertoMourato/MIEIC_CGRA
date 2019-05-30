/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyUnitCubeQuad(scene, 1); 
        this.body = new MyUnitCubeQuad(scene, 1);
        this.tail = new MyCone(scene, 4, 1);
        this.eye = new MyUnitCubeQuad(scene, 1);
        this.nose = new MyCone(scene, 3, 1);
        this.wingBack = new MyQuad(scene);
        this.wingFront = new TriRet(scene);
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
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, -1, 0.3);
        this.scene.birdColor.apply();
        this.wingBack.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, -1, -0.3);
        this.scene.birdColor.apply();
        this.wingBack.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI/6, 0, 1, 0);
        this.scene.translate(1.97, 0, -2.9);
        this.scene.birdColor.apply();
        this.wingFront.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(-Math.PI/6, 0, 1, 0);
        this.scene.translate(1.97, 0, 2.9);
        this.scene.birdColor.apply();
        this.wingFront.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.translate(-1, 1, 0);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.birdFace.apply();
        this.nose.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 1.25, -0.25);
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.birdFace.apply();
        this.eye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 1.25, 0.25);
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.birdFace.apply();
        this.eye.display();
        this.scene.popMatrix();
    }
}
