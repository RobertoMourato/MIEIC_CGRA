/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene, trunkTexture, topTreeTexture) {
        super(scene);
        this.trunkTexture = trunkTexture;
        this.topTreeTexture = topTreeTexture;
        this.tree1 = new MyTree(scene, 1.3, 0.5, 1.8, 0.8, trunkTexture, topTreeTexture);
        this.tree2 = new MyTree(scene, 1.5, 0.5, 1.7, 1, trunkTexture, topTreeTexture);
        this.tree3 = new MyTree(scene, 1.4, 0.6, 1.8, 0.9, trunkTexture, topTreeTexture);
        this.tree4 = new MyTree(scene, 1.5, 0.6, 1.9, 1, trunkTexture, topTreeTexture);
        this.tree5 = new MyTree(scene, 1.4, 0.5, 1.8, 0.9, trunkTexture, topTreeTexture);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-2.1, 0, -2.2);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -2.2); 
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, 0, -2.2);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.1, 0, 0);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.tree5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, 0, 0);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.1, 0, 2.2);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2.2);
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, 0, 2.2);
        this.tree1.display();
        this.scene.popMatrix();
    }
}
