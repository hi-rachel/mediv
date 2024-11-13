import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <Head>
        <meta
          name="naver-site-verification"
          content="9fde815546ec9ba5b642f0b2f746fc765f1cb0b4"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
