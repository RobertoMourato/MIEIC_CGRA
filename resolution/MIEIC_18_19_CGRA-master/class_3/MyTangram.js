class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        //square
        this.diamondGreen = new MyDiamond(scene);
        //medium triangle
        this.trianglePink = new MyTriangle(scene);
        //small triangle
        this.triangleRed = new MyTriangleSmall(scene);
        this.trianglePurple = new MyTriangleSmall(scene);
        //big triangle
        this.triangleBlue = new MyTriangleBig(scene);
        this.triangleOrange = new MyTriangleBig(scene);
        //parallelogram
        this.parallelogramYellow = new MyParallelogram(scene);
        this.green = new CGFappearance(scene);
        this.green.setAmbient(50 / 255, 205 / 255, 50 / 255, 1.0);
        this.green.setDiffuse(50 / 400, 205 / 400, 50 / 400, 1.0);
        this.green.setSpecular(50 / 255, 205 / 255, 50 / 255, 0.5);
        this.green.setShininess(10.0);
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(255 / 255, 182 / 255, 193 / 255, 1.0);
        this.pink.setDiffuse(255 / 400, 182 / 400, 193 / 400, 1.0);
        this.pink.setSpecular(255 / 255, 182 / 255, 193 / 255, 0.5);
        this.pink.setShininess(10.0);
        this.red = new CGFappearance(scene);
        this.red.setAmbient(220 / 255, 20 / 255, 60 / 255, 1.0);
        this.red.setDiffuse(220 / 400, 20 / 400, 60 / 400, 1.0);
        this.red.setSpecular(220 / 255, 20 / 255, 60 / 255, 0.5);
        this.red.setShininess(10.0);
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(138 / 255, 43 / 255, 226 / 255, 1.0);
        this.purple.setDiffuse(138 / 400, 43 / 400, 226 / 400, 1.0);
        this.purple.setSpecular(138 / 255, 43 / 255, 226 / 255, 0.5);
        this.purple.setShininess(10.0);
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0 / 255, 191 / 255, 255 / 255, 1.0);
        this.blue.setDiffuse(0 / 400, 191 / 400, 255 / 400, 1.0);
        this.blue.setSpecular(0 / 255, 191 / 255, 255 / 255, 0.5);
        this.blue.setShininess(10.0);
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(255 / 255, 165 / 255, 0 / 255, 1.0);
        this.orange.setDiffuse(255 / 400, 165 / 400, 0 / 400, 1.0);
        this.orange.setSpecular(255 / 255, 165 / 255, 0 / 255, 0.5);
        this.orange.setShininess(10.0);
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(255 / 255, 215 / 255, 0 / 255, 1.0);
        this.yellow.setDiffuse(255 / 400, 215 / 400, 0 / 400, 1.0);
        this.yellow.setSpecular(255 / 255, 215 / 255, 0 / 255, 0.5);
        this.yellow.setShininess(10.0);
    }

    display(){
        // ---- BEGIN Primitive drawing section

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([2, 1.75, 0]));
        this.scene.multMatrix(rotate_Z(45 - 17));
        //this.green.apply();
        this.scene.customMaterial.apply();
        this.diamondGreen.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(rotate_Z(270));
        this.pink.apply();
        this.trianglePink.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-3.83, -0.2, 0]));
        this.red.apply();
        this.triangleRed.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-2.5, 1.5, 0]));
        this.scene.multMatrix(rotate_Z(-45));
        this.scene.multMatrix(translation([-0.5, 0, 0]));
        this.purple.apply();
        this.trianglePurple.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([2, -1, 0]));
        this.blue.apply();
        this.triangleBlue.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translation([-1.5, 0.5, 0]));
        this.scene.multMatrix(rotate_Z(135));
        this.scene.multMatrix(translation([-0.13, 0, 0]));
        this.orange.apply();
        this.triangleOrange.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(rotate_X(180));
        this.scene.multMatrix(translation([2, -1, 0]));
        this.scene.multMatrix(translation([Math.sqrt(2) * 0.3, Math.sqrt(2) * 0.3, 0]));
        this.yellow.apply();
        this.parallelogramYellow.display();
        this.scene.popMatrix();

    }
    updateBuffers (){

    }

    enableNormalViz(){
        this.diamondGreen.enableNormalViz();
        this.trianglePink.enableNormalViz();
        this.triangleRed.enableNormalViz();
        this.trianglePurple.enableNormalViz();
        this.triangleBlue.enableNormalViz();
        this.triangleOrange.enableNormalViz();
        this.parallelogramYellow.enableNormalViz();
    }
    disableNormalViz(){
        this.diamondGreen.disableNormalViz();
        this.trianglePink.disableNormalViz();
        this.triangleRed.disableNormalViz();
        this.trianglePurple.disableNormalViz();
        this.triangleBlue.disableNormalViz();
        this.triangleOrange.disableNormalViz();
        this.parallelogramYellow.disableNormalViz();
    }
}
