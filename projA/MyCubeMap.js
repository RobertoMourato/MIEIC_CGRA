/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        this.vertices = [/*
            0.5, 0.5, 0.5,//0
            0.5, -0.5, 0.5,//1
            0.5, 0.5, -0.5,//2
            0.5, -0.5, -0.5,//3
            -0.5, -0.5, -0.5,//4
            -0.5, 0.5, -0.5,//5
            -0.5, -0.5, 0.5,//6
            -0.5, 0.5, 0.5,//7*/
            0.5, 0.5, 0.5,//0 0
            0.5, -0.5, 0.5,//1 1
            0.5, 0.5, -0.5,//2 2
            0.5, -0.5, -0.5,//3 3 right
            0.5, 0.5, -0.5,//2 4
            0.5, -0.5, -0.5,//3 5
            -0.5, -0.5, -0.5,//4 6
            -0.5, 0.5, -0.5,//5 7 back
            -0.5, -0.5, -0.5,//4 8
            -0.5, 0.5, -0.5,//5 9
            -0.5, -0.5, 0.5,//6 10
            -0.5, 0.5, 0.5,//7 11 left
            0.5, 0.5, 0.5,//0 12
            0.5, -0.5, 0.5,//1 13
            -0.5, -0.5, 0.5,//6 14
            -0.5, 0.5, 0.5,//7 15 front
            0.5, 0.5, 0.5,//0 16
            0.5, 0.5, -0.5,//2 17
            -0.5, 0.5, -0.5,//5 18
            -0.5, 0.5, 0.5,//7 19 top
            0.5, -0.5, 0.5,//1 20
            0.5, -0.5, -0.5,//3 21
            -0.5, -0.5, -0.5,//4 22
            -0.5, -0.5, 0.5,//6 23 bottom
		];

		//Counter-clockwise reference of vertices
        this.indices = [
            2, 1, 0,
            2, 3, 1,//right
            6, 5, 4,
            7, 6, 4,//back
            10, 8, 9,
            11, 10, 9,//left
            13, 14, 15,
            12, 13, 15,//front
            17, 16, 19,
            18, 17, 19,//top
            20, 21, 22,
            22, 23, 20//bottom
        ];

	    //Tra�ar as normais
        this.normals = [
            0, -1, 0,  //0
            0, 1, 0, 
            0, 0, 1, 
            0, 1, 0, 
            0, 1, 0, 
            0, 0, 1, 
            0, 1, 0, 
            1, 0, 0, 
            0, 0, -1,  //0
            0, 0, -1,  
            0, -1, 0,  
            0, 0, 1, 
            0, 0, 1, 
            0, -1, 0,  
            0, 0, -1,  
            0, 0, -1,  
            -1, 0, 0,  //0
            -1, 0, 0,  
            -1, 0, 0,  
            -1, 0, 0,  
            1, 0, 0, 
            1, 0, 0,
            1, 0, 0, 
            0, -1, 0 
        ]

        this.texCoords=[
            1,0.4,
            1,0.6,
            0.75,0.4,
            0.75,0.6,//right
            0.75,0.4,
            0.75,0.6,
            0.5,0.6,
            0.5,0.4,//back
            0.5,0.6,
			0.5,0.4,
            0.25,0.6,
			0.25,0.4,//left
			0,0.4,
			0,0.6,
			0.25,0.6,
			0.25,0.4,//front
			0.35,0.1,
			0.45,0.1,
            0.45,0.4,
            0.35,0.4,//top
			0.25,1,
			0.5,1,
			0.5,0.6,
            0.25,0.6//bottom
        ]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

