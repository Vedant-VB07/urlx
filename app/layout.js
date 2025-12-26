import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "urlX: Link Shortner",
  description: "This web app shortens the url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-[url('/bg.jpg')] opacity- bg-cover bg-center bg-no-repeat"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
