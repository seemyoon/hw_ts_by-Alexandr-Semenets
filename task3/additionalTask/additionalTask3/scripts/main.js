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
for (var i_1 = 1; i_1 <= 50; i_1++) {
    if (i_1 % 2 === 0) {
        array1.push(i_1);
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
for (var i_2 = 0; i_2 <= 12; i_2 = i_2 + 3) {
    console.log(i_2);
}
console.log("//3");
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (var i_3 = 0; i_3 < 30; i_3 = i_3 + 3) {
    if (i_3 % 2 === 0) {
        console.log(i_3);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
var newArr = [];
for (var i_4 = 0; i_4 < 30; i_4 = i_4 + 3) {
    if (i_4 % 2 === 0) {
        newArr[newArr.length] = i_4;
    }
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("//5");
var arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (var i_5 = 0; i_5 <= arr5.length; i_5++) {
    if (arr5[i_5 + 1] % 2 === 0) {
        console.log(arr5[i_5]);
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
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
var randomNumbers2 = [12, 45, 67, 89, 23, 56, 78, 34, 90, 21];
for (var _c = 0, randomNumbers2_1 = randomNumbers2; _c < randomNumbers2_1.length; _c++) {
    var number = randomNumbers2_1[_c];
    if (number % 2 === 0) {
        console.log(number);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
var randomNumbers3 = randomNumbers2.reverse();
var newRandomNumbers3 = [];
for (var _d = 0, randomNumbers3_1 = randomNumbers3; _d < randomNumbers3_1.length; _d++) {
    var randomNumber3 = randomNumbers3_1[_d];
    newRandomNumbers3.push(randomNumber3);
}
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
var arr8 = ['a', 'b', 'c'];
var word = "";
for (var i_6 = 0; i_6 < arr8.length; i_6++) {
    word += arr8[i_6];
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
var word2 = "";
var i = 0;
while (i < arr8.length) {
    word2 += arr8[i];
    i++;
}
console.log(word2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
var word3 = "";
for (var _e = 0, arr8_1 = arr8; _e < arr8_1.length; _e++) {
    var elem = arr8_1[_e];
    word3 += elem;
}
console.log(word3);
console.log("//////////////////////////////////////////////////");
// Func typing
// return void; und; num;str;boolean (par: num;str;boolean; und)
var func = function (msg) {
    console.log(msg);
};
func("hello");
var func2 = function (type) {
    console.log(type);
};
func2(undefined);
var func3 = function (type) {
    return type;
};
console.log(func3(true));
var func4 = function (type) {
    return type + "";
};
console.log(func4(3));
// arr (generic && simple variant)
var arr = [1234, 45, 56, 57];
console.log(arr);
var arrGeneric = [3, 12, 435, 7645];
console.log(arrGeneric);
// variable (num;str;boolean;und)
var variable1 = 3;
console.log(variable1);
var variable2 = "fegdgfb";
console.log(variable2);
var variable3 = false;
console.log(variable3);
var variable4 = undefined;
console.log(variable4);
//obj (?: && simple variant)
var obj1 = { name: "Alexandr", age: 31, status: false };
console.log(obj1);
var obj2 = { name: "Paul", age: 12 };
// arr+objs (simple)
var arrWithObj = [{ name: "Titanik", genre: "drama" }];
console.log(arrWithObj);
// dom (5 examples), the last examples with func ; 1 method + domvxonst
var func5 = function (x, y) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    var span = document.createElement("span");
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    y.appendChild(p);
    y.appendChild(div);
    p.innerText = x;
    div.innerText = x;
};
func5("fghjkl", document.body);
// fetch
var func6 = function () {
    return fetch("https://jsonplaceholder.typicode.com/posts/json")
        .then(function (res) { return res.json(); })
        .then(function (elem) {
        return elem;
    });
};
console.log(func6);
var func7 = function () {
    return fetch("https://jsonplaceholder.typicode.com/posts/json")
        .then(function (res) { return res.json(); })
        .then(function (elem) {
        return elem;
    });
};
console.log(func7);
//class simple
var Users = /** @class */ (function () {
    function Users(id, name, age, status) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
    return Users;
}());
var user = new Users(2, "Dima", 35, true);
// extends (without modif and with modif)
var Custom = /** @class */ (function (_super) {
    __extends(Custom, _super);
    function Custom(id, name, age, status, access) {
        var _this = _super.call(this, id, name, age, status) || this;
        _this.access = access;
        _this.access = access;
        return _this;
    }
    return Custom;
}(Users));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, age, status, isStudent) {
        var _this = _super.call(this, id, name, age, status) || this;
        _this.isStudent = isStudent;
        _this.isStudent = isStudent;
        return _this;
    }
    return Student;
}(Users));
var student = new Student(2, "Dima", 35, true, true);
// to add class template => then add a new simple obj and class obj
var arrUsers = [
    {
        id: 1,
        name: "Alex",
        age: 31,
        status: false
    }, {
        id: 2,
        name: "Paul",
        age: 32,
        status: false
    }, {
        id: 3,
        name: "Paul",
        age: 20,
        status: false,
        isStudent: true,
    }, {
        id: 4,
        name: "Paul",
        age: 30,
        status: false,
        access: true,
    },
    new Student(2, "Paul", 32, false, true),
    new Custom(2, "Paul", 32, false, true)
];
console.log(arrUsers);
var Animal = /** @class */ (function () {
    function Animal(id, name) {
        this.id = id;
        this.name = name;
    }
    return Animal;
}());
var KindOfAnimals = /** @class */ (function (_super) {
    __extends(KindOfAnimals, _super);
    function KindOfAnimals(id, name, kind) {
        var _this = _super.call(this, id, kind) || this;
        _this.kind = kind;
        return _this;
    }
    return KindOfAnimals;
}(Animal));
var arrAnimals = [
    {
        id: 1,
        name: "Murka"
    },
    {
        id: 2,
        name: "Spayk"
    }, {
        id: 3,
        name: "Sky",
        kind: "dog"
    },
    new KindOfAnimals(3, "Vas'ka", "cow")
];
console.log("class as inherit + instanceof");
var animals = function (user) {
    if (user instanceof Users) {
        var student_1 = user;
        student_1.isStudent = true;
        return student_1;
    }
};
console.log(animals(user));
//“?” (optional func)
var House = /** @class */ (function () {
    function House(id, size) {
        this.id = id;
        this.size = size;
    }
    House.prototype.light = function () {
        console.log("Turn off");
    };
    return House;
}());
var arrHouses = [{
        id: 1,
        size: "big"
    }, {
        id: 2,
        size: "small"
    },];
// method overloading
var Car = /** @class */ (function () {
    function Car(model, quantity) {
        this.model = model;
        this.quantity = quantity;
    }
    Car.prototype.speed = function (num) {
        return "Speed: ".concat(num);
    };
    return Car;
}());
var car = new Car("BMW", 23);
console.log(car);
console.log(car.speed(423));
var CarWithDriver = /** @class */ (function (_super) {
    __extends(CarWithDriver, _super);
    function CarWithDriver(model, quantity, driver) {
        var _this = _super.call(this, model, quantity) || this;
        _this._driver = driver;
        return _this;
    }
    CarWithDriver.prototype.speed = function (num) {
        return "Speed: ".concat(num);
    };
    Object.defineProperty(CarWithDriver.prototype, "isDriver", {
        get: function () {
            if (this._driver) {
                return ("driver present");
            }
            else {
                return ("driver doesn't present");
            }
        },
        set: function (value) {
            this._driver = value;
        },
        enumerable: false,
        configurable: true
    });
    return CarWithDriver;
}(Car));
console.log(car.speed(553));
var carWithDriver = new CarWithDriver("Mers", 234, false);
console.log(carWithDriver.isDriver);
carWithDriver.isDriver = true;
console.log(carWithDriver.isDriver);
//Private field Protected field Public field
//getters/setters (OOP) -1 using parentheses
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 0] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
})(Gender || (Gender = {}));
var Workers = /** @class */ (function () {
    function Workers(id, name, profesion, gender) {
        this._id = id;
        this.name = name;
        this.profesion = profesion;
        this.gender = gender;
    }
    Object.defineProperty(Workers.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            if (value > 1) {
                this._id = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Workers;
}());
var workers = new Workers(1, "Ben", "doctor", Gender.MALE);
console.log(workers);
workers.id = -1;
console.log(workers);
workers.id = 3;
console.log(workers.id);
console.log(workers.gender);
//abstract /simple classes/func with abstract
var Language = /** @class */ (function () {
    function Language(id, language) {
        this.id = id;
        this.language = language;
        this.id = id;
        this.language = language;
    }
    return Language;
}());
var AnotherLanguage = /** @class */ (function (_super) {
    __extends(AnotherLanguage, _super);
    function AnotherLanguage(id, language) {
        return _super.call(this, id, language) || this;
    }
    AnotherLanguage.prototype.write = function () {
        return "\u042F \u043D\u0430\u043F\u0438\u0441\u0430\u043B \u044D\u0442\u043E \u043D\u0430 ".concat(this.language);
    };
    return AnotherLanguage;
}(Language));
var lang2 = new AnotherLanguage(1, "русском");
console.log(lang2.write());
var AnotherLanguage2 = /** @class */ (function (_super) {
    __extends(AnotherLanguage2, _super);
    function AnotherLanguage2(id, language) {
        return _super.call(this, id, language) || this;
    }
    AnotherLanguage2.prototype.write = function () {
        return "\u042F \u043D\u0430\u043F\u0438\u0441\u0430\u0432 \u0446\u0435 ".concat(this.language);
    };
    return AnotherLanguage2;
}(Language));
var lang3 = new AnotherLanguage2(2, "українською");
console.log(lang3.write());
var AnotherLanguage3 = /** @class */ (function (_super) {
    __extends(AnotherLanguage3, _super);
    function AnotherLanguage3(id, language) {
        return _super.call(this, id, language) || this;
    }
    AnotherLanguage3.prototype.write = function () {
        return "I write that in ".concat(this.language, " language.");
    };
    return AnotherLanguage3;
}(Language));
var lang = new AnotherLanguage3(3, "English");
console.log(lang.write());
function foo(lang) {
    return lang.write();
}
console.log("//////");
console.log(foo(lang3));
console.log(foo(lang2));
console.log(foo(lang));
//Interface
var Major;
(function (Major) {
    Major[Major["scholar"] = 0] = "scholar";
    Major[Major["principal"] = 1] = "principal";
    Major[Major["teacher"] = 2] = "teacher";
})(Major || (Major = {}));
var teacher = {
    name: "Mrs. Anderson", age: 30, major: Major.teacher, experience: 4, whoAmI: function (major) {
        return "I'm a ".concat(major);
    }
};
console.log(teacher);
console.log(teacher.whoAmI(Major[teacher.major]));
//Implements
//Type
