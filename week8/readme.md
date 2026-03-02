# Week 8 starting 
# Routing in React
* this is very important for single page applications (SPA)
* it allows us to navigate between different views or pages without reloading the entire page
* we can use libraries like `react-router-dom` to handle routing in our React applications

## Steps to set up routing in React:
1. Design the root layout of the application.
2.install `react-router` module using npm.
3. Create different components for each page or view.
4. Configure the routting for the above components. -> connecting the components to the parent with a path.


* useNavigate
* useLocation -> always knows the the location from where we are coming from

- useNavigate and useLocation are hooks provided by `react-router` that allow us to programmatically navigate and access the current location in our React applications.


## State Management in React
* this is crucial without which we can't create any application
* state management allows us to manage and share data across different components in our application
* synchronize the state across different components and ensure that the UI updates correctly when the state changes.
- when multi level components are involved, it becomes difficult to manage state and pass data between components. This is where state management libraries come in handy.
- in this situation we get some problems like "prop drilling" where we have to pass props through multiple levels of components just to get data from one component to another. This can make our code messy and hard to maintain.
* there are several ways to manage state in React, including:
1. context  -> small to medium applications
2. redux  -> medium to large applications

# Context API
* this is a built-in feature of React that allows us to create a global state that can be accessed by any component in the application without having to pass props down through multiple levels of components.
* it is useful for managing state that needs to be shared across multiple components, such as user authentication status, theme settings, or language preferences.
* it solved the problem of prop drilling by providing a way to share state directly between components without having to pass props through intermediate components.
* it is a good choice for small to medium-sized applications where the state management needs are not too complex.