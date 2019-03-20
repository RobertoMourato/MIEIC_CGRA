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
    }

    display(scene){
        // ---- BEGIN Primitive drawing section

        scene.pushMatrix();
        scene.multMatrix(translation([2, 1.75, 0]));
        scene.multMatrix(rotate_Z(45 - 17));
        this.diamondGreen.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(rotate_Z(270));
        this.trianglePink.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(translation([-3.83, -0.2, 0]));
        this.triangleRed.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(translation([-2.5, 1.5, 0]));
        scene.multMatrix(rotate_Z(-45));
        scene.multMatrix(translation([-0.5, 0, 0]));
        this.trianglePurple.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(translation([2, -1, 0]));
        this.triangleBlue.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(translation([-1.5, 0.5, 0]));
        scene.multMatrix(rotate_Z(135));
        scene.multMatrix(translation([-0.13, 0, 0]));
        this.triangleOrange.display();
        scene.popMatrix();

        scene.pushMatrix();
        scene.multMatrix(rotate_X(180));
        scene.multMatrix(translation([2, -1, 0]));
        scene.multMatrix(translation([Math.sqrt(2) * 0.3, Math.sqrt(2) * 0.3, 0]));
        this.parallelogramYellow.display();
        scene.popMatrix();

    }
}
