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
function getTodosOfUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectTodosText = `
    SELECT * FROM todos
    WHERE user_id = $1;
    `;
        const todosRes = yield client.query(selectTodosText, [userId]);
        for (let todo of todosRes.rows) {
            console.log(`ID: ${todo.id}, Title: ${todo.title},  Description: ${todo.description}, Done: ${todo.done}`);
        }
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectUsersText = `
    SELECT * FROM users;
    `;
        const usersRes = yield client.query(selectUsersText);
        for (let user of usersRes.rows) {
            console.log(`ID: ${user.id} email: ${user.email}, `);
        }
    });
}
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectUsersText = `
    SELECT * users
    WHERE email = $1;
    `;
        const usersRes = yield client.query(selectUsersText, [email]);
        console.log(`${usersRes.rows[0]}`);
    });
}
getUsers();
getUserByEmail("rajendra@gmail.com");
