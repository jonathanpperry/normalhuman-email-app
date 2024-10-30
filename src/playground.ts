import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "Jon",
    lastName: "Perry",
  },
});

console.log("done");
