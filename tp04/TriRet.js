/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class TriRet extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -1, 1, 0,	//0
            -1, -1, 0,	//1
            1, -1, 0,	//2
            - 1, 1, 0,	//0
            -1, -1, 0,	//1
            1, -1, 0	//2
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1
        ];

        this.texCoords = [
            0, 0.5,
            0, 1,
            0.5, 1,
            0, 0.5,
            0, 1,
            0.5, 1
        ];

        var aux = this.indices.slice(0);

        aux.reverse();

        this.indices = this.indices.concat(aux);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

