"use stict"
let mark=95;
switch(true){
    case  (mark<100 && mark>90): 
        console.log("congratulation you get S GRADE");
        break;
    case (mark<90 && mark>80):
        console.log("congratulation you get A GRADE");
        break;
    case (mark<80 && mark>70):
        console.log(" you get B GRADE");
        break;
    case (mark<70 && mark>60):
        console.log(" you get C GRADE");
        break;
    case (mark<60 && mark>50):
        console.log(" you get D GRADE");
        break;
    case (mark<50 && mark>40):
        console.log(" you get E GRADE");
        break;
    case (mark<40):
        console.log("you failed");
        break;
    default : 
        console.log("invalid mark");
        break;
}
