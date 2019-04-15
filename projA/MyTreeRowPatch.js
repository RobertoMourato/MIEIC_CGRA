/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree1 = new MyTree(scene, 1.3, 0.5, 1.8, 0.8);
        this.tree2 = new MyTree(scene, 1.5, 0.5, 1.7, 1);
        this.tree3 = new MyTree(scene, 1.4, 0.6, 1.8, 0.9);
        this.tree4 = new MyTree(scene, 1.5, 0.6, 1.9, 1);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-5.2, 0, 0);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.3, 0, 0);
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.1, 0, 0);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.2, 0, 0);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.1, 0, 0);
        this.tree3.display();
        this.scene.popMatrix();
    }
}
