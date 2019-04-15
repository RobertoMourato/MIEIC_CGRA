/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.levels = levels;
        this.aux=0;
    }
    
    display() {
        for(var i=0; i<this.levels; i++)
        {
            this.aux = 2 * i + 1;

            for (var k = 0; k < this.aux; k++) {
                this.scene.pushMatrix();
                this.scene.translate(-i+k, this.levels - i, i);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(-i, this.levels - i, -i);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(-i, this.levels - i, -i + k);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(i, this.levels - i, -i + k);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(-i, this.levels - i, i);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(-i+k, this.levels - i, -i);
                this.cube.display();
                this.scene.popMatrix();
            }
        }
    }
}
