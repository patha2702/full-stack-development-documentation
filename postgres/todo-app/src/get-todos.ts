import { getClient } from "./utils"

async function getTodosOfUser(userId: number) {
    const client = await getClient()
    const selectTodosText = `
    SELECT * FROM todos
    WHERE user_id = $1;
    `
    const todosRes = await client.query(selectTodosText, [userId])
    for (let todo of todosRes.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title},  Description: ${todo.description}, Done: ${todo.done}`)
    }
}

async function getUsers() {
    const client = await getClient()
    const selectUsersText = `
    SELECT * FROM users;
    `
    const usersRes = await client.query(selectUsersText)
    for (let user of usersRes.rows) {
        console.log(`ID: ${user.id} email: ${user.email}, `)
    }
}

async function getUserByEmail(email: string ){
    const client = await getClient()
    const selectUsersText = `
    SELECT * users
    WHERE email = $1;
    `
    const usersRes = await client.query(selectUsersText, [email])
    console.log(`${usersRes.rows[0]}`)
}

getUsers()
getUserByEmail("rajendra@gmail.com")