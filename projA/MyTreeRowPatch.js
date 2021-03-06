/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene, trunkTexture, topTreeTexture) {
        super(scene);
        this.trunkTexture = trunkTexture;
        this.topTreeTexture = topTreeTexture;
        this.tree1 = new MyTree(scene, 1.2, 0.5, 1.6, 0.7, trunkTexture, topTreeTexture);
        this.tree2 = new MyTree(scene, 1, 0.4, 1.2, 0.6, trunkTexture, topTreeTexture);
        this.tree3 = new MyTree(scene, 1.4, 0.5, 1.8, 0.9, trunkTexture, topTreeTexture);
        this.tree4 = new MyTree(scene, 1.6, 0.8, 2, 1, trunkTexture, topTreeTexture);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-5.2, 0, 0.2);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.3, 0, -0.1);
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.1, 0, 0.1);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0.2);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.2, 0, 0);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5.1, 0, -0.2);
        this.tree3.display();
        this.scene.popMatrix();
    }
}
