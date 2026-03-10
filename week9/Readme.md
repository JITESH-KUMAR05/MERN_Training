
## UseRef Hook
    - use reference hook
    - used to access the DOM elements directly in React components
    - can also be used to store mutable values that do not cause re-renders when updated

## 3 things with a function
    1. a function can stored in a variable
    2. a function can be passed as an argument to another function
    3. a function can return another function
### functions are called first class citizens in JavaScript because they can be treated like any other data type, such as numbers or strings. This allows for powerful programming techniques, such as higher-order functions and closures.
## Closures in javaScript
- A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
- Closures are created whenever a function is defined inside another function, allowing the inner function to
- access variables and parameters of the outer function even after the outer function has returned.
- Closures are commonly used for data privacy, creating private variables and functions, and implementing callback

## State management in React 
    - Redux and Zustand are two popular state management libraries for React applications.
    - Zustand is a simpler and more lightweight alternative to Redux, with a more intuitive API and less boilerplate code.

## so we are learning about Zustand
    1. install Zustand using npm
        - npm install zustand
    2. create a Global Store using the `create` function from Zustand
        - import { create } from 'zustand'
        - const useStore = create((set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }));


## Axios Vs Fetch
    - Axios is a popular JavaScript library for making HTTP requests, while Fetch is a built-in browser API for making HTTP requests.
    - Axios provides a simpler and more intuitive API, with features such as automatic JSON parsing and request cancellation, while Fetch requires more manual handling of responses and errors.
    - Both Axios and Fetch can be used to make HTTP requests in JavaScript, but Axios is often preferred for its ease of use and additional features.

- Syntax of Fetch:
    - fetch(url, options)
    - url: The URL to which the request is sent.
    - options: An optional object that contains any custom settings that you want to apply to the request. This can include the HTTP method, headers, body, etc.

```javascript
fetch('https://api.example.com/data', {
  method: 'GET', // or 'POST', 'PUT', etc.
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```
- Syntax of Axios:
    - axios(config)
    - config: An object that contains the configuration for the request. This can include the URL, method, headers, data, etc.

```javascript
let resObj = await axios.get("https://api.example.com/data")
res = resObj.data // this is directly the data we want, no need to parse it like in fetch

// post request
let resObj = await axios.post("https://api.example.com/data", {
    name: "John",
    age: 30
})
res = resObj.data // this is directly the data we want, no need to parse it like in fetch
```
