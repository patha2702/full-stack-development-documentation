import { getConnection } from "./utils";

// Creating
async function createUserTable() {
  const client = await getConnection();
  try {
    const userTableQuery = `
          CREATE TABLE newUsers (
              id SERIAL PRIMARY KEY,
              username VARCHAR(255) NOT NULL UNIQUE,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
          `;
    await client.query(userTableQuery);
    console.log("New user table created");
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    await client.end();
  }
}

// Insert Data
async function insertUserData(username: string, password: string) {
  const client = await getConnection();
  const insertUserDataQuery = `
    INSERT INTO newusers(username, password) VALUES($1, $2);
    `;
  await client.query(insertUserDataQuery, [username, password]);
  console.log("Added user");
}

// Update Data
async function updateUserData() {
  const client = await getConnection();
  const updateUserDataQuery = `
    UPDATE newusers 
    SET password = $1
    WHERE username = $2;
    `;
  await client.query(updateUserDataQuery, ["Rajendra", "rajendra"]);
  console.log("Password updated");
}

// Delete User
async function deleteUser(id: number) {
  const client = await getConnection();
  const deleteUserQuery = `
    DELETE FROM newusers
    WHERE id = $1;
    `;
  await client.query(deleteUserQuery, [id]);
  console.log("User deleted");
}

async function fetchUserDetails(username: string) {
  const client = await getConnection()
  try {
    const res = await client.query("SELECT * FROM newusers WHERE username = $1", [username])
    if (res.rows.length < 0) {
      console.log("No user exists")
      return null
    } else {
      console.log("User exists: ", res.rows[0])
      return res.rows[0]
    }
  } catch (err) {
    console.error("Error fetching the user", err)
    throw err
  } finally {
    await client.end()
  }
}

fetchUserDetails("rajendra").then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})