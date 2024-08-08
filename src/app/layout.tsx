import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Veré Clothing",
  description: "Veré Clothing Store",
};

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className='bg-[#303030] py-8 px-4 md:px-6 xl:px-12'>
          <Footer />
        </div>
      </body>
    </html>
  );
}