// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}
console.log(square(3, 4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2(pi, radius) {
    var radiusSquared = Math.pow(radius, 2);
    var square = pi * radiusSquared;
    // console.log(square)
    return { radiusSquared: radiusSquared, square: square };
}
var result = square2(Math.floor((Math.PI) * 100) / 100, 5);
console.log(result);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πR(H + R)
function square3(h, r, pi) {
    var height = h;
    var radius = r;
    var piValue = pi;
    var square = 2 * pi * r * (h + r);
    return { square: square, height: height, radius: radius, piValue: piValue };
}
var result2 = square3(7, 3, Math.floor((Math.PI) * 100) / 100);
console.log(result2);
// - створити функцію яка приймає масив та виводить кожен його елемент
var mixedArray = [42, "Hello, world!", true, { name: "John", age: 30 }, [1, 2, 3], null, undefined,];
var arrFunc = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var mixedArrayElement = array_1[_i];
        console.log(mixedArrayElement);
    }
};
arrFunc(mixedArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
var textFunc = function (text) {
    document.write("<p>".concat(text, "</p>"));
};
textFunc("My name is John");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
var liFunc = function (text) {
    document.write("\n        <ul>\n            <li>".concat(text, "</li>\n            <li>").concat(text, "</li>\n            <li>").concat(text, "</li>\n        </ul>\n    "));
};
liFunc("Some text");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
var liFunc2 = function (text, quantity) {
    document.write("<ul>");
    for (var i = 0; i < quantity; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write("</ul>");
};
liFunc2("Cool", 20);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
var mixedArray2 = [42, "Hello, world!", true, false, "JavaScript", 234, 1276];
var liFunc3 = function (array) {
    document.write("<ul>");
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var elem = array_2[_i];
        document.write("<li>".concat(elem, "</li>"));
    }
    document.write("</ul>");
};
liFunc3(mixedArray2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
var usersArray = [{ id: 1, name: "John", age: 30 }, { id: 2, name: "Alice", age: 25 }, {
        id: 3, name: "Bob", age: 35
    }, { id: 4, name: "Emily", age: 28 }, { id: 5, name: "Michael", age: 40 }];
var userFunc = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        document.write("\n            <div>\n                <h2>Id: ".concat(user["id"], "</h2>\n                <h2>Name: ").concat(user["name"], "</h2>\n                <h2>Age: ").concat(user["age"], "</h2>\n            </div>\n                "));
    }
};
userFunc(usersArray);
// - створити функцію яка повертає найменьше число з масиву
var numbersArray = [10, 25, 37, 42, 56];
var numArr2 = numbersArray[0];
var numberFunc = function () {
    for (var _i = 0, numbersArray_1 = numbersArray; _i < numbersArray_1.length; _i++) {
        var numberArray = numbersArray_1[_i];
        console.log(numberArray);
        if (numberArray < numArr2) {
            numArr2 = numberArray;
        }
    }
    return numArr2;
};
console.log(numberFunc());
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// array is above
var arr = [1, 2, 10];
function sum(array) {
    var newNumberArray = 0;
    console.log(newNumberArray);
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var numberArray = array_3[_i];
        newNumberArray += numberArray;
        console.log(numberArray = +numberArray);
    }
    return newNumberArray;
}
console.log(sum(arr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
var arraySwap = [11, 22, 33, 44];
function swap(arr, index1, index2) {
    var temporaryValue = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temporaryValue;
    return arr;
}
swap(arraySwap, 0, 1);
console.log(arraySwap);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    var userEnter = 0;
    while (userEnter < currencyValues.length) {
        if (currencyValues[userEnter].currency === exchangeCurrency) {
            return console.log(sumUAH / currencyValues[userEnter].value + " " + exchangeCurrency);
        }
        userEnter++;
    }
}
exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
