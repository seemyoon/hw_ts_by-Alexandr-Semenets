// Task 1: - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log
let firstVariable :string = 'hello';
const secondVariable: string = 'owu';
const thirdVariable: string = 'com';
const fourthVariable: string = 'ua';
const fifthVariable: number = 1;
const sixthVariable: number = 10;
const seventhVariable: number = -999;
const eighthVariable: number = 123;
const ninthVariable: number = 3.14;
const tenthVariable: number = 2.7;
const eleventhVariable: number = 16;
const twelfthVariable: boolean = true;
const thirteenthVariable: boolean = false;
console.log(firstVariable)
console.log(secondVariable)
console.log(thirdVariable)
console.log(fourthVariable)
console.log(fifthVariable)
console.log(sixthVariable)
console.log(seventhVariable)
console.log(eighthVariable)
console.log(ninthVariable)
console.log(tenthVariable)
console.log(eleventhVariable)
console.log(twelfthVariable)
console.log(thirteenthVariable)
// Task 2: - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну
// person (Не об'єкт, просто за допомоги конкатенації)
const firstName: string = `Alexandr`;
const middleName: string = `Semenets`;
const lastName: string = `Mykolayovich`;
// const person = `${firstName} ${middleName} ${lastName}`;
// Task 3: - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100;
// let b = '100'; let c = true;
let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// Task 4: Додаткове для тих хто цікавився prompt`oм - За допомогою 3х різних prompt() отримати 3 слова які
// являються вашими Імям, По-Батькові та роками. та вивести в консоль
const firstName2: string = prompt("Enter your first name");
const lastName2: string = prompt("Enter your last name");
const year: string = prompt("Enter your age");
console.log("Name:" + firstName2)
console.log("Last name:" + lastName2)
console.log("Year:" + year)
