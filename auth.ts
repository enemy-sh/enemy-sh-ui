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
                     if (typeof decoded === "object" && decoded !== null && "exp" in decoded) {
                     return new Date((decoded.exp as number) * 1000) < new Date();
                     }
                     return true;
             })()
             : true;

            if (user || isExpired) {
                const payload = {
                    id: user?.id || token.id,
                    name: user?.name || token.name,
                    email: user?.email || token.email,
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

