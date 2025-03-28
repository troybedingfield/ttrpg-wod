import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "~/globals.scss";
import Header from "~/components/Header/Header";
import UsernameProvider from "~/_providers/username";
import { Suspense } from "react";
import LoadingSpinner from "~/components/LoadingSpinner/LoadingSpinner";
import { ToastProvider } from "~/_providers/ToastProvider";





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

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <UsernameProvider>

      <html lang="en" data-mode="dark" className="h-full">

        <body className={[roboto.className, "relative", "flex", "flex-col", "w-full", "h-full"].join(' ')}>
          <Header />
          <div className="container relative flex flex-col w-full h-full mx-auto p-4">
            <ToastProvider>
              {children}
            </ToastProvider>
          </div>
        </body>

      </html>

    </UsernameProvider>

  );
}
