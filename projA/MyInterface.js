/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene,'displayTextures').name('Display Textures').onChange(this.scene.SetTextures.bind(this.scene));
        this.gui.add(this.scene,'DayMode_NightMode').name('Time Mode').onChange(this.scene.SetDayTime.bind(this.scene));
        return true;
    }
}