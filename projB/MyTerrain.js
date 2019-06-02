
class MyTerrain extends CGFobject{
    constructor(scene){
        super(scene);

        this.plane=new Plane(scene, 50);

        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({ uSampler1: 1 });
        this.shader.setUniformsValues({ uSampler2: 2 });
        this.shader.setUniformsValues({ uSampler3: 3 });

        this.terrain = new CGFtexture(this.scene, "images/terrain.jpg");
        this.appearance = new CGFappearance(scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(1, 1, 1, 1);
        this.appearance.setSpecular(1, 1, 1, 1);
        this.appearance.setShininess(10);
        this.appearance.setTexture(this.terrain);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.heightMap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
    }

    display(){
        this.appearance.apply();
        this.scene.setActiveShader(this.shader);
        this.terrain.bind(1);
        this.heightMap.bind(2);
        this.altimetry.bind(3);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}