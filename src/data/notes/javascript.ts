import type { NoteChapter } from '../types'

export const javascriptNotes: NoteChapter[] = [
  {
    id: 'js-scoping',
    title: 'Chapter 1: Scoping - Var, Let, and Const',
    content: 'JavaScript has evolved its variable scoping mechanisms. Under ES5, variables declared with `var` are function-scoped or globally-scoped. Under ES6, `let` and `const` introduce block-scoping. Block scope means variables are restricted to the containing braces `{}`.',
    codeSnippet: {
      code: `function scopeExample() {
  if (true) {
    var functionScoped = "I'm available throughout the function";
    let blockScoped = "I'm only available inside this block";
    const constantBlock = "I'm also block-scoped and cannot be reassigned";
  }
  console.log(functionScoped); // Prints fine
  // console.log(blockScoped); // ReferenceError!
}`,
      language: 'javascript',
    },
    summary: 'Prefer const by default for variables that do not need to be reassigned. Use let for variables that change, and avoid var to prevent hoisting bugs.',
  },
  {
    id: 'js-arrays',
    title: 'Chapter 2: ES6 Array Methods (Map, Filter, Reduce)',
    content: 'ES6 introduced elegant functional methods for array manipulations. They do not mutate the original array but return new elements or calculations.',
    codeSnippet: {
      code: `const numbers = [1, 2, 3, 4, 5];

// 1. Map: transform elements
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// 2. Filter: remove elements
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// 3. Reduce: accumulate elements
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 15`,
      language: 'javascript',
    },
    summary: 'Map maps inputs to outputs 1-to-1, filter subsets inputs based on conditions, and reduce aggregates inputs to a single output value.',
  },
  {
    id: 'js-async',
    title: 'Chapter 3: Asynchronous Flow (Promises & Async/Await)',
    content: 'JavaScript execution is single-threaded. Asynchronous actions are managed via the microtask event queue. Modern JS leverages Promises and the async/await syntax to write asynchronous queries that look synchronous.',
    codeSnippet: {
      code: `// Promise Fetch
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id, name: "Alice" }), 1000);
  });
}

// Async/Await consumer
async function run() {
  try {
    console.log("Loading...");
    const user = await fetchUser(101);
    console.log("User Loaded:", user.name);
  } catch (error) {
    console.error("Failed:", error);
  }
}`,
      language: 'javascript',
    },
    summary: 'An async function always returns a Promise. The await keyword pauses function execution block until the promise settles, without freezing the main browser thread.',
  },
]
