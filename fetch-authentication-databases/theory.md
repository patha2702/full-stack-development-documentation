# Fetch
- To send http requests from websites.


# Authentication

## Hashing
- **Definition**: Hashing is the process of converting text into a fixed-size string of characters using a hash function.
- **Hash Function**: A hash function generates the same hash value for the same input.
- **One-way Process**: Hashing is a one-way process, meaning that the original input cannot be derived from the hash value.
- **Storage and Comparison**: When a user's password is hashed and stored in the database, hashing is used to securely store passwords. During login, the entered password is hashed again, and this hash value is compared with the stored hash to verify the password's correctness.

## Encryption
- **Definition**: Encryption is a two-way process where text can be encrypted into a hash value and decrypted back to text, given the appropriate key or password. Encryption involves reversible transformations.
- The one who has key can decode the hash value
  
## JSON Web Tokens (JWT)
- **Functionality**: JSON Web Tokens (JWT) create tokens from JSON data, commonly used for authentication and information exchange. However, JWT is neither encryption nor hashing; it's a tokenization method.
- **Token Visibility**: The JSON payload is visible within the JWT, making it different from hashing and encryption methods.
- Anyone can decode the string to get back original json, but verification can be done only by owner.
- Anyone can see the original output given the signature.
- Signature can be verified only using the password.

## Local Storage
- **Context**: Local storage refers to storing data locally on the client-side, such as in a web browser's local storage. This could include storing authentication tokens or other data for later retrieval.

## Local storage
- A place in your browser where you can store some data.
- Things like
1. Authentication tokens
2. User language preference
3. User theme preference


# Databases
Every application has to store its data somewhere. You can imagine a container allocated only to store the data of a particular application, like Facebook, LinkedIn, Twitter, etc. This container is called a database.

Types of Databases:
1. Relational
2. Non-Relational

MongoDB:
MongoDB is a type of database used to store application data. It is a NoSQL database, which means it does not follow the traditional column and row structure to store data.

MongoDB Mindmap:
Code Side                       MongoDB Side
1. Database setup               1. Database formation
2. Model                        2. Collection
3. Schema                       3. Documents

Model (code) => Collection (DB):
To represent a variety of data in the database, we create models.
The code you write to define a type of data, such as users, products, sellers, etc., is called
a model. A model, as a result, produces a collection on the database side.
For example, a users model creates a users collection.

Schema (code) => Documents (DB)
A single entity in the model is called a schema, which results in a document on the database side.
For example, a users model can have user1, user2 schema OR a users collection can have user1, user2 documents.

Steps for MongoDB connection:
1. Install mongodb: From official website
2. Install mongoosejs: npm install mongoose
3. require and setup connection
4. Create schema
5. Create model and export


# Questions
1. Explain how authentication works using jwt, localstorage.