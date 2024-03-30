import "./globals.css";
import Header from "./components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat">
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
