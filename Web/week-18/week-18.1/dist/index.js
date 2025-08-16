// import  { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../src/generated/prisma/client.js';
const client = new PrismaClient();
async function createUser() {
    //  await client.user.create({
    //     data: {
    //         username: "Shubham",
    //         password: "1232324",
    //         age: 21,
    //         city: "Varanasi"
    //     }
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(user);
}
createUser();
//# sourceMappingURL=index.js.map