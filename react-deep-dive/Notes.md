## Notes
- Re-render:
 - React calculates what all should update in the component.
 - Calling the function
 why re-rerender occurs:
 - A state variable that is being used inside a component changes
 - A parent component re renders triggering all children component re rendering
 Minimizing re renders:
 - Move the state down, so that static content does not re render and specific component re renders which has state defined in it.
 - Employ useMemo hook, so that it lets us skip re rendering when a components props are unchanged.
- memo:
 - memo lets you skip re rendering a component when its props are unchanged.
- Wrapper component:
 - It is a component that takes other react component as prop at display it.
 - For eg, wrapper component gives border effect to component it receives as props.
 - Example:  <CardWrapper><Card /></CardWrapper>

- Side Effects:
 - It encompasses any operation that reaches outside functional scope of a React component.
 - Operations like async data fetching, affecting other components, doing web api operations

### Hooks:
- Functions starting with "use"
- hooks are functions that enable functional components to use state, lifecycle methods.
 - useState:
  - It lets you describe the state of your app. Whenever state updates, it triggers a re render, which finally results in DOM update.
 - useEffect:
  - It allows us to perform side effects, operations other than rendering like fetching, manual DOM manipulation
  - It serves same purpose as componentDidMount, componentDidUpdate, componentWillUnmount in React class components.
 - useMemo(numbers/ string/ values):
  - Memoization: Storing the result of some expensive computation, so that we need not compute the same again(memoize the value across re renders).
  - For performance optimization
  - useMemo(callback, []), where callback return result of the computation
  - If two things are related like todos and filtered todos, i.e whenever todos get updated filtered todos also get updated. Now for this, using state for todos, updating todos from useEffect and keeping filtered todos inside useMemo with todos as dependency is optimized code, instead of two state variables for todos and filtered todos.
 - useCallback(functions):
  - It is used to memoize functions, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary re-renders. (When we use memo for storing the computed results, the function will execute again only if dependency/ props changes. These change is calculated using == operator, that means if old prop(a) is 2 and new prop(b) is 2, it does not re render because a==b returns true and indicates no change, but in case non primitives like obj and function, if function a(){conosle.log("Hello")} and function b(){console.log("Hello")}, then a==b returns false, because of referential equality and it re renders, since it indicates change, but in reality function content is same and this causes unwanted re renders, to prevent this we use useCallback)
  - To prevent this wrap the function in useCallback()
- useRef:
 - It lets you access DOM elements


