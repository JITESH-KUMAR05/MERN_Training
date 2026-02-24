## Topics of the week
### Interactivity to the html pages

### the browser takes the html element and convers them into javascript objects, and we can manipulate those objects using javascript to change the content of the page, add new elements, remove elements, and so on.
### The DOM tree

1. Document
2. html element (root element)
3. head element
    title element
4. body element
    h1 element
    p element
    a element
    img element



### once the DOM is ready then CSS parser will start to parse the CSS and apply the styles to the elements in the DOM tree.

### After the CSS parser is done then  the JavaScript engine will start to execute the JavaScript code and manipulate the DOM tree.

### so once the DOM is ready then the job of html parser is done and the job of CSS parser and JavaScript engine starts.

### What is the DOM?
- The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document.

- the browser displays the content by reading the objects from the DOM tree.

- the browser can only understand the JavaScript, the reason is that it contains the JS engine which can execute the JavaScript code and manipulate the DOM tree. so it can't even understand the reactjs, angular
- the browser can understand the CSS but not the tailwind css and others


## now we will discuss how to manipulate the DOM tree using JavaScript.
- user interaction 
- event handling 
    - read the element
    - attach the event handler

- event listeners

* Event is an action that occurs in the browser, such as a click, a hover, a scroll, etc.
* Event handling is the process of responding to an event, such as executing a function when a button is clicked.
* Event listeners are functions that are called when an event occurs. They are attached to elements in the DOM tree and listen for specific events, such as a click or a hover. When the event occurs, the event listener is called and can manipulate the DOM tree accordingly.


#### we keep the script tag at the end of the body element because we want to make sure that the DOM tree is fully loaded before we try to manipulate it using JavaScript. if we put the script tag in the head element then the JavaScript code will be executed before the DOM tree is fully loaded and we will get an error because we are trying to manipulate elements that do not exist yet.

### only head and body elements are accessible direactly from the document object, other elements are not accessible directly and we have to use methods like getElementById, getElementsByClassName, querySelector, etc. to access them.

## Query selector
- querySelector is a method that allows us to select elements from the DOM tree using CSS selectors. it returns the first element that matches the selector.
- querySelectorAll is a method that allows us to select all elements from the DOM tree that match the selector. it returns a NodeList of elements.
- the querySelector can select elements by id, class, tag name, attribute, etc. for example:
    - document.querySelector('#myId') will select the element with the id of myId
    - document.querySelector('.myClass') will select the first element with the class of myClass
    - document.querySelector('p') will select the first p element
    - document.querySelector('[type="text"]') will select the first element with the attribute type equal to text

#### using these methods we need to read the element then add the event listener to it which takes two parameters, the first parameter is the event type and the second parameter is the function that will be called when the event occurs.

#### this type of operation is done by writing a lot of lines of code and it is not efficient, so we can use event delegation to handle events more efficiently. also in this we are manupulating the DOM tree directly which is not recommended because it can cause performance issues and it can also cause bugs in the code. so we should use event delegation to handle events more efficiently and to avoid manipulating the DOM tree directly.

### What is Jquery?
- jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
- jQuery is a library that provides a lot of methods to manipulate the DOM tree and to handle events more efficiently. it also provides a lot of methods to make AJAX requests and to handle animations. it is a very popular library and it is widely used in web development.
- but jquery is also not recommended as it also makes the changes to the DOM tree directly and it can cause performance issues and it can also cause bugs in the code.
- so we should use modern JavaScript frameworks like React, Angular, Vue, etc. to handle events and to manipulate the DOM tree more efficiently and to avoid manipulating the DOM tree directly.

## All the things which we discussed of usnig the plain js (vanilla js) and jquery are the imperative approach, now we will disccuss the declarative approach using ReactJS.
- ReactJS is a JavaScript library for building user interfaces. it allows us to build reusable UI components and to manage the state of the application more efficiently. it also provides a virtual DOM which allows us to manipulate the DOM tree more efficiently and to avoid manipulating the DOM tree directly. it is a very popular library and it is widely used in web development.


# ReactJS
- we can create single page applications using ReactJS.
- when the client makes the first request to the server then the server sends a single HTML page to the client and after this for every request the client will send an AJAX request to the server and the server will send the data in JSON format and the client will update the UI accordingly without reloading the page. this is how single page applications work.
- ReactJS allows us to build reusable UI components and to manage the state of the application more efficiently. it also provides a virtual DOM which allows us to manipulate the DOM tree more efficiently and to avoid manipulating the DOM tree directly. it is a very popular library and it is widely used in web development.
- ReactJS is a declarative approach to building user interfaces, which means that we describe what we want to see on the screen and React takes care of updating the DOM tree accordingly. this is different from the imperative approach where we have to manipulate the DOM tree directly to achieve the desired result.

* What is AJAX?
- AJAX stands for Asynchronous JavaScript and XML. it is a technique for creating fast and dynamic web pages. it allows us to send and receive data from the server asynchronously without reloading the page. it is a very popular technique and it is widely used in web development.
- with AJAX we can send and receive data in JSON format which is a lightweight data format that is easy to parse and generate. it is a very popular data format and it is widely used in web development.

