const birth_year = 1994;
let birth_month = 7;

const current_month = new Date().getMonth();
let current_year = new Date().getFullYear();

current_year -= 1;
let age = current_year - birth_year;

console.log(`Patient's age: ${age}`);

if(birth_month >= current_month){
    age++;
}

console.log(`Patient's Accurate Age: ${age}`);

