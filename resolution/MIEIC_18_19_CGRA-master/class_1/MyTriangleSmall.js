class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers(){

        this.vertices = [
            -1, 0, 4,
            1, 0, 4,
            0, 1, 4
        ];
        
        this.indices = [
            0, 1, 2
        ];


        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();


    }
}