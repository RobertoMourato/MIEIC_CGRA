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
            Math.sqrt(2), -(2-Math.sqrt(2)), 0.0, 1.0];

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

            scene.pushMatrix();
            scene.multMatrix(tr4);
            scene.multMatrix(rot3);
            this.TriRet.display();
            scene.popMatrix();
        
            scene.pushMatrix();
            scene.multMatrix(tr);
            scene.multMatrix(rot);
            this.diamond.display();
            scene.popMatrix();
        

        
            scene.pushMatrix();
            scene.multMatrix(tr3)
            scene.multMatrix(sc);
            scene.multMatrix(rot2);
            this.Paralelogramo.display();
            scene.popMatrix();
        

        
            scene.pushMatrix();
            scene.multMatrix(tr1)
            this.TriRetP.display();
            scene.popMatrix();
            scene.pushMatrix();
            scene.multMatrix(tr2);
            scene.multMatrix(rot1)
            this.TriRetP.display();
            scene.popMatrix()



            scene.pushMatrix();
            scene.multMatrix(rot);
            this.TriRetG.display();
            scene.popMatrix();
            scene.pushMatrix();
            scene.multMatrix(rot1);
            this.TriRetG.display();
            scene.popMatrix();
        
	}
}

