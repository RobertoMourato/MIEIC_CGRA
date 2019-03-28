/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class TriRetP extends CGFobject {
    constructor(scene, coords) {
        super(scene);
        this.texCoords = coords;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -1, 0, 0,
            0, 1, 0,
            1, 0, 0,
            -1, 0, 0,
            0, 1, 0,
            1, 0, 0
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 2, 1
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
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

