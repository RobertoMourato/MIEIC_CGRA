/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube= new MyUnitCubeQuad(scene, 1);
        this.pyramid= new MyPyramid(scene, 4, 1);
        this.prism= new MyPrism(scene, 9, 1);

        this.roofTexture = new CGFappearance(this.scene);
        this.roofTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.roofTexture.setDiffuse(1, 1, 1, 1);
        this.roofTexture.setSpecular(1, 1, 1, 1);
        this.roofTexture.setShininess(10.0);
        this.roofTexture.loadTexture('images/roofTexture.jpg');
        this.roofTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.columnTexture = new CGFappearance(this.scene);         //Diffuse material
        this.columnTexture.setAmbient(178/255, 178/255, 178/255, 1);
        this.columnTexture.setDiffuse(178/255, 178/255, 178/255, 1);
        this.columnTexture.setSpecular(0, 0, 0, 1);
        this.columnTexture.setShininess(10.0);
        this.columnTexture.loadTexture('images/columnTexture.jpg');
        this.columnTexture.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display(scene) {

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.cube.display();    
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0, 1, 0);
        this.scene.scale(1.4, 1.4, 1.4);
        this.roofTexture.apply();
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.73, 0, 0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.columnTexture.apply();
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.73, 0, -0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.73, 0, 0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.73, 0, -0.73);
        this.scene.scale(0.2, 1, 0.2);
        this.prism.display();
        this.scene.popMatrix();
    }
}
