import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['hoon@snuecse.org'];
        token.isAdmin = adminEmails.includes(user.email);
      }
      return token;
    },
    async session({ session, token }) {
      // 관리자 이메일 목록 (환경 변수로 설정 가능)
      const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['hoon@snuecse.org'];
      
      // 사용자가 관리자인지 확인
      session.user.isAdmin = adminEmails.includes(session.user.email);
      
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };