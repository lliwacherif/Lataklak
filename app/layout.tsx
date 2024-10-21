import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Cairo({ subsets: ["latin"] });

const Navbar = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Merkanti Sponsoring",
  description: "Formation Sponsoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          // enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
