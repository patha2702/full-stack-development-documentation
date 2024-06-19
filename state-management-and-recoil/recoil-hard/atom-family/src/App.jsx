import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
        <UpdateTodo />
      </RecoilRoot>
    </div>
  );
};

function UpdateTodo() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2))

  useEffect(()=> {
    setTimeout(()=> {
      updateTodo({
        id: 2,
        title: "New title",
        description: "NEW Description"
      })
    }, 5000)
  }, [])
  return <div></div>
}
function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
    </>
  );
}

export default App;
