import { Layout } from "@/components/Layout/Layout";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme";
import { ViewModeProvider } from "@/contexts/viewMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ViewModeProvider>
            <Layout>{children}</Layout>
          </ViewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
