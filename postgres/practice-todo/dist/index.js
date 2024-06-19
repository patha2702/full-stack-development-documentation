"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// Creating
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getConnection)();
        try {
            const userTableQuery = `
          CREATE TABLE newUsers (
              id SERIAL PRIMARY KEY,
              username VARCHAR(255) NOT NULL UNIQUE,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
          `;
            yield client.query(userTableQuery);
            console.log("New user table created");
        }
        catch (err) {
            console.error("Error: ", err);
        }
        finally {
            yield client.end();
        }
    });
}
// Insert Data
function insertUserData(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getConnection)();
        const insertUserDataQuery = `
    INSERT INTO newusers(username, password) VALUES($1, $2);
    `;
        yield client.query(insertUserDataQuery, [username, password]);
        console.log("Added user");
    });
}
// Update Data
function updateUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getConnection)();
        const updateUserDataQuery = `
    UPDATE newusers 
    SET password = $1
    WHERE username = $2;
    `;
        yield client.query(updateUserDataQuery, ["Rajendra", "rajendra"]);
        console.log("Password updated");
    });
}
// Delete User
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getConnection)();
        const deleteUserQuery = `
    DELETE FROM newusers
    WHERE id = $1;
    `;
        yield client.query(deleteUserQuery, [id]);
        console.log("User deleted");
    });
}
function fetchUserDetails(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getConnection)();
        try {
            const res = yield client.query("SELECT * FROM newusers WHERE username = $1", [username]);
            if (res.rows.length < 0) {
                console.log("No user exists");
                return null;
            }
            else {
                console.log("User exists: ", res.rows[0]);
                return res.rows[0];
            }
        }
        catch (err) {
            console.error("Error fetching the user", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
fetchUserDetails("rajendra").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
