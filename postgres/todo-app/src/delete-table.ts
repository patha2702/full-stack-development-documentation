import { getClient } from "./utils";

async function deleteTodosTable() {
    const client = await getClient()
    const deleteTodosText = `
    DROP TABLE IF EXISTS users
    `
    await client.query(deleteTodosText)
    console.log("Todos table deleted")
}

deleteTodosTable()