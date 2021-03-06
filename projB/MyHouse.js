/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube= new MyUnitCubeQuad(scene);
        this.pyramid= new MyPyramid(scene, 4, 1);
        this.prism= new MyPrism(scene, 9, 1);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.wallTexture.apply();
        this.cube.display();    
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0, 1, 0);
        this.scene.scale(1.4, 1.4, 1.4);
        this.scene.roofTexture.apply();
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.73, 0, 0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.scene.columnTexture.apply();
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.73, 0, -0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.scene.columnTexture.apply();
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.73, 0, 0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.scene.columnTexture.apply();
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.73, 0, -0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.scene.columnTexture.apply();
        this.prism.display();
        this.scene.popMatrix();
    }
}
