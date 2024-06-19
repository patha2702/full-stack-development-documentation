import { Client } from "pg"

export async function getClient() {
    const client = new Client("postgresql://test_owner:dNIJcWgo04nF@ep-still-lake-a5hpekwb.us-east-2.aws.neon.tech/todo-app?sslmode=require")
    await client.connect()
    return client
}