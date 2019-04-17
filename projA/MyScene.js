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

        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.TRILINEAR);

        //Textures
        this.trunkTexture = new CGFappearance(this);
        this.trunkTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkTexture.setShininess(10.0);
        this.trunkTexture.loadTexture('images/TrunkTexture.jpg');
        this.trunkTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopTexture = new CGFappearance(this);
        this.treeTopTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.treeTopTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeTopTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeTopTexture.setShininess(10.0);
        this.treeTopTexture.loadTexture('images/TreeTopTexture.jpg');
        this.treeTopTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.grassTexture = new CGFappearance(this);
        this.grassTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.grassTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.grassTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.grassTexture.setShininess(10.0);
        this.grassTexture.loadTexture('images/grassTexture.jpg');
        this.grassTexture.setTextureWrap('REPEAT', 'REPEAT');
        
        this.cubeMap = new CGFappearance(this);
        this.cubeMap.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMap.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMap.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMap.setShininess(10.0);
        this.cubeMap.loadTexture('images/cubeMap.jpg');
        this.cubeMap.setTextureWrap('REPEAT', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.ground = new MyQuad(this);
        this.house = new MyHouse(this);
        this.treeRow = new MyTreeRowPatch(this, this.trunkTexture, this.treeTopTexture);
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkTexture, this.treeTopTexture);
        this.house = new MyHouse(this);
        this.hill1 = new MyVoxelHill(this, 4);
        this.hill2 = new MyVoxelHill(this, 5);
        this.map = new MyCubeMap(this);

        //Objects connected to MyInterface
        this.displayGround = true;
        this.displayHouse =  true;
        this.displayTreeRow = true;
        this.displayTreeGroup = true;
        this.displayHill1 =  true;
        this.displayHill2 = true;
        this.displayMyCubeMap = true;
        this.objectComplexity = 0.5;
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 10, 500, vec3.fromValues(0, 80, -120), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    updateObjectComplexity(){
        this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
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

        if(this.displayMyCubeMap){
            this.pushMatrix();
            this.translate(0.5, 0.5, 0.5);
            this.scale(100, 100, 100);
            this.translate(0, 0.485, 0);
            this.cubeMap.apply();
            this.map.display();
            this.popMatrix();
        }

        if(this.displayGround){
            this.pushMatrix();
            this.rotate(Math.PI, 0, 1, 0);
            this.rotate((3*Math.PI)/2, 1, 0, 0);
            this.scale(100, 100, 1);
            this.grassTexture.apply();
            this.ground.display();
            this.popMatrix();
        }

        if(this.displayHouse){
            this.pushMatrix();
            this.translate(0, 0, 0);
            this.scale(5, 5, 5);
            this.house.display();
            this.popMatrix();
        }

        if(this.displayTreeRow) {
            this.pushMatrix();
            this.translate(13, 0, 0);
            this.rotate(Math.PI/2, 0, 1, 0);
            this.scale(3, 3, 3);
            this.treeRow.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-13, 0, 0);
            this.rotate(-Math.PI/2, 0, 1, 0);
            this.scale(3, 3, 3);
            this.treeRow.display();
            this.popMatrix();
        }

        if(this.displayTreeGroup) {
            this.pushMatrix();
            this.translate(0, 0, 17);
            this.scale(3, 3, 3);
            this.treeGroup.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(0, 0, 37);
            this.rotate(Math.PI/2, 0, 1, 0);
            this.scale(3, 3, 3);
            this.treeGroup.display();
            this.popMatrix();
        }

        if(this.displayHill1){
            this.pushMatrix();
            this.translate(-25, 0, 32);
            this.scale(3, 3, 3);
            this.hill1.display();
            this.popMatrix();
        }

        if(this.displayHill2){
            this.pushMatrix();
            this.translate(28, 0, 34);
            this.scale(3, 3, 3);
            this.hill2.display();
            this.popMatrix();
        }

        // ---- END Primitive drawing section
    }
}