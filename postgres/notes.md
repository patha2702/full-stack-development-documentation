# Postgres

- Types of DB
  - SQL: Strict schemas, difficult to change schema, involve migrations
  - NOSQL: Schema less, faster to produce apps
- Connection string: postgres://[username]:[password]@[host]/[database_name] Rajendra20supabase
- pg: helps interact with postgresql database, similar to mongoose.

- Basic:
  - Creating tables:
    - CREATE TABLE users {
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
      };
  - References/ Foreign key:
    CREATE TABLE todos {
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    userId INTEGER REFERENCES users(id),
    completed BOOLEAN DEFAULT FALSE
    }
  - Inserting:
    - INSERT INTO table (col1, col2, col3) VALUES ($1, $2, $3)
      values = ["val1", "val2" , "val3"]
    - We are separating query and values to prevent SQL injection.
  - Getting Data:
    - SELECT \* FROM table
      WHERE user_id = target_user_id;
  - Updating:
    - UPDATE tabName
      SET colname=value
      WHERE condition;
  - Deleting:
    - DELETE FROM tabName
      WHERE condition;
  - Removing entire table:
    - DROP TABLE IF EXISTS tabName;
- Joins: Joins lets you combine rows from multiple tables and display it to users according to requirements
  - Inner Join: Retrieves rows from both tables that satisfy the join condition, combining related data.
  - Full Join: A full join returns all rows from both tables, matching rows where applicable, and including NULL values where there is no match. It ensures that rows from both tables are present in the result set.
  - Left Table: Includes all rows from the left table and matching rows from the right table, preserving left table data.
  - Right Table: Includes all rows from the right table and matching rows from the left table, preserving right table data.

- Migrations:
  - Changing the structure of database, tables as the application grows like add new columns to tables creating new tables and so on.
  - Syncing the database state between dev DB and prod DB
