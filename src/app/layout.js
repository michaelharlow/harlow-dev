import { Noto_Serif } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Harlow.dev",
  description: "portfolio of Michael Harlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
