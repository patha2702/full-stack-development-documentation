## State management

- It is a cleaner way to store the state of the app.
- Frontend has 2 layers i.e. UI layer (components) and Data Layer(state)
- It is good to have separation of concerns and state management libraries allows us to do it.
- Libraries like redux, recoil, zustand.

### Recoil-easy

- Has a concept of atom(smallest unit of state) to store state
- An atom can be defined outside the component
- It acts like useState i.e. store and manipulate data
- Can be teleported to any component.
- It prevents additional re renders of intermediate components

- Recoil hooks:

1. atom: atom({key, default}) => Create an atom for storing value and export it. The default value of an atom can be a value or a selector.
2. RecoilRoot: Wrap the components what wants the values inside <RecoilRoot>
3. useRecoilState: const [val, setVal] = useRecoilState(atom)
4. useRecoilValue: cont val = useRecoilValue(atom)
5. useSetRecoilState: const setVal = useSetRecoilState(atom)
6. selector: A selector represents a piece of derived state. Value that will be dependent of state, for example filteredTodos dependent on todos. selector({
   key: "unicname",
   get: ({get}) => {
   const val = get(atom)
   return val % 2 == 1
   }
   })
   const res = useRecoilValue(selectorName)
7. Asynchronous Data Queries: How to fetch details from backend and initialise them to atom instead of hard coding values, this is where asynchronous data queries helps us.

- We cannot use async function as default, to solve this, we can use selector as default and selector can be async and return a promise which on resolving should return data.
  export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
  key: "notificationSelector",
  get: async () => {
  const res = await fetch("url/to/target/server");
  return res.json();
  },
  }),
  });

### Recoil-hard
1. Atom family: AtomFamily creates a family of atoms where each member of the family is identified by a unique key
- It provides a way to create a family of atoms based on a template atom, where each member of the family is identified by a unique parameter or key. This parameter is typically provided when accessing or modifying the state associated with that member.
- It lets you dynamically create atoms from components unlike subscribing model.
- Default value should be a function but also can be values

2. Selector family:
