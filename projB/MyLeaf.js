class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new TriRet(scene);
        this.LMaterial = new CGFappearance(this.scene);
        this.LMaterial.setDiffuse(0, 1, 0, 1);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(4,4,4);
        this.LMaterial.apply();
        this.triangle.display();
        //this.scene.setDefaultAppearance();
        this.scene.popMatrix();
    }
}