console.log("//////////////////////////////////////////////////")
// Func typing
// return void; und; num;str;boolean (par: num;str;boolean; und)
const func = (msg: string): void => {
    console.log(msg)
}
func("hello")
const func2 = (type: undefined): undefined => {
    console.log(type)
}
func2(undefined)
const func3 = (type: boolean): boolean => {
    return type
}
console.log(func3(true));
const func4 = (type: number): string => {
    return type + ""
}
console.log(func4(3));
// arr (generic && simple variant)
const arr: number[] = [1234, 45, 56, 57]
console.log(arr)
const arrGeneric: Array<number> = [3, 12, 435, 7645]
console.log(arrGeneric)
// variable (num;str;boolean;und)
const variable1: number = 3
console.log(variable1)
const variable2: string = "fegdgfb"
console.log(variable2)
const variable3: boolean = false;
console.log(variable3)
const variable4: undefined = undefined;
console.log(variable4)
//obj (?: && simple variant)
const obj1: { name: string; age: number; status: boolean } = {name: "Alexandr", age: 31, status: false};
console.log(obj1)
const obj2: { name: string; age: number; status?: boolean } = {name: "Paul", age: 12}
// arr+objs (simple)
const arrWithObj: { name: string; genre: string; year?: number }[] = [{name: "Titanik", genre: "drama"}]
console.log(arrWithObj)
// dom (5 examples), the last examples with func ; 1 method + domvxonst
const func5 = (x: string, y: HTMLElement) => {
    const div: HTMLDivElement = document.createElement("div");
    const p: HTMLParagraphElement = document.createElement("p");
    const span: HTMLSpanElement = document.createElement("span");
    const h1: HTMLHeadingElement = document.createElement("h1");
    const h2: HTMLHeadingElement = document.createElement("h2");
    y.appendChild(p);
    y.appendChild(div);
    p.innerText = x;
    div.innerText = x;
}
func5("fghjkl", document.body)
// fetch
const func6 = (): Promise<{ id: number, userId: number }[]> => {
    return fetch("https://jsonplaceholder.typicode.com/posts/json")
        .then(res => res.json())
        .then((elem: { id: number, userId: number }[]) => {
            return elem
        })
}
console.log(func6)
const func7 = (): Promise<{ id: number, userId: number }[]> => {
    return fetch("https://jsonplaceholder.typicode.com/posts/json")
        .then(res => res.json())
        .then((elem: { id: number, userId: number }[]) => {
            return elem
        })
}
console.log(func7)

//class simple
class Users {
    id: number;
    name: string;
    age: number;
    status: boolean;

    constructor(id: number, name: string, age: number, status: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
}

const user: Users = new Users(2, "Dima", 35, true)


// extends (without modif and with modif)
class Custom extends Users {
    constructor(id: number, name: string, age: number, status: boolean, public access: boolean) {
        super(id, name, age, status);
        this.access = access;
    }
}

class Student extends Users {
    constructor(id: number, name: string, age: number, status: boolean, public isStudent: boolean) {
        super(id, name, age, status);
        this.isStudent = isStudent;
    }
}

const student: Student = new Student(2, "Dima", 35, true, true)
// to add class template => then add a new simple obj and class obj
const arrUsers: Users[] = [
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
]
console.log(arrUsers)

class Animal {
    id: number;
    name: string;

    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name
    }
}


class KindOfAnimals extends Animal {
    public kind: string

    constructor(id: number, name: string, kind: string) {
        super(id, kind);
        this.kind = kind;
    }
}

const arrAnimals: Animal[] = [
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
]

console.log("class as inherit + instanceof");
const animals = (user: Users): { id: number; name: string; age: number; status: boolean; isStudent: any } => {
    if (user instanceof Users) {
        const student: Student = user as Student;
        student.isStudent = true
        return student
    }
}
console.log(animals(user));

//“?” (optional func)
class House {
    id: number;
    size: string;

    constructor(id: number, size: string) {
        this.id = id;
        this.size = size;
    }

    light?(): void {
        console.log("Turn off")
    }
}

const arrHouses: House[] = [{
    id: 1,
    size: "big"
}, {
    id: 2,
    size: "small"
},]

// method overloading
class Car {
    model: string;
    quantity: number;

    constructor(model: string, quantity: number) {
        this.model = model;
        this.quantity = quantity;
    }

    public speed(num: number): string {
        return `Speed: ${num}`
    }
}

const car = new Car("BMW", 23);
console.log(car);
console.log(car.speed(423));


