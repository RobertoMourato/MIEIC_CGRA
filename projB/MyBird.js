/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.head = new MyUnitCubeQuad(scene,1); //adicionar text no MyUnitCubeQuad
        this.body = new MyCylinder(scene, 4, 1);
        this.tail = new MyCone(scene, 4, 1);
        this.eye = new MyCylinder(scene, 3, 1);
        this.nose = new MyCone(scene, 3, 1);
        this.wingBack = new MyQuad(scene);
        this.wingFront = new MyTriangle(scene);
    }
}
