import getMyName from "./mod1";

function greet(firstName: string): number {
  console.log("Hello " + firstName);
  return 23;
  // return 30
}

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isLegal(age: number): boolean {
  return age >= 18;
}

function runAfter1(fn: () => void) {
  setTimeout(() => {
    fn();
  }, 1000);
}

// -----------------------------------------------------------------

// Interface

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function isLegal2(user: User) {
  return user.age >= 18;
}

const me: User = {
  firstName: "Rajendra",
  lastName: "Pathaa",
  email: "raj@gmail.com",
  age: 23,
};

// Implementing interfaces:

interface Person {
  name: string | number;
  age: number;
  greet: (message: string) => void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(message: string) {
    console.log(message + " " + this.name);
  }
}

// -----------------------------------------------

// Array:
function getMax(arr: number[]): number {
  let max: number = arr[0];
  arr.forEach((el, i) => {
    if (el > max) {
      max = el;
    }
  });

  return max;
}

type listOfUsers = User[];

const users: listOfUsers = [
  {
    firstName: "Rajendra",
    lastName: "Patha",
    email: "rajendrpatha@gmail.com",
    age: 21,
  },
  {
    firstName: "Rajendra",
    lastName: "Patha",
    email: "rajendrpatha@gmail.com",
    age: 2,
  },
  {
    firstName: "Rajendra",
    lastName: "Patha",
    email: "rajendrpatha@gmail.com",
    age: 12,
  },
];

function giveLegitUsers(users: listOfUsers) {
  const filteredUsers = users.filter((user) => {
    return user.age >= 18;
  });
  return filteredUsers;
}

// Enumerations
enum Directions {
  up = "up",
  down = "down",
  right = "right",
  left = "left",
}

function doSomething(action: Directions) {
  if (action == Directions.down) {
    console.log("jump");
  }
}

// Generics
function getFirstElement<T>(arr: T[]): T {
  return arr[0]
}

// Modules
getMyName("Raj")