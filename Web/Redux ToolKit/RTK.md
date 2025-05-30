

 # "Redux vs. Redux Toolkit: Why We Need Them" - Interview Point of View

 - At its core, Redux is a powerful state management library. Think of it as a central 'brain' for your application's data. In complex applications, data needs to be shared across many components, and managing this can get messy – you might pass data down many levels ('prop drilling') or have unpredictable state changes.

# Why Redux is needed:

 # It solves this by providing a single source of truth for your entire application's state.
  All state changes follow a predictable pattern (actions dispatching to pure reducers), making bugs easier to trace and the app more stable.
 Now, while powerful, traditional Redux had some common complaints, mainly around boilerplate code (lots of repetitive setup for actions, types, and reducers) and the need for manual immutable updates. This made it a bit complex and verbose, especially for new developers.

 # This is where Redux Toolkit (RTK) comes in. RTK is the official, opinionated, and recommended way to write Redux logic today. It's built on top of Redux, providing helper functions and utilities that simplify common tasks.

# Why Redux Toolkit is needed:

It drastically reduces boilerplate code through features like createSlice(), which automatically generates action creators and types.
It simplifies store setup with configureStore(), setting up good defaults and including necessary middleware.
It makes immutable updates easier using the Immer library internally, so you can write simpler, 'mutating' code that's transformed safely.
It promotes best practices and helps you write more organized, maintainable Redux code.
In essence, Redux provides the core concept of predictable state management, and Redux Toolkit is the modern tool that makes implementing Redux much easier, faster, and more enjoyable to work with, addressing its historical pain points directly."



# first making - store 
# second making - reducers (  feature / todo/  todoSlice.js)
- name
- initialState,
-reducers
these three things need to make second step

# third export seperately  reducers
# forth adding  through useDispatch()
# fifth value ko select krne ke liye useSelector()