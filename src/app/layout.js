import { Layout } from "@/components/Layout/Layout";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme";
import { MobileVersionProvider } from "@/contexts/device";
import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "О наших ресторанах",
  description: "Онлайн меню",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MobileVersionProvider>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </MobileVersionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
