/*1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.
eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);
obj.getVolume();*/
class cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolume(){
        let PI=3.142;
        let volume=PI*this.radius*this.radius*this.height
        console.log(`radius of cylinder is ${this.radius}`);
        console.log(`height of cylinder is ${this.height}`);
        console.log(`volume of cylinder is ${volume}`);
    }
}
class sphere{
    constructor(radius){
        this.radius=radius;
    }
    getvolume(){
        let PI=3.142;
        let volume=4/3*PI*this.radius*this.radius*this.radius;
        console.log(`radius of sphere is ${this.radius}`);
        console.log(`volume of sphere is ${volume}`);
    }
}
class cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolume(){
        let PI=3.142;
         let volume=(PI*this.radius*this.radius*this.height)/3;
        console.log(`radius of cone is ${this.radius} and height is ${this.height}`);
        console.log(`volume of cone is ${volume}`);
    }
}

let cylinder1= new cylinder(2,5);
cylinder1.getvolume();

let sphere1=new sphere(2);
sphere1.getvolume();

let cone1=new cone(3,5);
cone1.getvolume();