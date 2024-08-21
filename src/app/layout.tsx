import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidenav from "@/components/Sidenav";
import ScrollIndicator from "@/components/ScrollIndicator";
import type { ReactNode } from "react";
import { AppContextProvider } from "@/lib/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Bernardi",
  description: "Portfolio site for Daniel Bernardi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-grey-darkest')}>
      <div className="grid grid-cols-[1fr] lg:grid-cols-[4fr,2fr,6fr] min-h-[100svh] px-6 sm:px-10 max-w-[1280px] mx-auto relative">
        <AppContextProvider>
          <Sidenav />
          <ScrollIndicator />
          <main>
            {children}  
          </main>
        </AppContextProvider>
      </div>
      </body>
    </html>
  );
}
