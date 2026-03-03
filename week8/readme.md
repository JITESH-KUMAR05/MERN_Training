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

### Steps to use Context API:
1. Create a context object
2. Every context object has a context provider and a context consumer.
3. context provider is used to provide the state to the components that need it.
4. context consumer is used to consume the state provided by the context provider.
5. a component can consume the context value using the useContext hook.

- we will create a new folder in src called "context" and inside that we will create a file called "CounterContext.js" where we will create our context and provider. Then we will use the provider in our App component to wrap the components that need access to the counter state. Finally, we will use the consumer in the components that need to access the counter state.

- we can call this context object like a pipeline that allows us to pass data from one component to another without having to pass props through multiple levels of components. This makes our code cleaner and easier to maintain.
- it's not correct to say that it is a global state, it is a state that is shared across multiple components but it is not global in the sense that it is not accessible from anywhere in the application. It is only accessible to the components that are wrapped by the context provider.

#### for the aboive one go to /learding/2-context-demo and check the code there. We have created a counter context and used it in our App component to manage the counter state across multiple components.

## Note: Every context should have only one state, as having multiple states can cause a lot of unnecessary re-renders and can make the application slow. It is better to create multiple contexts for different states rather than having one context with multiple states. This way, we can manage the state more efficiently and avoid unnecessary re-renders.


# CORS (Cross-Origin Resource Sharing)
* this is a security feature implemented by web browsers to prevent malicious websites from making unauthorized requests to other websites.
* it allows servers to specify which origins are allowed to access their resources and which HTTP methods are allowed for those origins.