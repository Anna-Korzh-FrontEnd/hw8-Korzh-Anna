"use strict";

//1:

// let birthday = new Date(1989, 0, 17);
//
// console.log(birthday.toLocaleDateString());

//2:
//
// function getDiffDays(date1, date2){
//     const start = new Date (date1).getTime();
//     const end = new Date (date2).getTime();
//     if( isNaN(start) || isNaN(end)){
//         return console.error("Error: invalid date");
//     } else if (start > end){
//         return console.error("Error: your start date is later than end")
//     }
//     return Math.ceil(Math.abs(end - start)/(1000 * 3600 * 24));
// }
//
// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end

//3:

// function isWeekend(date) {
//
//     let day = new Date(date);
//     let dayOff = day.getDay();
//     if (dayOff === 0 || dayOff === 6) {
//         return true;
//
//     } else return false;
//
// } isWeekend()
//
// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


//4:

const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
}
console.log(JSON.stringify(person));

console.log(JSON.parse(JSON.stringify(person)));

const {
    fullName,
    address: {
        street,
        city,
        house
    },
} = person;

console.log(fullName);
console.log(street);
console.log(city);
console.log(house);


