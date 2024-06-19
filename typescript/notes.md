## TypeScript

- TypeScript is a superset of javaScript and provides types (adds type safety to js)
- It is sctrictly/ strongly typed.
- Cannot have same function in 2 different files at same level
- ambient modules

- How does typeScript code runs?
  -- Browsers only understand javascript.
  -- TypeScript transpilers(tsc) convert ts code to js code, if it contains errors(type checking) it will throw error and not conversion to js fails.

- tsconfig:

  - target: It specifies what version of ecmascript the typescript code should be converted to, like es6, es2016, etc
  - rootDir: It specifies where should the compiler look for .es files. i.e. /src
  - outDir: It specifies where the compiler should keep the compiled code(.js files) i.e. dist/build

- Interface:

  - Let's you aggregate data together
  - interface can extend multiple interfaces
  - We can create the structure of some custom variable type, like user with name: string and age: number using interface
  - We can create a class that implements the interface (class must have all properties and methods defined in the interface)

- Type:
- Let's you aggregate data together
- Unlike interface, classes cannot implement type
- Provides extra things:

  - unions (|)
  - intersections (&) combining properties of two types or interfaces or 1 interface and 1 type etc

- Enums:
- Enumerations are used to define a set of named constants like,
- enum Directions {
  up,
  down,
  left,
  right
  }, and now a input with type Directions can only take any of the one value inside directions

- Generics:
  - Generics enable you to create components that work with any data type while still providing compile time safety
  - function fun<T>(arr: T[]):T

- Exporting and importing modules:
 - Typescript follows ES6 module system i.e. export and import keywords
