/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.nest = [
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene),
            new MyTreeBranch(scene)
        ]
    }
    display() {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(13.5, 3, 0);
        this.scene.trunkTexture.apply();
        this.nest[0].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0.5, 0);
        this.scene.translate(9, 9, 6);
        this.scene.trunkTexture.apply();
        this.nest[1].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0.5);
        this.scene.translate(13, -3, 6);
        this.scene.trunkTexture.apply();
        this.nest[2].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 1);
        this.scene.translate(11, -8, 10);
        this.scene.trunkTexture.apply();
        this.nest[3].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 4);
        this.scene.translate(2.5, -14, 8);
        this.scene.trunkTexture.apply();
        this.nest[4].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 1, 0);
        this.scene.translate(4, 10, 10);
        this.scene.trunkTexture.apply();
        this.nest[5].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 1, 0);
        this.scene.translate(4.5, 9.5, 10);
        this.scene.trunkTexture.apply();
        this.nest[6].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(15, 4.2, -0.3);
        this.scene.trunkTexture.apply();
        this.nest[7].display();
        this.scene.popMatrix();

        /*this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 4);
        this.scene.translate(2.5, -13.5, 8);
        this.scene.trunkTexture.apply();
        this.nest[8].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 1, 0);
        this.scene.translate(4, 10, 10.5);
        this.scene.trunkTexture.apply();
        this.nest[9].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 1, 0);
        this.scene.translate(4.5, 9, 10);
        this.scene.trunkTexture.apply();
        this.nest[10].display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(14.5, 4.2, -0.3);
        this.scene.trunkTexture.apply();
        this.nest[11].display();
        this.scene.popMatrix();*/
    }
}