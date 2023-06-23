"use strict";
let isDone = false;
let count = 1;
let myName = "Michael";
const sym = Symbol();
const obj = {
    [sym]: "Michael",
};
// console.log("sym:", obj[sym]);
let list = [1, 2, 3];
let list2 = [1, 2, 3];
//enum
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction[Direction["SOUTH"] = 5] = "SOUTH";
    Direction[Direction["EAST"] = 6] = "EAST";
    Direction[Direction["WEST"] = 7] = "WEST";
})(Direction || (Direction = {}));
let dir = Direction.NORTH;
// console.log("dir:", dir);
//any
let notSure = 666;
let value;
// value.getName();
//unknown
let value1 = 666;
let value1Any = 666;
// value1.getName();
let value2 = value1;
let value3 = value1;
let value4 = value1Any;
//tuple
let tuple;
tuple = [1, true];
//void
function myFunc() {
    console.log("this is my function");
}
//null undefined
const n = null;
const u = undefined;
//never
function errorFunc() {
    throw new Error("this is a error");
}
function loop() {
    while (true) { }
}
//assertion
let someValue = "this is a string";
let strLength = someValue.length;
let strLength1 = someValue.length;
function myFunc1(maybeString) {
    const onlyString = maybeString;
}
function myFunc2(numGenerator) { }
let x;
initialize();
console.log(2 * x); // Error
function initialize() {
    x = 10;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
//typeof
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}
//custom
function isNumber(x) {
    return typeof x === "number";
}
//union type
const sayHello = (name) => { };
sayHello("Michael");
sayHello(undefined);
const greet = (msg) => { };
greet("Michael");
greet(undefined);
let point = {
    x: 1,
    y: 2,
};
let p;
let q;
let abc = {
    x: {
        d: true,
        e: "semlinker",
        f: 666,
    },
};
/////
function getUserId(name, id) {
    return name + id;
}
function getUserId1(name, id, age) {
    return name + id;
}
function getUserId2(name = "Michael", id, age) {
    return name + id;
}
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
let p1 = {
    name: "Michael",
    gender: 1,
    food: "Indian food",
};
class SomePoint {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
class SomePoint1 {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
class SomePoint2 {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
const myPiont = { x: 1, y: 1 };
//public static private protected
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const a1 = new Animal("Mike");
// console.log("name:", a1.name);
// console.log("name:", a1.getName());
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    getCatName() {
        return this.name;
    }
}
const c1 = new Cat("Ben");
// console.log("name:", c1.getName());
function getArray(arr) {
    return new Array().concat(arr);
}
const strArray = getArray(["Mike", "Ben"]);
const numArray = getArray([1, 2, 3]);
strArray.push("John");
numArray.push(4);
