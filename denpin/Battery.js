class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(newEnergy){
        this.energy = newEnergy;
    }
    decreaseEnergy(){
        this.energy --;
    }
}
