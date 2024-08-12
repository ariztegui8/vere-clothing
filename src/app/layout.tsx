import { Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { CarritoProvider } from "@/context/CarritoProvider";


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
      <CarritoProvider>
        <body className={inter.className}>
          {children}
        </body>
      </CarritoProvider>
    </html>
  );
}