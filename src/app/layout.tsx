import { Poppins, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair-sans",
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="">{children}</body>
    </html>
  );
}
