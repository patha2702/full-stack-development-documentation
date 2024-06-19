import { getClient } from "./utils";
async function insertValues() {
  const client = await getClient();

  const insertUserText = `
  INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;`

  const userValues = ['rajendra@gmail.com', 'Rajendra20']
  let response = await client.query(insertUserText, userValues)

  const insertTodoText = `
  INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id;
  `
  const todoValues = ['Go To Gym', "Chew some grass", response.rows[0].id, false]

  await client.query(insertTodoText, todoValues)
  console.log("Entries created")

}

insertValues();
