import Script from 'next/script'
import { Poppins, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  style: ['normal', 'italic'],
  display: "swap",
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
    <html lang="en" className={`${poppins.variable} ${playfair.variable} h-full antialiased`}>
      <body className="">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K52MGDH2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,a,r,g){e[r]=e[r]||[],e[r].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var n=t.getElementsByTagName(a)[0],s=t.createElement(a);s.async=!0,s.src="https://www.googletagmanager.com/gtm.js?id="+g+("dataLayer"!=r?"&l="+r:""),n.parentNode.insertBefore(s,n)}(window,document,"script","dataLayer","GTM-K52MGDH2");`,
          }}
        />
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11316340682"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","AW-11316340682");`,
          }}
        />
      </body>
    </html>
  );
}