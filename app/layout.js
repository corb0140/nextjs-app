import "./globals.css";
import MastHead from "./components/Masthead/MastHead";

export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat h-screen bg-white">
        <MastHead />
        <main>{children}</main>
      </body>
    </html>
  );
}
