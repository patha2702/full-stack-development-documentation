import { getClient } from "./utils"

async function getEmailAndTodos(id:number) {
    const client = await getClient()
    const queryText = `
    SELECT users.email, todos.id, todos.title, todos.description, todos.done  FROM users 
    INNER JOIN todos ON users.id = todos.user_id
    `
    const res = await client.query(queryText) 
    for (let user of res.rows) {
        console.log(user)
    }
}

getEmailAndTodos(1)