import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "mysecretpassword",
});

async function createUsersTable() {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
  const result = await client.query(`
    CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
    `);
  console.log(result);
}
async function createTableAddresses() {
  try {
    await client.connect();
  } catch (e) {
    console.log(e);
  }
  const result = await client.query(`CREATE TABLE addresses (
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
}
// createTableAddresses();
// createUsersTable();
// Perform database operations
interface User {
  username: string;
  email: string;
  password: string;
}
async function insertUserData(User: User) {
  // await client.connect();
  const result = await client.query(
    `
    INSERT INTO users(username,password,email) VALUES($1,$2,$3)`,
    [User.username, User.password, User.email]
  );
  console.log(result);
}
// insertUserData
// insertUserData("john", "1233444", "gotjpoighgpd");
let newUser: User = {
  username: "john1",
  password: "12334443",
  email: "gotjpoighgiipd",
};
// transactions---
async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();

    await client.query("BEGIN");

    const insertUserText = `INSERT INTO users(username,email,password ) VALUES($1,$2,$3) RETURNING id`;

    const userRes = await client.query(insertUserText, [
      username,
      email,
      password,
    ]);
    const userId = userRes.rows[0].id;

    const insertAddressText = `
    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5);
`;
    await client.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);
    // Commit transaction
    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (e) {
    // Rollback transaction
    await client.query("ROLLBACK"); // Roll back the transaction on error
    console.log(e);
    throw e;
  } finally {
    await client.end(); // Close the client connection
  }
}
insertUserAndAddress(
  "johndoe",
  "john.doe@example.com",
  "securepassword123",
  "New York",
  "USA",
  "123 Broadway St",
  "10001"
);
// insertUserData(newUser);

// await client.end();
