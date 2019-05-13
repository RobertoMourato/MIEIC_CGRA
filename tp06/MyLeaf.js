class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new TriRet(scene);
        this.LMaterial = new CGFappearance(this.scene);
        this.LMaterial.setDiffuse(0, 1, 0, 1);
    }

    display() {
        this.LMaterial.apply();
        this.triangle.display();
        //this.scene.setDefaultAppearance();
    }
}