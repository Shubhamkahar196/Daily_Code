# Why react ?
- we can use state which means that once we update the state variable, it changes across the page
- we can split our app into multiple components and reuse those components
- react use a virtual dom to efficiently update the UI which is better than updating content using DOM Manipulation
Debugging and maintainance is easy

# Components
- In React, components are the building blocks of the user interface. 
- They allow you to split the UI into independent, reusable pieces that can be thought of as custom, self-contained HTML elements.

# Props
- Props are the way to pass data from component to another component.

# hooks: useState
- useState is a Hook that lets you add state to functional components.
- It returns an array with the current state and a function to update it.

# state 
- A variable that stores a value. 
- In this case, count is a state variable that stores a number.  

# useEffect
- its a hook that runs a function after something changes.
- it's like a "listener" that waits for something to happen.
- When that the things happen, it runs the function.

# useRef
- In React, `useRef` is a hook that provides a way to create a **reference** to a value or a DOM element that persists across renders but **does not trigger a re-render** when the value changes.

### Key Characteristics of `useRef`:

1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. This is different from state (`useState`), which triggers a re-render when updated.

# children
- The children prop allows you to pass elements or components as props to other elements.

# Lists and Keys
 - When rendering lists each item should have a unique key prop for react to track changes efficently

 # Class based vs Functional Component
- Earlier, React code was written using Class based components. 
- Slowly functional components were introduced and today they are the ones you’ll se everywhere.
- Class components are  classes that extend React.
- Component, while functional components are simpler and can use Hooks.

# Lifecycle events

In React, lifecycle events (or lifecycle methods) refer to the specific points in a component's life where you can execute code in response to changes or actions. These events help you manage tasks such as data fetching, subscriptions, and cleaning up resources.

### Class-Based Lifecycle Methods

In class components, lifecycle methods are divided into three main phases:

1. **Mounting**: When the component is being inserted into the DOM.
    - `constructor()`: Called when the component is initialized.
    - `componentDidMount()`: Called immediately after the component is mounted. Ideal for data fetching.
2. **Updating**: When the component is being re-rendered due to changes in props or state.
    - `componentDidUpdate(prevProps, prevState)`: Called after the component has updated. Good for operations based on prop/state changes.
3. **Unmounting**: When the component is being removed from the DOM.
    - `componentWillUnmount()`: Ideal for cleanup tasks, like invalidating timers or canceling network requests.

    # . Error boundary

Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.

Error boundaries only exist in class based components

# this code use when you use error boundary
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

# remove it
const App = () => {
    return (
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
    );
};

# Fragment
- In React, a component can return a single parent element, but it can contain multiple children within that single parent.
- <> this sign is fragment and to avoid extra div

const MyComponent = () => {
    return ( 
        <>  
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
};
