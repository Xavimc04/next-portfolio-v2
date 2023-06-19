import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = { 
    providers: [
        GithubProvider({
            clientId: 'f96b1116506ff30962eb',
            clientSecret: '63d0d3ffdc5a5f8e4f5b08092af68d37ad527441',
        }), 
    ],
}

export default NextAuth(authOptions)