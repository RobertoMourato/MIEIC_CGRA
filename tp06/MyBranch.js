class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 3);
        this.BMaterial = new CGFappearance(this.scene);
        this.BMaterial.setDiffuse(0.7, 0.5, 0, 1);
    }

    display() {
        this.BMaterial.apply();
        this.cylinder.display();
        this.scene.setDefaultAppearance();
    }
}