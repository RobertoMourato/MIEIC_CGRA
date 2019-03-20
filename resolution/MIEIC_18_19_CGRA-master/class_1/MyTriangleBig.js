class MyTriangleBig extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [
            -2, 0, 4,
            2, 0, 4,
            0, 2, 4
        ];

        this.indices = [
            0, 1, 2
        ];


        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();


    }
}