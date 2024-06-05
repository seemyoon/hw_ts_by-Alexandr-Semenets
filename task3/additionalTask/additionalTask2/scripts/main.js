console.log("start");
// --створити масив з:
// - з 5 числових значень
var array1 = [132, 2132, 33, 44, 53353];
// - з 5 стічкових значень
var array2 = ["Alexandr", "Ivan", "Max", "Andrew", "Petro"];
// - з 5 значень стрічкового, числового та булевого типу
var array3 = [32, "Ivan", false, "game", 98];
// - та вивести його в консоль
console.log(array1);
console.log(array2);
console.log(array3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
var array4 = [];
array4[0] = false;
array4[1] = "salad";
array4[2] = 82;
array4[3] = 27;
array4[4] = true;
console.log(array4);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
var array5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
var i = 0;
while (i < array5.length) {
    console.log(array5[i]);
    i++;
}
// 2. перебрати його циклом for
for (var j = 0; j < array5.length; j++) {
    console.log(array5[j]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
var x = 0;
while (x < array5.length) {
    if (x % 2) {
        console.log(array5[x]);
    }
    x++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (var y = 0; y < array5.length; y++) {
    if (y % 2) {
        console.log(array5[y]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
var z = 0;
while (z < array5.length) {
    if (!(array5[z] % 2)) {
        console.log(array5[z]);
    }
    z++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (var q = 0; q < array5.length; q++) {
    if (!(array5[q] % 2)) {
        console.log(array5[q]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (var _i = 0, array5_1 = array5; _i < array5_1.length; _i++) {
    var value = array5_1[_i];
    if (!(value % 3)) {
        console.log(value);
    }
}
// 8. вивести масив в зворотньому порядку.
var newArray = [];
for (var n = array5.length - 1; n > 0; n--) {
    var changeArray = array5[n];
    console.log(changeArray);
    newArray.push(changeArray);
}
console.log(newArray);
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
var i2 = array5.length - 1;
while (i2 >= 0) {
    console.log(array5[i2]);
    i2--;
}
// 2
for (var j2 = array5.length - 1; j2 >= 0; j2--) {
    console.log(array5[j2]);
}
// 3
var x2 = array5.length - 1;
while (x2 > 0) {
    if (x2 % 2) {
        console.log(array5[x2]);
    }
    x2--;
}
// 4
for (var y = array5.length - 1; y > 0; y--) {
    if (y % 2) {
        console.log(array5[y]);
    }
}
// 5
var z2 = array5.length - 1;
while (z2 >= 0) {
    if (!(array5[z2] % 2)) {
        console.log(array5[z2]);
    }
    z2--;
}
// 6
for (var q2 = array5.length - 1; q2 >= 0; q2--) {
    if (!(array5[q2] % 2)) {
        console.log(array5[q2]);
        console.log(q2);
    }
}
// 7
for (var _a = 0, array5_2 = array5; _a < array5_2.length; _a++) {
    var value = array5_2[_a];
    if (!(value % 3)) {
        console.log(value);
    }
}
for (var value = array5.length - 1; value >= 0; value--) {
    if (!(value % 3)) {
        console.log(array5[value]);
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
var numbersArray = [42, 3.14, 100, -5, 0, 1.618, -273, 7.777, 123456789, -987654321];
for (var _b = 0, numbersArray_1 = numbersArray; _b < numbersArray_1.length; _b++) {
    var number = numbersArray_1[_b];
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
var stringsArray = [
    "Hello",
    "World",
    "OpenAI",
    "JavaScript",
    "Programming",
    "Language",
    "Model",
    "ChatGPT",
    "String",
    "Array"
];
for (var _c = 0, stringsArray_1 = stringsArray; _c < stringsArray_1.length; _c++) {
    var stringValue = stringsArray_1[_c];
    console.log(stringValue);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
var mixedArray = [
    42,
    "Hello, world!",
    true,
    { name: "John", age: 30 },
    [1, 2, 3],
    null,
    undefined,
    23,
    true,
    "Coding"
];
for (var _d = 0, mixedArray_1 = mixedArray; _d < mixedArray_1.length; _d++) {
    var mixedArrayElement = mixedArray_1[_d];
    console.log(mixedArrayElement);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
var mixedArray2 = [
    42,
    "Hello, world!",
    true,
    3.14,
    "JavaScript",
    false,
    -10,
    "OpenAI",
    true,
    0
];
for (var _e = 0, mixedArray2_1 = mixedArray2; _e < mixedArray2_1.length; _e++) {
    var mixedArray2Element = mixedArray2_1[_e];
    if (typeof mixedArray2Element === "boolean") {
        console.log(mixedArray2Element);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (var _f = 0, mixedArray2_2 = mixedArray2; _f < mixedArray2_2.length; _f++) {
    var mixedArray2Element = mixedArray2_2[_f];
    if (typeof mixedArray2Element === "number") {
        console.log(mixedArray2Element);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (var _g = 0, mixedArray2_3 = mixedArray2; _g < mixedArray2_3.length; _g++) {
    var mixedArray2Element = mixedArray2_3[_g];
    if (typeof mixedArray2Element === "string") {
        console.log(mixedArray2Element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
var array6 = [];
array6[0] = "Jack";
array6[1] = 42;
array6[2] = true;
array6[3] = { name: "John", age: 30 };
array6[4] = [1, 2, 3];
array6[5] = null;
array6[6] = undefined;
array6[7] = false;
array6[8] = 45;
array6[9] = "Hello";
for (var _h = 0, array6_1 = array6; _h < array6_1.length; _h++) {
    var array6Element = array6_1[_h];
    console.log(array6Element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
    document.write("".concat(i_1, " "));
}
document.write("<br>"); // my additional
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (var i_2 = 0; i_2 < 100; i_2++) {
    console.log(i_2);
    document.write("".concat(i_2, " "));
}
document.write("<br>"); // my additional
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (var i_3 = 0; i_3 < 100; i_3 = i_3 + 2) {
    console.log(i_3);
    document.write("".concat(i_3, " "));
}
document.write("<br>"); // my additional
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (var i_4 = 0; i_4 < 100; i_4++) {
    if (!(i_4 % 2)) {
        console.log(i_4);
    }
    if (!(i_4 % 2)) {
        document.write("".concat(i_4, " "));
    }
}
document.write("<br>"); // my additional
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (var i_5 = 0; i_5 < 100; i_5++) {
    if (i_5 % 2) {
        console.log(i_5);
    }
    if (i_5 % 2) {
        document.write("".concat(i_5, " "));
    }
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
var books = [
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Classics"]
    },
    {
        title: "To Kill a Mockingbird ",
        pageCount: 281,
        authors: ["Harper Lee", "The second unknown author"],
        genres: ["Fiction", "Classics"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell"],
        genres: ["Fiction", "Dystopian"]
    },
    {
        title: "The Catcher in the Rye",
        pageCount: 277,
        authors: ["J.D. Salinger", "The second unknown author"],
        genres: ["Fiction"]
    }
];
// -знайти наібльшу книжку.
var theBiggestBook = books[0];
// console.log(theBiggestBook)
for (var _j = 0, books_1 = books; _j < books_1.length; _j++) {
    var book = books_1[_j];
    console.log(book.pageCount);
    if (book.pageCount > theBiggestBook.pageCount) {
        theBiggestBook = book;
    }
}
console.log(theBiggestBook);
// - знайти книжку/ки з найбільшою кількістю жанрів
var genreResult = [];
var theBiggestGenre = books[0];
for (var _k = 0, books_2 = books; _k < books_2.length; _k++) {
    var book = books_2[_k];
    if (book.genres.length > theBiggestGenre.genres.length) {
        theBiggestGenre = book;
    }
    else if (book.genres.length === theBiggestGenre.genres.length) {
        genreResult[genreResult.length] = book;
    }
    console.log(book.genres.length);
}
console.log(genreResult);
// - знайти книжку/ки з найдовшою назвою
var titleResult = [];
var theBiggestTitle = books[0];
for (var _l = 0, books_3 = books; _l < books_3.length; _l++) {
    var book = books_3[_l];
    console.log(book.title.length);
    if (book.title.length > theBiggestTitle.title.length) {
        theBiggestTitle = book;
    }
    else if (book.title.length === theBiggestTitle.title.length) {
        titleResult[titleResult.length] = book;
    }
}
console.log(titleResult);
// - знайти книжку/ки які писали 2 автори
var twoAuthors = [];
for (var _m = 0, books_4 = books; _m < books_4.length; _m++) {
    var book = books_4[_m];
    console.log(book.authors.length);
    if (book.authors.length === 2) {
        twoAuthors[twoAuthors.length] = book;
    }
}
console.log(twoAuthors.length);
// - знайти книжку/ки які писав 1 автор
var oneAuthor = [];
for (var _o = 0, books_5 = books; _o < books_5.length; _o++) {
    var book = books_5[_o];
    console.log(book.authors.length);
    if (book.authors.length === 1) {
        oneAuthor[oneAuthor.length] = book;
    }
}
console.log(oneAuthor);
