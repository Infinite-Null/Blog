import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  session:{
    jwt:false
  },
  secret:"sece",
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
        if(res.details=="No User Found"){
          throw new Error("User Not Found")
          return null
        }
        if(res.details=="Password Incorrect"){
          throw new Error("Incorrect Password")
          return null
        }
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