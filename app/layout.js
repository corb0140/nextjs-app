import "./globals.css";
import MastHead from "./components/Masthead/MastHead";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat h-screen bg-slate-950">
        <MastHead />
        <main>{children}</main>
      </body>
    </html>
  );
}
