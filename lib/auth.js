import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || ['hoon@snuecse.org'];
        token.isAdmin = adminEmails.includes(user.email);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.isAdmin = token.isAdmin || false;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};