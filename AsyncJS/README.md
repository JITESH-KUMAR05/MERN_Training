# Asynchronous JavaScript
* javascript is a single-threaded language, meaning it can only execute one task at a time.
* Asynchronous programming allows multiple tasks to run concurrently, improving performance and responsiveness.
* a thread can do only one task at a time, but with asynchronous programming, it can initiate a task and move on to another task before the first one completes.
- there are two types requests: 1 is blocking request, 2 is non-blocking request. 
- blocking request: a blocking request is one that stops the execution of code until the request is completed. for example, when you make a synchronous API call, the code execution will pause until the response is received.
- non-blocking request: a non-blocking request, on the other hand, allows the code to continue executing while waiting for the request to complete. for example, when you make an asynchronous API call using promises or async/await, the code execution continues without waiting for the response.
- the cpu will not be available for other tasks during a blocking request, which can lead to performance issues and unresponsive applications. non-blocking requests, on the other hand, allow the cpu to handle other tasks while waiting for the request to complete, improving overall performance and responsiveness.

* To understand asynchronous JavaScript, first let's talk about synchronous
- what is synchronous?
* synchronous means that the code is executed in a sequential manner, one line at a time.

## Now let's talk about situations where asynchronous code is required
- when dealing with tasks that take a long time to complete, such as network requests, file I/O operations, or database queries.
- if these tasks were executed synchronously, they would block the main thread and make the application unresponsive.
- by using asynchronous code, we can allow other tasks to continue executing while waiting for the long-running task to complete.
- for example when we make an API call to fetch data from a server, it may take some time for the server to respond. if we were to execute this request synchronously, the entire application would freeze until the response is received. however, by using asynchronous code, we can initiate the API call and continue executing other code while waiting for the response.
- the time taken to get the response is totally unpredictable, it may take 200ms or 2 seconds or even more. so we cannot block the main thread waiting for the response.

## some frequent operations in Node.js that are asynchronous in nature:
- file system operations: reading and writing files using the fs module.
- HTTP requests: making API calls using the http or https modules.
- database operations: querying databases using libraries like mongoose or sequelize.
- timers: using setTimeout and setInterval to schedule tasks.
- cryptographic operations: performing encryption and decryption using the crypto module.
- event handling: responding to events using the EventEmitter class.
- email sending: sending emails using libraries like nodemailer.
- streaming data: handling large data streams using the stream module.

## Browsers javascript runtime  = javascript engine + Web APIs + Event Loop
## Node.js javascript runtime = javascript engine + node.js APIs + Event Loop

### this node.js API contains minimum 4 threads and can get more threads based on the system configuration. upto maybe 1024 threads.

### 1 synchronous blocking 
### 2 synchronous non-blocking
### 3 asynchronous non-blocking
### 4 asynchronous blocking

* question: is there anything which is asynchronous but blocking?


## Promises
* A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
* A Promise can be in one of three states:
- Pending: The initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully, resulting in a value.
- Rejected: The operation failed, resulting in a reason for the failure.
* Promises are used to handle asynchronous operations in JavaScript, providing a cleaner and more manageable way to work with callbacks.
* Promises can be created using the Promise constructor, which takes a function with two parameters: resolve and reject.
* Promises can be chained using the .then() method for handling fulfilled values and the .catch() method for handling rejected values.
* Promises can also be created using async/await syntax, which allows for a more synchronous-looking code structure while still being asynchronous under the hood.