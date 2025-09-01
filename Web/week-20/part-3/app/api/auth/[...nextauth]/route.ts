import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
       CredentialsProvider({
    
    name: 'Email',
 
    credentials: {
      username: { label: "Username", type: "text", placeholder: "shubham123@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      
        return {
            username: "shubham",
            id: '1',
            email: "shubham@gmail.com"
        }
      

    }
  })
    ],
    // jwt error handle
    secret: process.env.NEXTAUTH_SECRET
})


export const GET = handler;
export const POST = handler;