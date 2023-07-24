import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import async from './../Users/Signup';

export default NextAuth({
  session:{
    jwt:false
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch("http://localhost:3000/api/Users/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:credentials.email,
            password:credentials.password
          }),
        })

        if (!authResponse.ok) {
          return null
        }

        const res = await authResponse.json()
        const user={
          _id:res.details._id,
          Name:res.details.Name,
          email:res.details.email,
          token:res.token
        }
        return user
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
      return {...token,...user}
    },
    async session({session,token,user}){
      session.user=token
      return session
    }
  }
})