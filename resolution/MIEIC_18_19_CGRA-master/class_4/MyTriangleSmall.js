class MyTriangleSmall extends CGFobject {
    constructor(scene,coords) {
        super(scene);
        this.initBuffers();
        if (coords != undefined)
    			this.updateTexCoords(coords);
    }

    initBuffers(){

      this.texCoords=[
        0,0,
        0,1,
        1,1
      ];

        this.vertices = [
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0,
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0
        ];

        this.indices = [
            0, 1, 2
        ];

        this.normals = [];
        for(var i = 0; i < 3 ; i++){
          this.normals.push(0,0,1);
        }
        for(var i = 0; i < 3 ; i++){
          this.normals.push(0,0,-1);
        }


        var tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);


        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();


    }
    updateTexCoords(coords) {
      this.texCoords = [...coords];
      this.updateTexCoordsGLBuffers();
    }
}
