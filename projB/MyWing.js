/**
* MyWing
* @constructor
*/
class MyWing extends CGFobject {
    constructor(scene, index) {
        super(scene);

        this.index = index;         //0 -> left, 1 -> right
        this.wingBack = new MyQuad(scene);
        this.wingFront = new TriRet(scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.wingBack.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.5, 0.5, 0.5);
        if (this.index == 0) {
            this.scene.translate(0.85, 0, -1.5);
            this.scene.rotate(Math.PI/6, 0, 1, 0);
        }
        if(this.index == 1) {
            this.scene.translate(0.85, 0, 1.5);
            this.scene.rotate(-Math.PI/6, 0, 1, 0);
        }
        this.wingFront.display();
        this.scene.popMatrix();
    }
}