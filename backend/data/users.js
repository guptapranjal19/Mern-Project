import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "pranjal gupta",
    email: "pranjal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "pranjal gupta",
    email: "pranjalgupta.dtu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
