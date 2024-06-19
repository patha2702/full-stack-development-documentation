# Custom hooks

- Hooks are functions that enable us to have access to life cycle events of a component such as mounting(componentDidMount), unmounting(componentWillUnmount), re rendering and state of the component.
- Custom hook is a function with following properties:
  - Uses another hook internally (useState, useEffect, another custom hook)
  - Starts with use
- Examples:
  - Data fetching hooks
  - Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition
  - Performance/ timer based - useInterval, useDebounce
- Data fetching hooks:
  - Data fetching hooks can be used to encapsulate all the logic to fetch data from your backend
  - clean up function incase of polling
- swr - React data fetching library
- Browser functionality related hooks - useIsOnline, useMousePointer, useWindowDimensions
- Performance/ Timer based - useInterval, useDebounce
