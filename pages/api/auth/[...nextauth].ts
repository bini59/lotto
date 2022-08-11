import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

import excuteQuery from '../../../lib/db'

export default NextAuth({
    secret: process.env.AUTH_SECRET,
  // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              console.log(credentials)
              console.log(req.body)
              const result = await excuteQuery({
                query: `select 'name', 'password' from user where id="${credentials.username}";`,
                values: "",
              });
              console.log(result);
        
              if (result.length != 0) {
                // Any object returned will be saved in `user` property of the JWT
                if (result[0].password == credentials.password) {
                  return {id: credentials.username, name: result[0].name, email: "test@g"}
                }
                else {
                  return null  
                }
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })
    ],
    pages: {
      signIn: "/login",
      error: "/login"
    }
})