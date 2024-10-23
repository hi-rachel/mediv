import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "메디브 - AI 혁신 의료 소프트웨어",
  description:
    "Empowering healthcare professionals with cutting-edge AI technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
