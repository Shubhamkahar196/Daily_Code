import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "skk12@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
    //  custom logic

        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);

        // db request to check if this username and password are correct

        const user = {
          name: "shubham",
          id: "1",
          username: "shubham@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
    clientId: "gcgcgj",
    clientSecret: "gcgc"
  })
  ],
});

export const GET = handler;
export const POST = handler;
