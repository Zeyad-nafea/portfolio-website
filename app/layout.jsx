import "./globals.css";
import Header from "@/components/ui/Header";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});

export const metadata = {
  title: "Zeyad Nafea - Data Scientist & AI Engineer",
  description: "Computer Science and Data Engineering student at Zewail City of Science and Technology with expertise in AI and Data Science.",
  keywords: "Zeyad Nafea, Data Scientist, AI Engineer, Machine Learning, Data Analysis, Computer Science",
  author: "Zeyad Nafea",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} antialiased bg-gradient-to-b from-[#0f0f0f] via-[#1c1c1c] to-[#191919] text-white overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}