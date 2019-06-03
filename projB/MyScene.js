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
        this.setUpdatePeriod(1000/60);

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

        this.trunkTexture = new CGFappearance(this);
        this.trunkTexture.setAmbient(122/255, 58/255, 6/255, 1);
        this.trunkTexture.setDiffuse(122/255, 58/255, 6/255, 1);
        this.trunkTexture.setSpecular(0, 0, 0, 1);
        this.trunkTexture.setShininess(10.0);
        this.trunkTexture.loadTexture('images/TrunkTexture.jpg');
        this.trunkTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.cubeMap = new CGFappearance(this);
        this.cubeMap.setAmbient(0.6, 0.6, 0.6, 1);
        this.cubeMap.setDiffuse(1, 1, 1, 1);
        this.cubeMap.setSpecular(1, 1, 1, 1);
        this.cubeMap.setShininess(10.0);

        this.lightText = new CGFappearance(this);
        this.lightText.setAmbient(1, 1, 0, 1);
        this.lightText.setDiffuse(1, 1, 0, 1);
        this.lightText.setSpecular(1, 1, 0, 1);
        this.lightText.setShininess(10);

        this.day = new CGFtexture(this,'images/dayMap.jpg');
        this.night = new CGFtexture(this,'images/nightMap.jpg');
        this.cubeMap.setTexture(this.day);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyTerrain(this);
        this.house = new MyHouse(this);
        this.map = new MyCubeMap(this);
        this.bird = new MyBird(this);
        this.displayLightning = false;
        this.branches = [
            new MyTreeBranch(this),
            new MyTreeBranch(this),
            new MyTreeBranch(this),
            new MyTreeBranch(this)
        ];
        this.nest = new MyNest(this);

        //Objects connected to MyInterface
        this.axiom = /*"F--F--F";*/  "X"; //
        this.ruleF = /*"F+F--F+F"; */ "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        this.scaleFactorDois = 1;
        this.speedFactor = 1;
        this.lSystem = new MyLSPlant(this);

        this.doGenerate = function () {
            this.lSystem.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][x]+X", "F[+X]-X", "​F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[2].setPosition(0, 1.5, -15, 1);
        this.lights[2].setAmbient(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setDiffuse(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setSpecular(240/255, 178/255, 4/255, 1.0);
        this.lights[2].setLinearAttenuation(0.8);
        this.lights[2].disable();
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(0, 100, 90), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    update(t){
        t *= this.speedFactor;
        this.bird.updateWings(t);
        this.bird.update(t);
        this.height = Math.sin(t / 125) / 2 ;
        if(this.displayLightning){
            this.lightning.update(t);
        }
        this.checkKeys(t);
        this.bird.pickABranch(t);
    }

    checkKeys(t) {
        var text="Keys pressed: ";
        var keysPressed=false;
        
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            this.bird.accelerate(this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            this.bird.accelerate(-this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" A ";
            keysPressed=true;
            this.bird.turn(0.05);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" D ";
            keysPressed=true;
            this.bird.turn(-0.05);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            keysPressed=true;
            this.bird.reset();
            this.speedFactor = 1;
        }
        if(this.gui.isKeyPressed("KeyL")){
            text+=" L ";
            keysPressed=true;
            if(!this.displayLightning){
                this.lightning = new MyLightning(this);
                this.lightning.startAnimation(t);
                this.displayLightning = true;
            }
        }
        if(this.gui.isKeyPressed("KeyP")) {
            text+=" P ";
            keysPressed=true;
            this.bird.down = true;
        }

        if (keysPressed) {
            console.log(text);
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
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        //Applying cubemap
        //this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.pushMatrix();
        this.translate(0.5, 0.5, 0.5);
        this.scale(60, 60, 60);
        this.translate(0, 0.485, 0);
        this.cubeMap.apply();
        this.map.display();
        this.popMatrix()
        
        //Applying plane
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 15);
        this.plane.display();
        this.popMatrix();
        
        //Applying the house
        this.pushMatrix();
        this.translate(-6.5,2.7,-6);
        this.scale(3, 3, 3);
        this.house.display();
        this.popMatrix();
        
        //Applying the bird
        this.pushMatrix();
        this.translate(0, 15 + this.height, 0);
        this.scale(this.scaleFactorDois, this.scaleFactorDois, this.scaleFactorDois);
        this.bird.display();
        this.popMatrix();

        //Applying the branches
        this.pushMatrix();
        this.rotate(Math.PI/2, 1, 0.5, 0);
        this.translate(-5, 5, -4.5);
        this.branches[0].display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2, 1, -0.5, 0);
        this.translate(12, 3.5, -9);
        this.branches[1].display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2, 1, 0.3, 0);
        this.translate(-11, -5, -8);
        this.branches[2].display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2, 1, 0, 0);
        this.translate(6.8, -12, -3.4);
        this.branches[3].display();
        this.popMatrix();

        //Applying the nest
        this.pushMatrix();
        this.translate(0, 4, 0);
        this.nest.display();
        this.popMatrix();

        //Applying lightning
        if(this.displayLightning){
            this.pushMatrix();
            this.translate(5,27,-8);
            this.rotate(Math.PI, 1, 0, 0);
            this.lightText.apply();
            this.lightning.display();
            this.popMatrix();
        }

        //Applying trees
        this.pushMatrix();
        this.translate(5,2,3);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7,2,5);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7,2,3);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(9,2,5);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(6,1,1);
        this.rotate(Math.PI/4,0,1,0);
        this.pushMatrix();
        this.translate(5,2,3);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7,2,5);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7,2,3);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(9,2,5);
        this.scale(1.5, 2, 1.5);
        this.lSystem.display();
        this.popMatrix();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}