class CarWithDriver extends Car {
    private _driver: boolean;

    constructor(model: string, quantity: number, driver: boolean) {
        super(model, quantity);
        this._driver = driver;
    }

    speed(num: number): string {
        return `Speed: ${num}`
    }

    get isDriver(): string {
        if (this._driver) {
            return ("driver present")
        } else {
            return ("driver doesn't present")
        }
    }

    set isDriver(value: boolean) {
        this._driver = value;
    }
}

console.log(car.speed(553));
const carWithDriver: CarWithDriver = new CarWithDriver("Mers", 234, false)
console.log(carWithDriver.isDriver)
carWithDriver.isDriver = true
console.log(carWithDriver.isDriver);
//Private field Protected field Public field
//getters/setters (OOP) -1 using parentheses
enum Gender {
    FEMALE,
    MALE
}

class Workers<X, Y extends number> {

    private _id: Y;
    public name: string;
    protected profesion: X
    public gender: Gender

    constructor(id: Y, name: string, profesion: X, gender: Gender) {
        this._id = id
        this.name = name;
        this.profesion = profesion
        this.gender = gender
    }

    get id(): Y {
        return this._id;
    }

    set id(value: Y) {
        if (value > 1) {
            this._id = value;
        }
    }


}

const workers: Workers<string, number> = new Workers(1, "Ben", "doctor", Gender.MALE)
console.log(workers)
workers.id = -1
console.log(workers)
workers.id = 3
console.log(workers.id)
console.log(workers.gender)

//abstract /simple classes/func with abstract
abstract class Language {
    protected constructor(public id: number, public language: string) {
        this.id = id;
        this.language = language;
    }

    abstract write(): string
}


class AnotherLanguage extends Language {

    constructor(id: number, language: string) {
        super(id, language);
    }

    write(): string {
        return `Я написал это на ${this.language}`
    }
}

const lang2 = new AnotherLanguage(1, "русском")
console.log(lang2.write());

class AnotherLanguage2 extends Language {
    constructor(id: number, language: string) {
        super(id, language);
    }

    write(): string {
        return `Я написав це ${this.language}`
    }
}

const lang3: AnotherLanguage2 = new AnotherLanguage2(2, "українською")
console.log(lang3.write());

class AnotherLanguage3 extends Language {
    constructor(id: number, language: string) {
        super(id, language);
    }

    write(): string {
        return `I write that in ${this.language} language.`
    }
}

const lang: AnotherLanguage3 = new AnotherLanguage3(3, "English")
console.log(lang.write());

function foo(lang: Language): string {
    return lang.write()

}

console.log("//////")
console.log(foo(lang3));
console.log(foo(lang2));
console.log(foo(lang));

//Interface
enum Major {
    scholar,
    principal,
    teacher
}

interface ISchoolPerson {
    name: string;
    age: number;
    class?: number;
    major: Major

    whoAmI(major: string): string
}

interface ITeacher extends ISchoolPerson {
    experience: number
}

const teacher: ITeacher = {
    name: "Mrs. Anderson", age: 30, major: Major.teacher, experience: 4, whoAmI: (major: string): string => {
        return `I'm a ${major}`
    }
};
console.log(teacher)
console.log(teacher.whoAmI(Major[teacher.major]))
const scholar: ISchoolPerson = {
    name: "Paul", age: 30, class: 5, major: Major.scholar, whoAmI(major: string): string {
        return `I'm a ${major}`
    }
}
console.log(scholar)
console.log(scholar.whoAmI(Major[scholar.major]))
const principal: ITeacher = {
    name: "Mr. Hun", age: 45, major: Major.principal, experience: 14, whoAmI(major: string): string {
        return `I'm a ${major}`
    }
}
console.log(principal)
console.log(principal.whoAmI(Major[principal.major]))

//Implements
class copyITeacher implements ITeacher, ISchoolPerson {
    age: number;
    class: number;
    experience: number;
    major: Major;
    name: string;

    whoAmI(major: string): string {
        return "";
    }

}

//Type
//Concrete type interface (or another obj)
type StringValue = string
type NumberValue = number
type ExamplePerson = ISchoolPerson
//Concrete type interface + add smth, use &
type SuperPersonInSchool = ITeacher & ISchoolPerson;
//gives a choice between data types (IUser | (or) IAdmin
type ChoosePerson = ITeacher | ISchoolPerson;
// function
type Way = "left" | "right"

class ConcreteWay {
    way: Way
}

const res: ConcreteWay = {way: "left"}