"use client";
import "./globals.css";

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat">
        <header className="container max-w-full flex justify-center align-middle bg-purple-950 py-4 text-2xl">
          <Link href="/">
            <h1>NextJS APP</h1>
          </Link>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
