import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plasma docs",
  description: "Documentação para o github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
