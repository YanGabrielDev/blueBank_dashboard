import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal"
});

export const metadata: Metadata = {
  title: "Boxbank",
  description: "O seu banco de confiança",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${poppinsSans.variable} antialiased dark:bg-darkBackground`}
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-2">
            <Sidebar />
          </div>

          <div className="col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
