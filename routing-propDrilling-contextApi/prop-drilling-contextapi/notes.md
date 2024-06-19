## Prop Drilling and Context API
- Push down state as low as possible to a lowest common ancestor
- Prop drilling is the concept where the components simply take props from parent component and passes to child component/s and they themselves don't utilize those props, and this leads to unreadable code.
- Props drilling doesn't mean that parent re renders children
- It just means the syntactic uneasiness when writing code

- Context API solves the props drilling problem by enabling the components to directly access the data without the need of passing props.
- Using context API means you are pushing state management outside the core react code
 - createContext
 - context.Provider
 - useContext()

- Downsides of context API:
 - If there is a component which was simply passing props without utlizing it, it is made made syntactically look nice using context api, but the component re renders, even if it is not using the data, this optimization is not given by context api.
 - Doesn't fix re rendering, only fixes prop drilling.
 - Overcomed in State Management Libraries like redux, recoil.