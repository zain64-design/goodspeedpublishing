import { Poppins, Playfair_Display } from "next/font/google";
import localFont from 'next/font/local';
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  style: ['normal'],
  display: "swap",
});

const poppinsBoldItalic = localFont({
  src: '../../public/fonts/Poppins-BoldItalic.woff2',
  variable: "--font-poppins-bold-italic",
  weight: '700',
  style: 'italic',
  display: 'swap',
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair-sans",
  weight: ['800'],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${poppinsBoldItalic.variable} h-full antialiased`}>
      <body className="">
        {children}
      </body>
    </html>
  );
}