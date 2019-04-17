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
        this.trunkTexture = new CGFappearance(this);    //Diffuse material
        this.trunkTexture.setAmbient(122/255, 58/255, 6/255, 1);
        this.trunkTexture.setDiffuse(122/255, 58/255, 6/255, 1);
        this.trunkTexture.setSpecular(0, 0, 0, 1);
        this.trunkTexture.setShininess(10.0);
        this.trunkTexture.loadTexture('images/TrunkTexture.jpg');
        this.trunkTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopTexture = new CGFappearance(this);
        this.treeTopTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.treeTopTexture.setDiffuse(1, 1, 1, 1);
        this.treeTopTexture.setSpecular(1, 1, 1, 1);
        this.treeTopTexture.setShininess(10.0);
        this.treeTopTexture.loadTexture('images/TreeTopTexture.jpg');
        this.treeTopTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.grassTexture = new CGFappearance(this);
        this.grassTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.grassTexture.setDiffuse(1, 1, 1, 1);
        this.grassTexture.setSpecular(1, 1, 1, 1);
        this.grassTexture.setShininess(10.0);
        this.grassTexture.loadTexture('images/grassTexture.jpg');
        this.grassTexture.setTextureWrap('REPEAT', 'REPEAT');
        
        this.cubeMap = new CGFappearance(this);
        this.cubeMap.setAmbient(0.6, 0.6, 0.6, 1);
        this.cubeMap.setDiffuse(1, 1, 1, 1);
        this.cubeMap.setSpecular(1, 1, 1, 1);
        this.cubeMap.setShininess(10.0);

        this.day = new CGFtexture(this,'images/dayMap.jpg');
        this.night = new CGFtexture(this,'images/nightMap.jpg');

        this.riverTexture = new CGFappearance(this);    //Specular material
        this.riverTexture.setAmbient(220/255, 220/255, 220/255, 1);
        this.riverTexture.setDiffuse(1, 1, 1, 1);
        this.riverTexture.setSpecular(220/255, 220/255, 220/255, 1);
        this.riverTexture.setShininess(10.0);
        this.riverTexture.loadTexture('images/riverTexture.jpg');
        this.riverTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.fireTexture = new CGFappearance(this);    
        this.fireTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.fireTexture.setDiffuse(1, 1, 1, 1);
        this.fireTexture.setSpecular(1, 1, 1, 1);
        this.fireTexture.setShininess(10.0);
        this.fireTexture.loadTexture('images/firePitTexture.jpg');
        this.fireTexture.setTextureWrap('REPEAT', 'REPEAT');

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.ground = new MyQuad(this);
        this.house = new MyHouse(this);
        this.treeRow = new MyTreeRowPatch(this, this.trunkTexture, this.treeTopTexture);
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkTexture, this.treeTopTexture);
        this.house = new MyHouse(this);
        this.hill1 = new MyVoxelHill(this, 4);
        this.hill2 = new MyVoxelHill(this, 5);
        this.hill3 = new MyVoxelHill(this, 3);
        this.map = new MyCubeMap(this);
        this.river = new MyUnitCubeQuad(this, 2);
        this.firePit = new MyUnitCubeQuad(this, 3);

        //Objects connected to MyInterface
        this.displayTextures = true;
        this.DayMode_NightMode = true;
    }

    initLights() {
        this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);

        this.lights[0].setPosition(0, 100, 0, 1);
        this.lights[0].setAmbient(240/255, 178/255, 4/255, 1.0);
        this.lights[0].setDiffuse(240/255, 178/255, 4/255, 1.0);
        this.lights[0].setSpecular(240/255, 178/255, 4/255, 1.0); 
        this.lights[0].setLinearAttenuation(0.02);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(0, 50, 0, 1);
        this.lights[1].setAmbient(22/255, 98/255, 132/255, 1.0);
        this.lights[1].setDiffuse(22/255, 98/255, 132/255, 1.0);
        this.lights[1].setSpecular(22/255, 98/255, 132/255, 1.0);
        this.lights[1].setLinearAttenuation(0.2);
        this.lights[1].disable();
        this.lights[1].update();

        this.lights[2].setPosition(0, 1.5, -15, 1);
        this.lights[2].setAmbient(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setDiffuse(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setSpecular(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setLinearAttenuation(0.8);
        this.lights[2].disable();
        this.lights[2].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 10, 500, vec3.fromValues(0, 60, -120), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    SetDayTime(){
        if(this.DayMode_NightMode){
            this.cubeMap.setTexture(this.day);
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[0].update();
            this.lights[1].update();
            this.lights[2].update();
        }
        else{
            this.cubeMap.setTexture(this.night);
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[0].update();
            this.lights[1].update();
            this.lights[2].update();
        }
    }

    SetTextures(){
        if(this.displayTextures){
            this.enableTextures(true);
        }else{
            this.enableTextures(false);
        }
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
        //this.axis.display();

        //Apply default appearance  
        this.SetDayTime();
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //Apllying cubemap
        this.pushMatrix();
        this.translate(0.5, 0.5, 0.5);
        this.scale(100, 100, 100);
        this.translate(0, 0.485, 0);
        this.cubeMap.apply();
        this.map.display();
        this.popMatrix()

        //Apllying the grass
        this.pushMatrix();
        this.rotate(Math.PI, 0, 1, 0);
        this.rotate((3*Math.PI)/2, 1, 0, 0);
        this.scale(100, 100, 1);
        this.grassTexture.apply();
        this.ground.display();
        this.popMatrix();

        //Apllying the house
        this.pushMatrix();
        this.translate(0, 0, 0);
        this.scale(5, 5, 5);
        this.house.display();
        this.popMatrix();

        //Apllying the Rows of trees
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

        this.pushMatrix();
        this.translate(-22, 0, 0);
        this.rotate(Math.PI/2, 0, 1, 0);
        this.scale(3, 3, 3);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-40, 0, -15);
        this.rotate(-Math.PI/2, 0, 1, 0);
        this.scale(3, 3, 3);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(32, 0, -16);
        this.scale(2.5, 2.5, 2.5);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(33, 0, 16);
        this.scale(2.5, 2.5, 2.5);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7, 0, -33);
        this.rotate(-Math.PI/2.3, 0, 1, 0);
        this.scale(2.5, 2.5, 2.5);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-7, 0, -33);
        this.rotate(Math.PI/2.3, 0, 1, 0);
        this.scale(2.5, 2.5, 2.5);
        this.treeRow.display();
        this.popMatrix();

        //Apllying the Groups of trees
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

        this.pushMatrix();
        this.translate(33, 0, 0);
        this.rotate(Math.PI/2, 0, 1, 0);
        this.scale(4, 4, 4);
        this.treeGroup.display();
        this.popMatrix();

        //Apllying the Hills
        this.pushMatrix();
        this.translate(-25, 0, 32);
        this.scale(3, 3, 3);
        this.hill1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(28, 0, 34);
        this.scale(3, 3, 3);
        this.hill2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(30, 0, -34);
        this.scale(3, 3, 3);
        this.hill2.display();
        this.popMatrix();

        //Apllying the River
        this.pushMatrix();
        this.translate(-28, -1.45, -17);
        this.scale(1, 1, 22);
        this.scale(3, 3, 3);
        this.riverTexture.apply();
        this.river.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-35.5, -1.45, 17.5);
        this.scale(6, 1, 1);
        this.scale(3, 3, 3);
        this.riverTexture.apply();
        this.river.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-46, -1.45, 33);
        this.scale(1, 1, 11.3);
        this.scale(3, 3, 3);
        this.riverTexture.apply();
        this.river.display();
        this.popMatrix();

        //Apllying the Fire Pit
        this.pushMatrix();
        this.translate(0, 1.5, -15);
        this.rotate(-Math.PI/2, 0, 1, 0)
        this.scale(3, 3, 3);
        this.firePit.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}