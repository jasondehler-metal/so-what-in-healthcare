import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SO WHAT in Healthcare",
  description: "What's actually happening at the intersection of AI and healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
