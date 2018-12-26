export const data = [{
    question: 'Explain event delegation',
    answer: 'Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.'
  },
  {
    question: 'Explain how "this" works in JavaScript',
    answer: 'In most cases, the value of this is determined by how a function is called. It cant be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a functions this regardless of how its called, and ES2015 introduced arrow functions which dont provide their own this binding (it retains the this value of the enclosing lexical context).'
  },
  {
    question: 'Explain how prototypal inheritance works',
    answer: 'JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.'
  },
  {
    question: 'What\'s the difference between a variable that is: null, undefined or undeclared?',
    answer: 'Unassigned variables are initialized by JavaScript with a default value of undefined. JavaScript never sets a value to null. That must be done programmatically.'
  },
  {
    question: 'What is a closure, and how/why would you use one?',
    answer: "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. The closure has three scope chains: it has access to its own scope — variables defined between its curly brackets. it has access to the outer function's variables."
  },
  {
    question: 'Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?',
    answer: "forEach executes a provided function once for each array element. Map returns a new array"
  },
  {
    question: 'What\'s a typical use case for anonymous functions?',
    answer: 'Pass them as arguments for another function'
  },
  {
    question: 'What are host objects?',
    answer: 'are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. Example, browser environment supplies objects such as window. While a node.js/server environment supplies objects such as NodeList.'
  },
  {
    question: 'Difference between: function Person(){}, var person = Person(), and var person = new Person()?',
    answer: 'var person is only delcared when that line is reached, normal functions can be reached anywher, new Person creates a new Person obj'
  },
  {
    question: 'What\'s the difference between .call and .apply?',
    answer: 'The call() method calls a function with a given this value and arguments provided individually. '
  },
  {
    question: 'Explain Function.prototype.bind.',
    answer: 'Bind creates a new function that will have this set to the first parameter passed to bind()'
  },
  {
    question: 'Explain Ajax in as much detail as possible.',
    answer: 'Ajax is a network request, methods of the req can be "GET", "POST" etc. Purpose of ajax is tot send and receive data from the server'
  },
  {
    question: 'Explain how JSONP works (and how it\'s not really Ajax).',
    answer: 'a javascript pattern to request data by loading a <script> tag. It was proposed by Bob Ippolito in 2005.[2] JSONP enables sharing of data bypassing same-origin policy. The policy disallows running JavaScript to read media DOM elements or XHR data fetched from outside the pages origin. The aggregation of the sites scheme, port number and host name identifies as its origin.'
  },
  {
    question: 'Have you ever used JavaScript templating?',
    answer: 'refers to the client side data binding method implemented with the JavaScript language. This approach became popular thanks to JavaScripts increased use, its increase in client processing capabilities, and the trend to outsource computations to the clients web browser'
  },
  {
    question: 'Describe event bubbling.',
    answer: 'When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.'
  },
  {
    question: 'Describe event capturing.',
    answer: 'https://javascript.info/bubbling-and-capturing'
  },
  {
    question: 'Difference between window load event and document DOMContentLoaded event?',
    answer: 'The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading (the load event can be used to detect a fully-loaded page)'
  },
  {
    question: 'What is the difference between == and ===?',
    answer: '== will match even if types are different === does not'
  },
  {
    question: 'Explain the same-origin policy with regards to JavaScript.',
    answer: 'If embedding other JS code, the embedded code cannot interact with the client side JS'
  },
  {
    question: 'Why is it called a Ternary operator, what does the word Ternary indicate?',
    answer: 'Ternary implies three things. Ternary operator requries 3 things as well.'
  },
  {
    question: 'Explain what a single page app is and how to make one SEO-friendly.',
    answer: 'is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In a SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load'
  },
  {
    question: 'What are the pros and cons of using Promises instead of callbacks?',
    answer: 'Cleaner code'
  },
  {
    question: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?',
    answer: 'Depending on what youre compiling to, usually this is used for writing in newers standers than transpiling it to older version of JS'
  },
  {
    question: 'What language constructions do you use for iterating over object properties and array items?',
    answer: 'Object.values, Object.keys'
  },
  {
    question: 'Explain the difference between mutable and immutable objects.',
    answer: 'mutable can be directly changed, immutable cannot, and usually requries something new to be given'
  },
  {
    question: 'What is an example of an immutable object in JavaScript?',
    answer: 'state'
  },
  {
    question: 'Explain the difference between synchronous and asynchronous functions.',
    answer: 'Asynchronous will run the next line of code even if something is being waited on (such as a network request)'
  },
  {
    question: 'What is event loop?',
    answer: ' the event loop, message dispatcher, message loop, message pump, or run loop is a programming construct that waits for and dispatches events or messages in a program.'
  },
  {
    question: 'What is the difference between call stack and task queue?',
    answer: 'A call stack is a stack data structure that stores information about the active subroutines of a computer program. A job queue (sometimes batch queue), is a data structure maintained by job scheduler software containing jobs to run.'
  },
  {
    question: 'What are the differences between variables created using let, var or const?',
    answer: 'const cannot be reassigned, while let can. `var` is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned'
  },
  {
    question: 'What is the definition of a higher-order function?',
    answer: 'takes one or more functions as arguments (i.e. procedural parameters), and returns a function as a result'
  },

  {
    question: 'ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?',
    answer: 'const str = `/${yes}`'
  },
  {
    question: 'What are the benefits of using spread syntax and how is it different from rest syntax?',
    answer: 'When used in function arguments of a function declaration/expression it will convert the remaining arguments into an array. This variant is called the Rest parameters syntax.'
  },
  {
    question: 'How can you share code between files?',
    answer: 'Using a module system like CommonJS or Harmony'
  },
  {
    question: 'Why you might want to create static class members?',
    answer: 'The static keyword defines a static method for a class. Static methods arent called on instances of the class. Instead, theyre called on the class itself. These are often utility functions, such as functions to create or clone objects.'
  }
]