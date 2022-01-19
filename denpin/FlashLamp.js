class FlashLamp {
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    setBatery(newBatery){
        this.battery = newBatery;
    }
    getBateryInfor(){
        return this.battery.getEnergy();
    }

    light(){
        if (this.status){
            if (this.battery.getEnergy()>0){
                alert("den sang");
                this.battery.decreaseEnergy();
            }
            else {
                alert("Het dien");
            }
        }
        else {
            alert("Tat dien");
        }

    }
    turnOnOff(){
        this.status = !this.status;
    }
}
let pin1 = new Battery(2);
let pin2 = new Battery(12);

let den = new FlashLamp(true, pin1);
