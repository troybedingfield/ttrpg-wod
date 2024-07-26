import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";
import UsernameProvider from "./provider/username";


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: false
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
    <UsernameProvider>
      <html lang="en" data-mode="dark">

        <body className={[roboto.className].join(' ')}>
          <Header />
          <div className="container mx-auto p-4">
            {children}
          </div>
        </body>

      </html>
    </UsernameProvider>
  );
}
