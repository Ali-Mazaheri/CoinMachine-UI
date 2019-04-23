export class MoneyModel {

    constructor(public penny: number = 0, public nickel: number = 0, public dime: number = 0, public quarter: number = 0) { }
    
    getAmount(): number {
        let val = 0.01 * this.penny +
            0.05 * this.nickel +
            0.1 * this.dime +
            0.25 * this.quarter;
        
        return parseInt( (val *100).toString())  /100;
    }

    clear() {
        this.penny = 0;
        this.nickel = 0;
        this.dime = 0;
        this.quarter = 0;
    }

}

