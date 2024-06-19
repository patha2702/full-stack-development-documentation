import { getClient } from "./utils";

async function createTable() {
    const createUserTableQuery = `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    `
    const client = await getClient()
    client.query(createUserTableQuery)

    const createTodoTableQuery = `
    CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
    )
    `
    await client.query(createTodoTableQuery)
    console.log("Table created successfully")
}


createTable()
