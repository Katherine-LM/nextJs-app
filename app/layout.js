import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My first next App ✌",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/quartz/bootstrap.min.css"
        />
      </head>
      <body>
        <Navbar />

        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
