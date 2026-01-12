import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatContact from "@/app/components/FloatContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-exo2',
})

export const metadata: Metadata = {
  title: "VINASAFE - Tư vấn và Kiểm định An toàn Việt Nam",
  description: "VINASAFE - Kiểm định kỹ thuật an toàn, hiệu chuẩn đo lường, thử nghiệm và huấn luyện an toàn tại Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatContact />
      </body>
    </html>
  );
}
