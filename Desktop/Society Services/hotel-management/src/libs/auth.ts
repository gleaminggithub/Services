import { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import sanityClient from './sanity';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLINET_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityClient),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
            _id
        }`,
        { email: userEmail }
      );
      if (!userIdObj || !userIdObj._id) {
        throw new Error("User not found in Sanity");
      }
      return {
        ...session,
        user: {
            ...session.user,
            id: userIdObj._id,
          },
      };
    },
  },
};

// handler for API Routes
// Purpose: This sets up an API route handler
// for authentication using NextAuth.js.

// NextAuth(authOptions): This function creates an API
// handler based on your authentication options.
// export { handler as GET, handler as POST }:
// This exports the handler function for both GET and POST requests. In Next.js, this allows you to handle authentication-related requests
// (e.g., sign-in, sign-out) via this endpoint.