# Javascript The Weird Parts

## Tabe of Contents
- [ES6](#es6)
- [JS Stack and Queue](#js-stack-and-queue)
- [Javascript Types](#javascript-types)


## ES6
- **let**: block scoped, when declared only available inside the block where it was declared

## JS Stack and Queue
### Stack
- starts with the global execution context: 
- each function gets a new execution context. Each time a new function is called it is placed on top of the execution stack.  
- The stack is made up of different **Execution contexts**
    - starts with the **global context**, meaning its not available anywhere outside of the code. 
    - a wrapper to manage the that that is running - the **lexical environment** -where something sits physically in the code.  Where the code is written and what surrounds it.  Gives access to the `this` variable 
    - a new execution context is created when a function is called.  It is placed on top of the execution stack. The code is run line by line and when it is finished it is popped off the top of the stack.
    - each execution context has its own variable environment and deals with how the variables relate to each other in memory. Deals with **scope**- where the variable is available in your code
    - Each execution context has a reference to its outer lexical environment - its **scope chain**.  If a function is inside another function it has access to the outer function.  Otherwise all functions have access to the global scope.  
    - 2 phases of the execution context: 
    1.  creation phase: sets up a global object, this, an outer environment, sets up memory space for variables and hoising. 
        - **Hoisting**: sets up memory space for variables and functions.  Functions are set up in entirity.  Variables are set to undefined.  **Undefined**: a special value that means the variable has not been set
    2.  execution phase: runs the code line by line 

### Event Queue
- when the browser has an event that it needs to handle, it is placed on the even queue
- gets looked at when the execution stack is empty
- creates a function (a new execution context) for each new event
- browser is ansynchronously putting things into the event queue, but the code that is running is run line by line

## Javascript Types
- **Dynamically Typed**: (JS is this) the data type is figured out on the fly
- **Statically Typed**: the data type needs to be declared or else an error will be thrown
- **Primitive Type**: a type of data that represents a single value (not an object)
    1. undefined: a lack of existance (you should never set a variable to this)
    2. null: represents a lack of existance (you can set a variable to this)
    3. boolean: true or false
    4. number: floating point number.  Theres always some decimals.  
    5. string: a sequence of characters
    6. symbol: (es6)
- **operators**: a special function that is systacially written differently.
- **coerction**: converting a value from one type to another
    - `==`/`!=` coerces numbers, `===`/`!==` (strict) does not use coersion
    - a few other rules:
        - if there are string and numbers, numbers will coerce to strings
        - if you coerce a boolean to a number, `true` coerces to `1` and `false` coerces to `0`
        - `null` coerces to `0` but not for comparison
        - `undefined` coerces to `undefined`
    - [a more detailed list of rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
    - can use coercion to check for existance,if a variable is set but never defined - coerces to a falsy value
        ```java
        if (x) {
            // do something
        }
        ```
        - if x is not yet defined then the function does not do anything
    - need to be careful because `0` is also a falsy value, to avoid this:
        ```java 
        if (x || x === 0) {
            // do something
        }
        ```
        - does something even if x is 0 (would normally coerce to a falsy value and not do anything)
        - falsy values (coerces to false) `false`, `0`, `"", null, undefined, NaN
    - can use the or (`||`) operator for default values
        ```java
        if (x || 'hello')
        ```
        - if `x` is not yet defined returns hello
    - can also use to check colliding
        ```java
        var x = x || "hello"
        ```
        - if x is already defined, it keeps the old value rather than redine the variable




