import { Client } from "pg";

export async function getConnection() {
    const client = new Client("postgres://postgres:Rajendra%4020postgres@localhost:5432/project")
    await client.connect()
    return client
}