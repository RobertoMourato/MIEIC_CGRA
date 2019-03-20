/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene,coords = null) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
      this.updateTexCoords(coords);
	}
	initBuffers() {

		this.texCoords = [
			0,0,
			0,1,
			1,1,
			1,0
		];

		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,		//3
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		this.normals = [];
		for(var i = 0; i < 4 ; i++){
			this.normals.push(0,0,1);
		}
		for(var i = 0; i < 4 ; i++){
			this.normals.push(0,0,-1);
		}
		var tmp = this.indices.slice(0);
		tmp.reverse();
		this.indices = this.indices.concat(tmp);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
