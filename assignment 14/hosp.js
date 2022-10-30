/*2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune*/
let hospital=[{ id:1,location:"pune",NOB:400,AOB:"yes"},
            {id:2,location:"mumbai",NOB:200,AOB:"yes"},
            { id:3,location:"sangmner",NOB:400,AOB:"no"},];
console.log("a) Number of Beds > 200");
let h1=hospital.filter((hosp)=>{
    return hosp.NOB>200;
});
console.log(h1);
console.log("b) Availability of Beds = Yes");
 let h2=hospital.filter((hosp)=>{
    return hosp.AOB="yes";
 });
 console.log(h2);

 console.log("c) Location = Pune");
 let h3=hospital.filter((hosp)=>{
    return hosp.location="pune";
 });
 console.log(h3);