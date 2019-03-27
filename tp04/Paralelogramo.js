/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Paralelogramo extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            1, 1, 0,	//1
            3, 1, 0,    //2
            2, 0, 0,     //3
            0, 0, 0,	//0
            1, 1, 0,	//1
            3, 1, 0,    //2
            2, 0, 0     //3
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            1, 3, 0,
            2, 3, 1
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1
        ];

        var aux = this.indices.slice(0);

        aux.reverse();

        this.indices = this.indices.concat(aux);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

