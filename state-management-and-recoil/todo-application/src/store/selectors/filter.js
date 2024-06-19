import { selector } from "recoil";
import { todosAtom } from "../atoms/todos";
import { filterAtom } from "../atoms/filter";

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get}) => {
        const todos = get(todosAtom)
        const filterText = get(filterAtom)
        return todos.filter(todo => {
            return todo.title.toLowerCase().includes(filterText.toLowerCase()) || todo.description.toLowerCase().includes(filterText.toLowerCase())
        })
    }
})