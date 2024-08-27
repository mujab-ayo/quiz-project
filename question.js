const questions = [
  {
    number: 1,
    question: "What is the output of `console.log(typeof NaN);`?",
    answer: "number",
    options: ["NaN", "undefined", "object", "number"],
  },
  {
    number: 2,
    question:
      "Which method can be used to merge two or more arrays in JavaScript?",
    answer: "concat()",
    options: ["push()", "join()", "concat()", "merge()"],
  },
  {
    number: 3,
    question: "What is the purpose of the `Array.prototype.map()` method?",
    answer:
      "To create a new array with the results of calling a function on every element",
    options: [
      "To find an element in an array",
      "To filter elements from an array",
      "To create a new array with the results of calling a function on every element",
      "To sort the elements of an array",
    ],
  },
  {
    number: 4,
    question:
      "Which operator is used to check both value and type in JavaScript?",
    answer: "===",
    options: ["==", "===", "=", "=>"],
  },
  {
    number: 5,
    question: "What does the `this` keyword refer to in JavaScript?",
    answer: "The object that is executing the current function",
    options: [
      "The object that is executing the current function",
      "The global object",
      "The DOM element",
      "None of the above",
    ],
  },
  {
    number: 6,
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answer: "JSON.parse()",
    options: ["JSON.stringify()", "JSON.parse()", "eval()", "parseJSON()"],
  },
  {
    number: 7,
    question: "What will be the output of `Boolean('')`?",
    answer: "false",
    options: ["true", "false", "undefined", "null"],
  },
  {
    number: 8,
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    answer: "Object",
    options: ["String", "Number", "Boolean", "Object"],
  },
  {
    number: 9,
    question: "What is the correct way to write a comment in JavaScript?",
    answer: "// This is a comment",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "** This is a comment **",
    ],
  },
  {
    number: 10,
    question: "What is the output of `0.1 + 0.2 === 0.3`?",
    answer: "false",
    options: ["true", "false", "NaN", "undefined"],
  },
  {
    number: 11,
    question: "Which of the following is not a reserved word in JavaScript?",
    answer: "interface",
    options: ["interface", "throws", "program", "short"],
  },
  {
    number: 12,
    question: "What does `DOM` stand for?",
    answer: "Document Object Model",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Display Object Management",
      "Desktop Oriented Model",
    ],
  },
  {
    number: 13,
    question:
      "How do you remove the first element from an array in JavaScript?",
    answer: "shift()",
    options: ["pop()", "shift()", "remove()", "slice()"],
  },
  {
    number: 14,
    question: "Which statement is used to stop a loop in JavaScript?",
    answer: "break",
    options: ["stop", "break", "exit", "return"],
  },
  {
    number: 15,
    question: "How can you convert a string to a number in JavaScript?",
    answer: "parseInt()",
    options: ["toString()", "parseInt()", "convert()", "Number.toString()"],
  },
  {
    number: 16,
    question:
      "Which of the following is used to define a variable in JavaScript?",
    answer: "let",
    options: ["let", "const", "var", "All of the above"],
  },
  {
    number: 17,
    question: "What is the output of `console.log(2 ** 3);`?",
    answer: "8",
    options: ["5", "6", "8", "10"],
  },
  {
    number: 18,
    question:
      "Which function is used to serialize an object into a JSON string?",
    answer: "JSON.stringify()",
    options: ["JSON.parse()", "JSON.stringify()", "toString()", "serialize()"],
  },
  {
    number: 19,
    question: "What does the `typeof` operator return for an array?",
    answer: "object",
    options: ["array", "object", "undefined", "string"],
  },
  {
    number: 20,
    question: "What is the result of `'5' + 5`?",
    answer: "'55'",
    options: ["10", "'10'", "'55'", "NaN"],
  },
  {
    number: 21,
    question: "Which of the following is a falsy value in JavaScript?",
    answer: "0",
    options: ["1", "'0'", "'false'", "0"],
  },
  {
    number: 22,
    question: "Which JavaScript keyword is used to declare a constant?",
    answer: "const",
    options: ["let", "constant", "var", "const"],
  },
  {
    number: 23,
    question:
      "What is the correct way to check if a variable is an array in JavaScript?",
    answer: "Array.isArray()",
    options: [
      "typeof array === 'array'",
      "array.isArray()",
      "Array.isArray()",
      "isArray(array)",
    ],
  },
  {
    number: 24,
    question: "Which loop type is guaranteed to execute at least once?",
    answer: "do...while loop",
    options: ["for loop", "while loop", "do...while loop", "None of the above"],
  },
  {
    number: 25,
    question: "What does the `bind()` method do?",
    answer:
      "Creates a new function with the `this` value bound to the specified object",
    options: [
      "Creates a new function with the `this` value bound to the specified object",
      "Calls a function immediately",
      "Joins two or more functions together",
      "Creates a new object",
    ],
  },
  {
    number: 26,
    question: "Which symbol is used for comments in a JSON file?",
    answer: "JSON does not support comments",
    options: ["//", "#", "/* */", "JSON does not support comments"],
  },
  {
    number: 27,
    question:
      "Which of the following is a valid way to create a new object in JavaScript?",
    answer: "let obj = {};",
    options: [
      "let obj = Object.create();",
      "let obj = {};",
      "let obj = [];",
      "let obj = new Object[];",
    ],
  },
  {
    number: 28,
    question: "How can you add a new property to an existing object?",
    answer: "object.property = value;",
    options: [
      "object.newProperty;",
      "object.property = value;",
      "object.property == value;",
      "object.property := value;",
    ],
  },
  {
    number: 29,
    question: "What does the `Promise.resolve()` method do?",
    answer: "Returns a Promise object that is resolved with a given value",
    options: [
      "Returns a Promise object that is rejected with a given value",
      "Creates a new Promise object",
      "Returns a Promise object that is resolved with a given value",
      "Resolves all pending promises",
    ],
  },
  {
    number: 30,
    question:
      "Which of the following is used to handle exceptions in JavaScript?",
    answer: "try...catch",
    options: ["try...catch", "throw...catch", "try...throw", "handle...catch"],
  },
  {
    number: 31,
    question: "How do you round the number 7.25 to the nearest integer?",
    answer: "Math.round(7.25)",
    options: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
  },
  {
    number: 32,
    question:
      "What is the purpose of the `finally` block in a try...catch statement?",
    answer:
      "To execute code after the try and catch blocks, regardless of the outcome",
    options: [
      "To execute code only if no error occurs",
      "To execute code only if an error occurs",
      "To execute code after the try and catch blocks, regardless of the outcome",
      "To handle syntax errors",
    ],
  },
  {
    number: 33,
    question:
      "Which of the following methods can be used to remove an element from an array by index?",
    answer: "splice()",
    options: ["remove()", "delete", "splice()", "shift()"],
  },
  {
    number: 34,
    question: "What does the `call()` method do?",
    answer: "Invokes a function with a specified `this` value and arguments",
    options: [
      "Invokes a function with a specified `this` value and arguments",
      "Returns a new function bound to a specific `this` value",
      "Creates a new function",
      "Calls a function after a specified delay",
    ],
  },
  {
    number: 35,
    question: "What will be the output of `console.log(1 == '1');`?",
    answer: "true",
    options: ["true", "false", "undefined", "NaN"],
  },
  {
    number: 36,
    question: "Which statement best describes `NaN` in JavaScript?",
    answer: "A special value representing Not-a-Number",
    options: [
      "A special value representing an undefined number",
      "A special value representing Not-a-Number",
      "A type of number",
      "An exception object",
    ],
  },
  {
    number: 37,
    question: "What will the following code output: `console.log([] == ![]);`?",
    answer: "true",
    options: ["true", "false", "undefined", "NaN"],
  },
  {
    number: 38,
    question: "Which method is used to add an element to the end of an array?",
    answer: "push()",
    options: ["pop()", "push()", "unshift()", "concat()"],
  },
  {
    number: 39,
    question:
      "Which of the following is not a looping structure in JavaScript?",
    answer: "foreach",
    options: ["for", "foreach", "while", "do...while"],
  },
  {
    number: 40,
    question: "How can you remove a property from an object in JavaScript?",
    answer: "delete object.property;",
    options: [
      "delete object.property;",
      "remove object.property;",
      "object.property = null;",
      "object.property.delete();",
    ],
  },
  {
    number: 41,
    question: "What is the difference between `let` and `var` in JavaScript?",
    answer: "`let` is block-scoped, while `var` is function-scoped",
    options: [
      "`let` is block-scoped, while `var` is function-scoped",
      "`let` is function-scoped, while `var` is block-scoped",
      "`let` is used for constants, while `var` is for variables",
      "`let` has a different syntax",
    ],
  },
  {
    number: 42,
    question: "What is the output of `console.log(typeof undefined);`?",
    answer: "undefined",
    options: ["undefined", "object", "string", "function"],
  },
  {
    number: 43,
    question:
      "Which of the following methods can be used to convert an object to an array?",
    answer: "Object.values()",
    options: [
      "Object.values()",
      "Object.array()",
      "Array.from()",
      "Object.keys()",
    ],
  },
  {
    number: 44,
    question: "What does the `reduce()` method do?",
    answer:
      "Reduces an array to a single value by executing a function on each element",
    options: [
      "Reduces the size of an array",
      "Reduces an array to a single value by executing a function on each element",
      "Filters an array based on a condition",
      "Maps each element of an array to a new value",
    ],
  },
  {
    number: 45,
    question: "What is the output of `typeof NaN`?",
    answer: "number",
    options: ["undefined", "object", "NaN", "number"],
  },
  {
    number: 46,
    question:
      "Which method can be used to find the index of an element in an array?",
    answer: "indexOf()",
    options: ["find()", "indexOf()", "search()", "position()"],
  },
  {
    number: 47,
    question:
      "Which method is used to execute a function once after a certain amount of time?",
    answer: "setTimeout()",
    options: ["setTimeout()", "setInterval()", "setTime()", "setDelay()"],
  },
  {
    number: 48,
    question: "What will be the output of `console.log('5' - 3);`?",
    answer: "2",
    options: ["53", "2", "'53'", "'2'"],
  },
  {
    number: 49,
    question:
      "How do you create a new array with elements that pass a test provided by a function?",
    answer: "filter()",
    options: ["map()", "forEach()", "filter()", "reduce()"],
  },
  {
    number: 50,
    question: "What is the output of `console.log(0.1 + 0.2 === 0.3);`?",
    answer: "false",
    options: ["true", "false", "NaN", "undefined"],
  },
];
export default questions;
