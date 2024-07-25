import { authOptions } from '@/libs/auth';
import NextAuth from 'next-auth';


const handler =NextAuth(authOptions);

export {handler as GET ,handler as POST};

// authOptions
// This is where you define the configuration for 
// NextAuth. It will include settings for 
// authentication providers, callbacks, 
// session management, etc. 
// You haven't added any options yet, 
// but typically this is where you would specify: