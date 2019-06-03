/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.branch = new MyCylinder(scene, 5, 1);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.2, 3, 0.2);
        this.scene.trunkTexture.apply();
        this.branch.display();
        this.scene.popMatrix();
    }
}