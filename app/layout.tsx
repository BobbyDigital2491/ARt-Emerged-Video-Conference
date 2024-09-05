import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARt Emerged Video Conference",
  description: "Video calling App",
  icons: {
    icon: "/icons/nobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "blockButton",
            logoImageUrl: "/icons/nobg.png",
            logoLinkUrl: "#fff",
          },
          variables: {
            colorText: "#000000",
            colorPrimary: "#ff1110",
            colorBackground: "#FFD700",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-black`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
