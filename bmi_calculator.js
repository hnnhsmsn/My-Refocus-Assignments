//to calculate BMI, The formula is BMI = kg/m2 where 
// kg is a person's weight in kilograms 
// m2 is their height in metres squared

var weight  = 60;
var height = 1.52;

let bmi = weight/Math.pow(height, 2);
console.log(bmi);