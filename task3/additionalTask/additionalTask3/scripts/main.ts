// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
const array1: number[] = [];
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        array1.push(i);
    }
}
console.log(array1)
//     b. заповнити його 50 непарними числами за допомоги циклу.
const array2: number[] = [];
let y = 1;
while (y <= 50) {
    if (y % 2 !== 0) {
        array2.push(y);
    }
    y++
}
console.log(array2);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
const array3: number[] = []
let random: number = Math.round(Math.random() * 20)
console.log(random)
let z: number = 1;
while (z < random) {
    array3[array3.length] = z
    z++
}
console.log(array3)


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const array4: number[] = [];
const random2: number = Math.round(Math.random() * 1000);

if (random2 > 8 && random2 < 732) {
    array4.push(random2)
}
console.log("--------")
console.log(array4)
// 2. Вивести за допомогою console.log кожен третій елемент
for (let i: number = 0; i <= 12; i = i + 3) {
    console.log(i)
}
console.log("//3")
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i: number = 0; i < 30; i = i + 3) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const newArr: number[] = []
for (let i: number = 0; i < 30; i = i + 3) {
    if (i % 2 === 0) {
        newArr[newArr.length] = i
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("//5")
const arr5: number[] = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i: number = 0; i <= arr5.length; i++) {
    if (arr5[i + 1] % 2 === 0) {
        console.log(arr5[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const arr6: number[] = [100, 250, 50, 168, 120, 345, 188]
let sum: number = 0;
for (const number of arr6) {
    sum = sum + number;
}
const result: number = sum / arr6.length
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const randomNumbers: number[] = [12, 45, 67, 89, 23, 56, 78, 34, 90, 21];
const newRandomNumbers: number[] = []
for (const randomNumber of randomNumbers) {
    newRandomNumbers.push(randomNumber * 5)
}
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const arr7: any[] = [213, 345, "hello", false, {name: "Ivan", age: 45}, 90];
const newArr7: number[] = []
for (const elem of arr7) {
    if (typeof elem === "number") {
        newArr7.push(elem);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
console.log("//8")

class UsersWithId {
    public id: number;
    public name: string;
    public age: number;
    public status: boolean;

    constructor(id: number, name: string, age: number, status: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
}

class CitiesWithId {
    public user_id: number;
    public country: string;
    public city: string;

    constructor(user_id: number, country: string, city: string) {
        this.user_id = user_id;
        this.country = country;
        this.city = city;
    }
}

let usersWithId: UsersWithId[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId: CitiesWithId[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

class UsersWithCities extends UsersWithId {

    constructor(id: number, name: string, age: number, status: boolean, public address: CitiesWithId) {
        super(id, name, age, status);
        this.address = address;
    }
}
const usersWithCities: UsersWithCities[] = usersWithId.map(user => {
    const address = citiesWithId.filter(city => city.user_id === user.id);
    return new UsersWithCities(user.id, user.name, user.age, user.status, address[0]);
});
console.log("///=====////===///")
console.log(usersWithCities)
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.