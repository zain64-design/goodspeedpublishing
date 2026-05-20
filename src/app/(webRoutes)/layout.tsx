import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/app/_components/webComp/common/header/Header";
import Footer from "@/app/_components/webComp/common/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | GoodSpeed Publishing",
  description: "Home Web Page for GoodSpeed Publishing",
};

export default function RootLayout({children,}:Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header/>
        <main className="">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}