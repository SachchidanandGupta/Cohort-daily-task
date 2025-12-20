class Car {
    constructor(speed,brand){
        this.brand = brand,
        this.speed = speed
        // this.drive = function drive(){
        //     console.log(this.brand,this.speed);
        // }
    }
    drive(){
        return this.brand + " " + this.speed
    }
}
 let c1 = new Car("hyndai","180km/hr");
let c2 = new  Car("Maruti","100km/hr")
