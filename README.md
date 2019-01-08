# Javascript The Weird Parts

## Tabe of Contents
- [ES6](#es6)
- [JS Stack and Queue](#js-stack-and-queue)


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






