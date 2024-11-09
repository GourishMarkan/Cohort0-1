import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});
export type FinalUser = z.infer<typeof userProfileSchema>;
app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
// ,interface----
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}
// pick--> it will pick the properties from the object
type UpdateProps = Pick<User, "name" | "age" | "email">;
// Function that accepts a UserProfile type
const displayUserProfile = (user: UpdateProps) => {
  console.log(`Name:${user.name},Age:${user.age},Email:${user.email}`);
};

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>;
// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(UpdateProps: UpdatePropsOptional) {
  // hit the database to update the user
  console.log(UpdateProps);
}
// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: 30, email: "alice@example.com" }); // Updating age and email
// updateUser({}); // No updates, but still a valid call
// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// readonly properties in TypeScript--
interface Config {
  endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "<https://api.example.com>",
  apiKey: "abcdef123456",
};
// config.endpoint = "<https://api.example.com>"; // Error: Cannot assign to 'endpoint' because it is a read-only property

// Record and Map types in TypeScript--
// Record type in TypeScript
interface User1 {
  id: string;
  name: string;
}

// Using Record to type an object with string keys and User values-
type Users = Record<string, User1>;

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

// maps----
const users1 = new Map<string, User1>();
users1.set("abc123", { id: "abc123", name: "John Doe" });
users1.set("xyz789", { id: "xyz789", name: "Jane Doe" });
console.log(users1.get("abc123"));

type EventType = "click" | "scroll" | "mousemove";
// Using Exclude to create a new type without 'scroll'
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

// Function that accepts only 'click' and 'mousemove' events
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
// handleEvent("scroll"); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.
// -----------------------------------
// const age = sumOfAge({ name: "gourish", age: 20 }, { name: "raju", age: 20 });
// console.log(age);
// write a function to get current userd-
// function getCurrentUser(): User {
