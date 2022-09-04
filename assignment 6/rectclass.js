/*1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.*/
class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    area(){
       let  area1=this.height*this.width;
       console.log(`width of rectangle is ${this.width}`);
       console.log(`height of rectangle is ${this.height}`);
       console.log(`Area of rectangle is ${area1}`);
    }
}
class Square extends Rectangle{
    constructor(height,width, side){
    super(height,width);
        this.height=height;
        this.width=width;
        this.side=side;
}

area(){
    let  area1=this.height*this.width;
       console.log(`width of rectangle is ${this.width}`);
       console.log(`height of rectangle is ${this.height}`);
       console.log(`Area of rectangle is ${area1}`);
       
    console.log(`side of Square is ${this.side}`);
    let area= this.side*this.side;
    
    console.log("area of square is ",area);
    
}
}
 let Square1= new Square(2,8,5);
Square1.area();