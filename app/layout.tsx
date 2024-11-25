import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robles Creative Company",
  description:
    "At Robles Creative Company, we empower businesses to thrive in the digital era by blending innovative technology solutions with effective marketing and design. Rooted in expertise and driven by creativity, we aim to simplify the complex, elevate brands, and deliver impactful results through modern tools and strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ff3300] text-white">{children}</body>
    </html>
  );
}
