import {  useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtom } from "./store/atoms/todos";
import { filterAtom } from "./store/atoms/filter";
import { filterSelector} from "./store/selectors/filter"

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Todo />
        <Filter />
      </RecoilRoot>
    </div>
  );
};

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodo = useSetRecoilState(todosAtom);

  function handleAddTodo() {
    const todo = {
      title,
      description,
    };
    addTodo((prev) => {
      return [...prev, todo]
    });
    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
}

const Filter = () => {
  const setFilter = useSetRecoilState(filterAtom)
  const filteredTodos = useRecoilValue(filterSelector)
  return (
    <div>
      <label>Filter</label>
      <input
        type="text"
        value={useRecoilValue(filterAtom)}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div>
        {
          filteredTodos.map((todo, index) => {
            return (
              <div key={index}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default App;
