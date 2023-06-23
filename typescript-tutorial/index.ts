let isDone: boolean = false;
let count: number = 1;
let myName: string = "Michael";
const sym = Symbol();
const obj = {
  [sym]: "Michael",
};
// console.log("sym:", obj[sym]);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//enum

enum Direction {
  NORTH = "NORTH",
  SOUTH = 5,
  EAST,
  WEST,
}
let dir: Direction = Direction.NORTH;
// console.log("dir:", dir);

//any

let notSure: any = 666;
let value: any;
// value.getName();

//unknown

let value1: unknown = 666;
let value1Any: any = 666;

// value1.getName();

let value2: unknown = value1;
let value3: any = value1;
let value4: string = value1Any;

//tuple

let tuple: [number, boolean];
tuple = [1, true];

//void
function myFunc(): void {
  console.log("this is my function");
}

//null undefined
const n: null = null;
const u: undefined = undefined;

//never
function errorFunc(): never {
  throw new Error("this is a error");
}

function loop(): never {
  while (true) {}
}

//assertion

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;

function myFunc1(maybeString: string | undefined | null) {
  const onlyString: string = maybeString!;
}

type NumGenerator = () => number;
function myFunc2(numGenerator: NumGenerator | undefined) {}

let x!: number;
initialize();
console.log(2 * x); // Error

function initialize() {
  x = 10;
}

//type guard

// in
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

//typeof
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}

//custom
function isNumber(x: any): x is number {
  return typeof x === "number";
}

//union type
const sayHello = (name: string | undefined) => {};
sayHello("Michael");
sayHello(undefined);

type message = string | undefined;

const greet = (msg: message) => {};
greet("Michael");
greet(undefined);

//intersection types

type PiontX = { x: number };
type PiontY = { y: number };
type PointXY = PiontX & PiontY;

let point: PointXY = {
  x: 1,
  y: 2,
};

////
interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string;
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: YX;
// p = { c: 6, d: "d", e: "e" };
// q = { c: "c", d: "d", e: "e" };

interface D {
  d: boolean;
}
interface E {
  e: string;
}
interface F {
  f: number;
}

interface A {
  x: D;
}
interface B {
  x: E;
}
interface C {
  x: F;
}

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: "semlinker",
    f: 666,
  },
};

/////

function getUserId(name: string, id: number): string {
  return name + id;
}

function getUserId1(name: string, id: number, age?: number): string {
  return name + id;
}

function getUserId2(
  name: string = "Michael",
  id: number,
  age?: number
): string {
  return name + id;
}

function push(array: number[], ...items: number[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a: number[] = [];
push(a, 1, 2, 3);

///
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let p1: Person = {
  name: "Michael",
  gender: 1,
  food: "Indian food",
};
//interface
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
//type alias
type PointType = {
  x: number;
  y: number;
};

type SetPointType = (x: number, y: number) => void;

//different

type MyString = string;

type PointUnion = string | number;

type Data = [number, string];

// extend

//interface extends interface

interface A1 {
  x: number;
}

interface A2 extends A1 {
  y: number;
}
//type alias extend type alias

type T1 = { x: number };
type T2 = T1 & { y: number };

// interface extends type alias

type T3 = {
  x: number;
};
interface A3 extends T3 {
  y: number;
}

//type alias extends interface

interface A4 {
  x: number;
}

type T4 = A4 & { y: number };

//implement

interface A5 {
  x: number;
  y: number;
}

class SomePoint implements A5 {
  x = 1;
  y = 2;
}

type T5 = {
  x: number;
  y: number;
};

class SomePoint1 implements T5 {
  x = 1;
  y = 2;
}

type UnionType = { x: number } & { y: number };

class SomePoint2 implements UnionType {
  x = 1;
  y = 2;
}
//merging

interface A6 {
  x: number;
}
interface A6 {
  y: number;
}

const myPiont: A6 = { x: 1, y: 1 };

//public static private protected
class Animal {
  protected name: string;
  constructor(name: string) {
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
  constructor(name: string) {
    super(name);
  }
  getCatName() {
    return this.name;
  }
}

const c1 = new Cat("Ben");
// console.log("name:", c1.getName());

function getArray<T>(arr: T[]): T[] {
  return new Array().concat(arr);
}

const strArray = getArray(["Mike", "Ben"]);
const numArray = getArray([1, 2, 3]);

strArray.push("John");
numArray.push(4);
