import { getClient } from "./utils";

async function updateTodos(todoId: number) {
    const client = await getClient()
    const updateTodosText = `
    UPDATE todos
    SET done = $1 
    WHERE id = $2;
    `
    await client.query(updateTodosText, [true, todoId])
    console.log(`Todo with id ${todoId}, is updated to completed`)
} 

updateTodos(1)