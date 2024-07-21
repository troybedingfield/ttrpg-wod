import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Welcome to your Unlife",
  description: "Hub for your WOD Character Sheets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="container mx-auto pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
