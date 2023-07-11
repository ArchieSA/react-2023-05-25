import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Examples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modalContainer"/>
        <div id="popupContainer"/>
        {children}
      </body>
    </html>
  );
}