/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyUnitCubeQuad(scene, 1); //adicionar text no MyUnitCubeQuad
        this.body = new MyUnitCubeQuad(scene, 1);
        this.tail = new MyCone(scene, 4, 1);
        this.eye = new MyCylinder(scene, 3, 1);
        this.nose = new MyCone(scene, 3, 1);
        this.wingBack = new MyQuad(scene);
        this.wingFront = new TriRet(scene);
    }

    display() {
        this.scene.pushMatrix();
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 1, 0);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.7, 0.7, 0.7);
        this.tail.display();
        this.scene.popMatrix();
    }
}
