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
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
        }
        catch (err) {
            console.log(err);
        }
        const result = yield client.query(`
    CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
    `);
        console.log(result);
    });
}
function createTableAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
        }
        catch (e) {
            console.log(e);
        }
        const result = yield client.query(`CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`);
        console.log(result);
    });
}
function insertUserData(User) {
    return __awaiter(this, void 0, void 0, function* () {
        // await client.connect();
        const result = yield client.query(`
    INSERT INTO users(username,password,email) VALUES($1,$2,$3)`, [User.username, User.password, User.email]);
        console.log(result);
    });
}
// insertUserData
// insertUserData("john", "1233444", "gotjpoighgpd");
let newUser = {
    username: "john1",
    password: "12334443",
    email: "gotjpoighgiipd",
};
// transactions---
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query("BEGIN");
            const insertUserText = `INSERT INTO users(username,email,password ) VALUES($1,$2,$3) RETURNING id`;
            const userRes = yield client.query(insertUserText, [
                username,
                email,
                password,
            ]);
            const userId = userRes.rows[0].id;
            const insertAddressText = `
    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5);
`;
            yield client.query(insertAddressText, [
                userId,
                city,
                country,
                street,
                pincode,
            ]);
            // Commit transaction
            yield client.query("COMMIT");
            console.log("User and address inserted successfully");
        }
        catch (e) {
            // Rollback transaction
            yield client.query("ROLLBACK"); // Roll back the transaction on error
            console.log(e);
            throw e;
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertUserAndAddress("johndoe", "john.doe@example.com", "securepassword123", "New York", "USA", "123 Broadway St", "10001");
// insertUserData(newUser);
// await client.end();
