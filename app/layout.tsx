import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTopButton from "./common/ScrollToButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediv",
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
