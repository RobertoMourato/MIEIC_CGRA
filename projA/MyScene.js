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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 3, 1);
        this.cylinder = new MyCylinder(this, 3, 1);
        this.tree = new MyTree(this, 1.3, 0.5, 1.8, 0.8, this.trunkTexture, this.treeTopTexture);
        this.treeRow = new MyTreeRowPatch(this, this.trunkTexture, this.treeTopTexture);
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkTexture, this.treeTopTexture);
        this.house = new MyHouse(this);
        this.hill = new MyVoxelHill(this, 4);

        //Objects connected to MyInterface
        this.displayPrism = false;
        this.displayCylinder = false;
        this.displayTree = false;
        this.displayTreeRow = false;
        this.displayTreeGroup = true;
        this.displayHouse =  false;
        this.displayHill = false;
        this.objectComplexity = 0.5;
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
        if(this.displayPrism) {
            this.prism.display();
        }
        if(this.displayCylinder) {
            this.cylinder.display();
        }
        if(this.displayTree) {
            this.tree.display();
        }
        if(this.displayTreeRow) {
            this.treeRow.display();
        }
        if(this.displayTreeGroup) {
            this.treeGroup.display();
        }
        if(this.displayHouse){
            this.house.display();
        }
        if(this.displayHill){
            this.hill.display();
        }

        // ---- END Primitive drawing section
    }
}