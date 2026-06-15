import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thy Nguyen | Portfolio",
  description:
    "Computer Science Graduate specializing in Data Analytics, AI, and Cloud Technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
