import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ChatWidgetGate } from "./ChatWidgetGate";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const isChatWidgetEnabled = process.env.CHAT_WIDGET_ENABLED === "true";

export const metadata: Metadata = {
  title: "AC dot dev",
  description: "Developer portfolio and resume for Ava Collins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowY: "auto" }} tabIndex={0}>
      <body className={inter.className}>
        {children}
        <ChatWidgetGate isEnabled={isChatWidgetEnabled} />
        <Analytics />
        <div tabIndex={0} />
      </body>
    </html>
  );
}
