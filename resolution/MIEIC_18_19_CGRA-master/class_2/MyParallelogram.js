class MyParallelogram extends CGFobject{
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers(){
        this.vertices = [
            0, 0, 0,
            2, 0, 0,
            3, 1, 0,
            1, 1, 0,
        ];

        this.indices = [
            0, 1, 3,
            1, 2, 3,
            3, 1, 0,
            3, 2, 1
        ];
        

        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
