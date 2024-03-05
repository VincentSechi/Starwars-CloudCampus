import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Sidebar from "./components/sidebar";
import Header from "./components/header";

export const metadata = {
  title: "SpaceX",
  description: "SpaceX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </body>
    </html>
  );
}
