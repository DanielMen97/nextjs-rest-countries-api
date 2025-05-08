import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans } from "./fonts";

export const metadata: Metadata = {
  title: "REST Countries API",
  description:
    "GIf you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>{children}</body>
    </html>
  );
}
