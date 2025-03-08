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
 - When rendering lists each item should have a unique key prop for react to track changes efficently.

 # Class based vs Functional Component
- Earlier, React code was written using Class based components. 
- Slowly functional components were introduced and today they are the ones you’ll se everywhere.
- Class components are  classes that extend React.
- Component, while functional components are simpler and can use Hooks.