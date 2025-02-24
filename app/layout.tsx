import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; 
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.variable} 
      >
        {children}
      </body>
    </html>
  );
}
