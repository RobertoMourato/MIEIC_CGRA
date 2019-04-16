/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene, index) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.index = index;

        this.MineSideMaterial = new CGFappearance(this.scene);
        this.MineSideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.MineSideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.MineSideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.MineSideMaterial.setShininess(10.0);
        this.MineSideMaterial.loadTexture('images/mineSide.png');
        this.MineSideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.MineTopMaterial = new CGFappearance(this.scene);
        this.MineTopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.MineTopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.MineTopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.MineTopMaterial.setShininess(10.0);
        this.MineTopMaterial.loadTexture('images/mineTop.png');
        this.MineTopMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.MineBottomMaterial = new CGFappearance(this.scene);
        this.MineBottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.MineBottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.MineBottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.MineBottomMaterial.setShininess(10.0);
        this.MineBottomMaterial.loadTexture('images/mineBottom.png');
        this.MineBottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.wallTexture = new CGFappearance(this.scene);
        this.wallTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallTexture.setShininess(10.0);
        this.wallTexture.loadTexture('images/wallTexture.jpg');
        this.wallTexture.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(scene) {

        if(this.index == 0) {
            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.MineSideMaterial.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 1, 0);
            this.MineSideMaterial.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
            this.MineSideMaterial.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.MineSideMaterial.apply();
            this.quad.display();
            this.scene.popMatrix();
        }
        else {
            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 1, 0);
            this.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
            this.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();
        }

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.MineBottomMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.MineTopMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}

