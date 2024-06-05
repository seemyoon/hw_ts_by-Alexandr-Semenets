var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
var array1 = [];
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        array1.push(i);
    }
}
console.log(array1);
//     b. заповнити його 50 непарними числами за допомоги циклу.
var array2 = [];
var y = 1;
while (y <= 50) {
    if (y % 2 !== 0) {
        array2.push(y);
    }
    y++;
}
console.log(array2);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
var array3 = [];
var random = Math.round(Math.random() * 20);
console.log(random);
var z = 1;
while (z < random) {
    array3[array3.length] = z;
    z++;
}
console.log(array3);
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
var array4 = [];
var random2 = Math.round(Math.random() * 1000);
if (random2 > 8 && random2 < 732) {
    array4.push(random2);
}
console.log("--------");
console.log(array4);
// 2. Вивести за допомогою console.log кожен третій елемент
for (var i = 0; i <= 12; i = i + 3) {
    console.log(i);
}
console.log("//3");
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (var i = 0; i < 30; i = i + 3) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
var newArr = [];
for (var i = 0; i < 30; i = i + 3) {
    if (i % 2 === 0) {
        newArr[newArr.length] = i;
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("//5");
var arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (var i = 0; i <= arr5.length; i++) {
    if (arr5[i + 1] % 2 === 0) {
        console.log(arr5[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
var arr6 = [100, 250, 50, 168, 120, 345, 188];
var sum = 0;
for (var _i = 0, arr6_1 = arr6; _i < arr6_1.length; _i++) {
    var number = arr6_1[_i];
    sum = sum + number;
}
var result = sum / arr6.length;
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
var randomNumbers = [12, 45, 67, 89, 23, 56, 78, 34, 90, 21];
var newRandomNumbers = [];
for (var _a = 0, randomNumbers_1 = randomNumbers; _a < randomNumbers_1.length; _a++) {
    var randomNumber = randomNumbers_1[_a];
    newRandomNumbers.push(randomNumber * 5);
}
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
var arr7 = [213, 345, "hello", false, { name: "Ivan", age: 45 }, 90];
var newArr7 = [];
for (var _b = 0, arr7_1 = arr7; _b < arr7_1.length; _b++) {
    var elem = arr7_1[_b];
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
console.log("//8");
var UsersWithId = /** @class */ (function () {
    function UsersWithId(id, name, age, status) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
    return UsersWithId;
}());
var CitiesWithId = /** @class */ (function () {
    function CitiesWithId(user_id, country, city) {
        this.user_id = user_id;
        this.country = country;
        this.city = city;
    }
    return CitiesWithId;
}());
var usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];
var citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];
var UsersWithCities = /** @class */ (function (_super) {
    __extends(UsersWithCities, _super);
    function UsersWithCities(id, name, age, status, address) {
        var _this = _super.call(this, id, name, age, status) || this;
        _this.address = address;
        _this.address = address;
        return _this;
    }
    return UsersWithCities;
}(UsersWithId));
var usersWithCities = usersWithId.map(function (user) {
    var address = citiesWithId.filter(function (city) { return city.user_id === user.id; });
    return new UsersWithCities(user.id, user.name, user.age, user.status, address[0]);
});
console.log("///=====////===///");
console.log(usersWithCities);
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
