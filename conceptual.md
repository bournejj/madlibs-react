### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front end framework which Makes it easy to make reusable “view components”
These “encapsulate” logic and HTML into a class
Often make it easier to build modular applications

- What is Babel?

Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript.

- What is JSX?

JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

- How is a Component created in React?

- What are some difference between state and props?

prop
data passed to a component (or found via defaults)
immutable; component cannot change its own props
state
data specific to a component
can change!
If the data will ever change, it needs to be in state!

- What does "downward data flow" refer to in React?

In React this means that:

state is passed to the view and to child components
actions are triggered by the view
actions can update the state
the state change is passed to the view and to child components


- What is a controlled component?

Controlled components in React are those in which form data is handled by the component's state. Forms are used to store information in a document section.

- What is an uncontrolled component?


An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior).

- What is the purpose of the `key` prop when rendering a list of components?

React uses the key prop create a relationship between the component and the DOM element.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Because the array index could change and you need something unique that will stay the same like an id

- Describe useEffect.  What use cases is it used for in React components?

React comes with a built in hook for “side effects”
Fetching data, starting a timer, and manually changing the DOM are all side effects
Each render has its own effects
Sometimes these effects require clean-up (clearing a timeout, closing a connection)
we use React useEffect for this

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef is another built-in hook in React.
It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook.
The object persists across renders (so it’s like a local variable, but independent of state).
Mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?

Your first inclination may be to use refs to “make things happen” in your app. If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy.

- What is a custom hook in React? When would you want to write one?

A JavaScript function that typically uses built in hooks
The function name of a custom hook should start with use (useToggleState)
Custom hooks can be reusable across different components
