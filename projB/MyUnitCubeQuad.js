/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene, index) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.index = index;             //0 for hills, 1 for house, 2 for river, 3 for fireplace
    }
    display(scene) {
        if(this.index == 0) {           //Cube for the hills
            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 1, 0);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.wallTexture.apply();
            this.quad.display();
            this.scene.popMatrix();
        }
        else if(this.index == 1) {
            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 1, 0);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.quad.display();
            this.scene.popMatrix();
        }
    }
}

