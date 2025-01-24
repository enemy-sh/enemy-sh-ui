import NextAuth from "next-auth";
import jwt from "jsonwebtoken";
import CredentialsProvider from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";


declare module 'next-auth' {
    interface Session {
      accessToken?: string;
    }
  }
  
declare module '@auth/core' {
interface JWT {
    accessToken?: string;
}
}

export const { handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        CredentialsProvider({ 
            name: "Anonymous",
            credentials: {},
            authorize: async () => {
                return {
                    id: "anonymous",
                    name: "Anonymous",
                    email: "anonymous@enemy.sh",
                }
            }
        })
    ],

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        jwt: async({ token, user }) => {
            const isExpired = token.accessToken && typeof token.accessToken === "string"
            ? (() => {
                const decoded = jwt.decode(token.accessToken as string);
                return decoded?.exp ? new Date(decoded.exp * 1000) < new Date() : true;
            })()
            : true;
            if (user || isExpired) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
                token.accessToken = jwt.sign(
                    payload,
                    process.env.AUTH_SECRET as string,
                    {
                        expiresIn: "24h",
                    }
                    
                );
            }
            return { ...token, ...user};
        },
        session: async ({ session, token }) => {
            session.user = token as unknown as AdapterUser;
            if ( typeof token.accessToken === "string") {
                session.accessToken = token.accessToken;
            }
            return session;
        }
    }
});