* What is Virtual DOM?
- Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as React. this allows us to manipulate the DOM tree more efficiently and to avoid manipulating the DOM tree directly. it is a very popular concept and it is widely used in web development.
- the virtual DOM is a lightweight copy of the real DOM and it is used to optimize the performance of the application by minimizing the number of manipulations to the real DOM. when we make changes to the virtual DOM, React will compare the virtual DOM with the real DOM and will only update the parts of the real DOM that have changed. this is how React optimizes the performance of the application and how it avoids manipulating the DOM tree directly.

#### Start our first ReactJS application
- ReactJS follows the component-based Architecture.
* Command
- npm create vite@latest
- npm install   

### What a react component contains?
- State(optional)
- returns a react element(mandatory)
    - a react element is a JavaScript object that describes what we want to see on the screen. it is created using the React.createElement() method and it is used to create the virtual DOM. it is a very important concept in ReactJS and it is widely used in web development.


### Component Hierarchy
- App component (root component)
    - Header component
    - Main component
        - Article component
        - Sidebar component
    - Footer component


## Phase 2 : State and Interactivity
1. useState hook 
2. Event handling
3. Form validation & submission
4. Lifting state up

### useState hook
- useState is a hook that allows us to add state to our functional components. it returns an array with two elements, the first element is the current state and the second element is a function that allows us to update the state. it is a very important hook in ReactJS and it is widely used in web development.
```javascript
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- when the state do not depend on the previous value then we can use the simple form of the setState function, but when the state depend on the previous value then we should use the functional form of the setState function to avoid any bugs in the code. for example:
```javascript
import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Click me
        </button>
        </div>
    );
    }
```
- in the above example we are using the functional form of the setState function because the new state depends on the previous state. if we use the simple form of the setState function then we will get a bug in the code because the new state will not be updated correctly.

### now with objects and arrays
* Arrays
```javascript
import React, { useState } from 'react';
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // todos.push(todo); // this will mutate the state directly and it is not recommended
    setTodos([...todos, todo]); // we are creating a new array with the new todo and the previous todos to avoid mutating the state directly
  };

  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

* Objects
```javascript
import React, { useState } from 'react';
function UserProfile() {
  const [user, setUser] = useState({ name: 'John', age: 30 });

  const updateName = (newName) => {
    // user.name = newName; // this will mutate the state directly and it is not recommended
    setUser({ ...user, name: newName }); // we are creating a new object with the new name and the previous properties to avoid mutating the state directly
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => updateName('Jane')}>Update Name</button>
    </div>
  );
}
```

### how to iterate an object in react?
- object.keys()
- object.values()
- object.entries()
```javascript
import React, { useState } from 'react';
function UserProfile() {
  const [user, setUser] = useState({ name: 'John', age: 30 });

  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Form Validation and Submission in React
* libraries for form validation
    - Formik
    - React Hook Form
* React Hook Form is better than Formik because it is more lightweight and it is easier to use. it also provides better performance and it is more flexible than Formik. it is a very popular library and it is widely used in web development.
```javascript
import React from 'react';
import { useForm } from 'react-hook-form';
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
```

## Lifting State Up
- Lifting state up is a technique in React where we move the state from a child component to a parent component so that the state can be shared between multiple child components. this is useful when we have multiple components that need to access the same state and we want to avoid prop drilling. it is a very common technique in React and it is widely used in web development.
- this technique can be used only when the level of components are less than or equal to 1.
- if we have more than 1 level of components then we should use a state management library like Redux, etc. to manage the state of the application more efficiently and to avoid prop drilling.

### we used react-hook-form
- react-hook-form is a library that provides a lot of methods to handle form validation and submission more efficiently. it is a very popular library and it is widely used in web development. it is better than Formik because it is more lightweight and it is easier to use. it also provides better performance and it is more flexible than Formik. it is a very popular library and it is widely used in web development.
- register
- handleSubmit
- formState
- reset
- setError


## useEffect Hook
- 

### Side Effects in React
1. a component can render initially before displaying content.
2. if the component is about to make an API request, it should wait until the initial render is complete before making the request.
3. if both initial rendering and API request happen together, it leads to unexpected behavior and performance issues.

* situations
1. No dependency array: the effect runs after every render.
```javascript
import React, { useEffect } from 'react';
function MyComponent() {
    useEffect(() => {
        console.log('Effect runs after every render');
    });
    
    return <div>My Component</div>;
    }
```
2. Empty dependency array: the effect runs only once after the initial render.
```javascript
import React, { useEffect } from 'react';
function MyComponent() {
    useEffect(() => {
        console.log('Effect runs only once after the initial render');
    }, []);
    
    return <div>My Component</div>;
    }
```
3. Dependency array with variables.state: the effect runs after the initial render and whenever any of the specified variables/state change.
```javascript
import React, { useEffect, useState } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Effect runs after the initial render and whenever count changes');
    }, [count]);
    
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }
```