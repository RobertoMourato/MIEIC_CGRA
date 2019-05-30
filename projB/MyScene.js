/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Textures
        this.wallTexture = new CGFappearance(this);
        this.wallTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.wallTexture.setDiffuse(1, 1, 1, 1);
        this.wallTexture.setSpecular(1, 1, 1, 1);
        this.wallTexture.setShininess(10.0);
        this.wallTexture.loadTexture('images/wallTexture.jpg');
        this.wallTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.birdColor = new CGFappearance(this);
        this.birdColor.setAmbient(0, 0.8, 1, 1);
        this.birdColor.setDiffuse(0, 0.8, 1, 1);
        this.birdColor.setSpecular(1, 1, 1, 1);
        this.birdColor.setShininess(10.0);
        this.birdColor.setTextureWrap('REPEAT', 'REPEAT');

        this.birdFace = new CGFappearance(this);
        this.birdFace.setAmbient(1, 1, 0, 1);
        this.birdFace.setDiffuse(1, 1, 0, 1);
        this.birdFace.setSpecular(1, 1, 1, 1);
        this.birdFace.setShininess(10.0);
        this.birdFace.setTextureWrap('REPEAT', 'REPEAT');

        this.roofTexture = new CGFappearance(this);
        this.roofTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.roofTexture.setDiffuse(1, 1, 1, 1);
        this.roofTexture.setSpecular(1, 1, 1, 1);
        this.roofTexture.setShininess(10.0);
        this.roofTexture.loadTexture('images/roofTexture.jpg');
        this.roofTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.columnTexture = new CGFappearance(this);         
        this.columnTexture.setAmbient(178/255, 178/255, 178/255, 1);
        this.columnTexture.setDiffuse(178/255, 178/255, 178/255, 1);
        this.columnTexture.setSpecular(0, 0, 0, 1);
        this.columnTexture.setShininess(10.0);
        this.columnTexture.loadTexture('images/columnTexture.jpg');
        this.columnTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.cubeMap = new CGFappearance(this);
        this.cubeMap.setAmbient(0.6, 0.6, 0.6, 1);
        this.cubeMap.setDiffuse(1, 1, 1, 1);
        this.cubeMap.setSpecular(1, 1, 1, 1);
        this.cubeMap.setShininess(10.0);

        this.day = new CGFtexture(this,'images/dayMap.jpg');
        this.night = new CGFtexture(this,'images/nightMap.jpg');
        this.cubeMap.setTexture(this.day);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this);
        this.map = new MyCubeMap(this);
        this.bird = new MyBird(this);

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    update(t){

    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        //Apllying cubemap
        /*this.pushMatrix();
        this.translate(0.5, 0.5, 0.5);
        this.scale(60, 60, 60);
        this.translate(0, 0.485, 0);
        this.cubeMap.apply();
        //this.map.display();
        this.popMatrix()
        
        //Apllying plane
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        //this.plane.display();
        this.popMatrix();

        //Apllying the house
        this.pushMatrix();
        this.translate(0, 0, 0);
        this.scale(2, 2, 2);
        //this.house.display();
        this.popMatrix();*/

        //Apllying the bird
        this.pushMatrix();
        this.bird.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}