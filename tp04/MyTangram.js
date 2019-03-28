/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.diamond = new MyDiamond(scene);
        this.TriRet = new TriRet(scene);
        this.Paralelogramo = new Paralelogramo(scene);
        this.TriRetP = new TriRetP(scene);
        this.TriRetG = new TriRetG(scene);

        this.red = new CGFappearance(scene);
        this.red.setAmbient(255/255, 0/255, 0/255, 1.0);
        this.red.setDiffuse(255/ 400, 0 / 400, 0 / 400, 1.0);
        this.red.setSpecular(255/255, 0/255, 0/255, 0.5);
        this.red.setShininess(10.0);

        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(135/255, 45/255, 235/255, 1.0);
        this.purple.setDiffuse(135/400, 45/400, 235/400, 1.0);
        this.purple.setSpecular(135 / 255, 45 / 255, 235 / 255, 0.5);
        this.purple.setShininess(10.0);

        this.green = new CGFappearance(scene);
        this.green.setAmbient(55 / 255, 221 / 255, 71 / 255, 1.0);
        this.green.setDiffuse(55 / 400, 221 / 400, 71 / 400, 1.0);
        this.green.setSpecular(55 / 255, 221 / 255, 71 / 255, 0.5);
        this.green.setShininess(10.0);

        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(255 / 255, 127 / 255, 21 / 255, 1.0);
        this.orange.setDiffuse(255 / 400, 127 / 400, 21 / 400, 1.0);
        this.orange.setSpecular(255 / 255, 127 / 255, 21 / 255, 0.5);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(21 / 255, 132 / 255, 255 / 255, 1.0);
        this.blue.setDiffuse(21 / 400, 132 / 400, 255 / 400, 1.0);
        this.blue.setSpecular(21 / 255, 132 / 255, 255 / 255, 0.5);
        this.blue.setShininess(10.0);

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(249 / 255, 244 / 255, 32 / 255, 1.0);
        this.yellow.setDiffuse(249 / 400, 244 / 400, 32 / 400, 1.0);
        this.yellow.setSpecular(249 / 255, 244 / 255, 32 / 255, 0.5);
        this.yellow.setShininess(10.0);

        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(255 / 255, 125 / 255, 199 / 255, 1.0);
        this.pink.setDiffuse(255 / 400, 125 / 400, 199 / 400, 1.0);
        this.pink.setSpecular(255 / 255, 125 / 255, 199 / 255, 0.5);
        this.pink.setShininess(10.0);

        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }
    display(scene) {
        var tr = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -Math.sqrt(2) / 2, 3 * Math.sqrt(2) / 2, 0.0, 1.0];

        var tr1 = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, -Math.sqrt(2) - 1, 0.0, 1.0];

        var tr2 = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2 * Math.sqrt(2) + Math.sqrt(2) / 2, 3 * Math.sqrt(2) / 2, 0.0, 1.0];

        var tr3 = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            Math.sqrt(2), -(2 - Math.sqrt(2)), 0.0, 1.0];

        var tr4 = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            2 + Math.sqrt(2), Math.sqrt(2), 0.0, 1.0];

        var rot = [Math.cos(Math.PI * 45 / 180), Math.sin(Math.PI * 45 / 180), 0.0, 0.0,
        -Math.sin(Math.PI * 45 / 180), Math.cos(Math.PI * 45 / 180), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var rot1 = [Math.cos(Math.PI * (-135) / 180), Math.sin(Math.PI * (-135) / 180), 0.0, 0.0,
        -Math.sin(Math.PI * (-135) / 180), Math.cos(Math.PI * (-135) / 180), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var rot2 = [Math.cos(Math.PI * 90 / 180), Math.sin(Math.PI * 90 / 180), 0.0, 0.0,
        -Math.sin(Math.PI * 90 / 180), Math.cos(Math.PI * 90 / 180), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var rot3 = [Math.cos(Math.PI * (-90) / 180), Math.sin(Math.PI * (-90) / 180), 0.0, 0.0,
        -Math.sin(Math.PI * (-90) / 180), Math.cos(Math.PI * (-90) / 180), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var sc = [-1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(tr4);
        this.scene.multMatrix(rot3);
        this.pink.apply();
        this.TriRet.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(tr);
        this.scene.multMatrix(rot);
        //this.green.apply();
        //this.scene.tangramMaterial.setTexture(this.scene.texture4);
        this.tangramMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.multMatrix(tr3)
        this.scene.multMatrix(sc);
        this.scene.multMatrix(rot2);
        this.yellow.apply();
        this.Paralelogramo.display();
        this.scene.popMatrix();



        this.scene.pushMatrix();
        this.purple.apply();
        this.scene.multMatrix(tr1)
        this.TriRetP.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.multMatrix(tr2);
        this.scene.multMatrix(rot1)
        this.red.apply();
        this.TriRetP.display();
        this.scene.popMatrix()



        this.scene.pushMatrix();
        this.scene.multMatrix(rot);
        this.orange.apply();
        this.TriRetG.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.multMatrix(rot1);
        this.blue.apply();
        this.TriRetG.display();
        this.scene.popMatrix();

    }

    updateBuffers() {}

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.TriRet.enableNormalViz();
        this.Paralelogramo.enableNormalViz();
        this.TriRetP.enableNormalViz();
        this.TriRetG.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.TriRet.disableNormalViz();
        this.Paralelogramo.disableNormalViz();
        this.TriRetP.disableNormalViz();
        this.TriRetG.disableNormalViz();
    }

}

