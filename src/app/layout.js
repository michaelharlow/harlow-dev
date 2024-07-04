import "./globals.css";

import { notoSansMono } from "@/util/fonts";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Harlow.dev",
  description: "portfolio of Michael Harlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansMono.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
