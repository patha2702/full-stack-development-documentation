# Frontend foundation

## DOM (Document Object Model)
1. Document: The Document refers to the web page or document loaded in the browser, which is typically written in HTML (Hypertext Markup Language) or XML (Extensible Markup Language). It represents the entire structure of the web page, including elements such as <html>, <head>, <body>, and their contents.

2. Object: The Object aspect of the DOM refers to the individual nodes that make up the document. These nodes form a tree-like structure known as the DOM tree. Each node represents an element, attribute, or piece of text in the document. These nodes are represented as objects in programming languages like JavaScript, with properties and methods that can be accessed and manipulated.

3. Model: The Model in the DOM context refers to the abstract, structured representation of the document provided by the DOM. It serves as a model or interface for accessing and manipulating the content, structure, and style of the document programmatically. The DOM provides a consistent way to interact with web documents regardless of the underlying markup language. It allows developers to dynamically update the document, change styles, handle events, and more using APIs (Application Programming Interfaces) provided by the DOM.

## What is Javacript?
- It is an implementation of EcmaScript specs

## What does dynamic mean?
- Changing the elements on the website once the website is loaded.

## Class and Id
- Class: It is used to share common behaviour with multiple elements. By targetting using '.' selector. Many elements can have same class.
- Id: It is used to uniquely identify and element. BY targetting using '#" selector. There cannot be same ids for two different elements. They let you access elements via DOM API.

## What is debouncing?
-It is used to control how often a particular function is called in response to an event, typically a user action like scrolling, resizing, or typing.
-Debouncing is particularly useful in scenarios where an event can be triggered rapidly or frequently, such as a user typing in a search input or resizing a window. Without debouncing, a function attached to such events may be called multiple times in quick succession, leading to performance issues or undesired behavior.
-Debouncing works by delaying the execution of the function until after a certain amount of time has passed since the last time the event was triggered. This delay allows time for additional rapid triggers to occur, but the function is only executed once, at the end of the delay.
-basic explanation of how debouncing works:
1. When the event is triggered, a timer is started.
2. If the event is triggered again before the timer expires, the existing timer is cleared and a new one is started.
3. Once the timer expires without any new triggers, the function associated with the event is finally executed.
