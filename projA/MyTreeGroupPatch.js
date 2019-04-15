/**
* MyTreeGroupPatch
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius/*, trunkTexture, treeTopTexture*/) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 8, 1); //Should have between 5 and 10 sides
        this.cone = new MyCone(scene, 8, 1); //Should have between 5 and 10 sides
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        //this.trunkTex = trunkTexture;
        //this.treeTopTex = treeTopTexture;
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.cone.display();
        this.scene.popMatrix();
    }
}
