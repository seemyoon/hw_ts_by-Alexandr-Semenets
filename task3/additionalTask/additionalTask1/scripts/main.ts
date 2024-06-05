/*Створити класс з приватним userId 3 obj потім ще 3 з іншим класом тільки Id, та те саме зробити з приватним
 title і body (по 1), */

class Users1 {
    private _userId: number;
    private id: number;
    protected title: string;
    public body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this._userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }
}

const user1 = new Users1(1, 1, "unt aut facere repellat provident occaecati excepturi optio reprehenderit", "quia et" +
    " suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto")
console.log(user1.userId);
user1.userId = 2;
console.log(user1.userId);
const user2 = new Users1(1, 2, "eum et est occaecat", "nihil reprehenderit dolor beatae ea dolores neque\\nfugiatblanditiis voluptate porro")
let userId2 = user2.userId;
console.log(userId2)
console.log(user1.userId = 43)
const user3 = new Users1(4, 5, "eum et est occaecat", "nihil reprehenderit dolor beatae ea doloresneque\\nfugiatblanditiis voluptate porro")
console.log(user3.userId);
console.log(user3.userId = 1111);

class User2 {
    private userId: number;
    private _id: number;
    public title: string;
    protected body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;

    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }
}

let user1_2 = new User2(2, 65, "dolorem dolore est ipsam", "repellat aliquid praesentium dolorem qu")
console.log(user1_2.id);
user1_2.title = "dolorem dolore";
console.log(user1_2.title)

let user2_2 = new User2(3, 5, "quasi id et eos tenetur aut quo autem", "delectus ullam et corporis nulla voluptas sequi")
let idUser2_2 = user2_2.id;
console.log(idUser2_2);
console.log(user2_2.id = 667);

let user3_2 = new User2(3, 5, "eveniet quod temporibus", "est natus reiciendis nihil possimus aut provident\\nex et dolor\\nrepellat pariatur est")
console.log(user3_2.id);
console.log(user3_2.id = 123);

class User3 {
    public id: number;
    protected userId: number;
    private _title: string;
    protected body: string;

    constructor(id: number, userId: number, title: string, body: string) {
        this.id = id;
        this.userId = userId;
        this._title = title;
        this.body = body;
    }

    get getTitle(): string {
        return this._title;
    }

    set setTitle(value: string) {
        this._title = value;
    }

}

const user3_1 = new User3(32, 42, "asfsad", "pouiyut");
console.log(user3_1.getTitle);
console.log(user3_1.setTitle = "zxcv");

class Users4 {
    public id: number;
    private userId: number;
    protected title: string;
    private _body: string

    constructor(id: number, userId: number, title: string, body: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this._body = body;
    }

    get getBody(): string {
        return this._body;
    }

    set setBody(value: string) {
        this._body = value;
    }
}

const user4_1 = new Users4(23, 435, "kjihugy", "jkhg")
console.log(user4_1.getBody);
console.log(user4_1.setBody = "pppppp");
