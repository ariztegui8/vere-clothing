import { Montserrat } from "next/font/google";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Veré Clothing - Checkout",
  description: "Veré Clothing Store",
};

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayoutCheckout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
        <div className={inter.className}>
          {children}
        </div>

  );
}