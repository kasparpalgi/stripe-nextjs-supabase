import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StripeProvider from "./components/StripeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe + Next.js + Supabase",
  description: "Payment integration demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StripeProvider>{children}</StripeProvider>
      </body>
    </html>
  );
}
