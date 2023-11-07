import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainPage from "@/features/MainPage/MainPage";

const helvetica = localFont({
  src: [
    {
      path: "../fonts/Helvetica.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Helvetica-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Armageddon",
  description: "App made for test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={helvetica.className}>
        <MainPage>{children}</MainPage>
      </body>
    </html>
  );
}
