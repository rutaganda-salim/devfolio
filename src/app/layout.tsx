import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { GeistMono } from 'geist/font/mono';
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "Salim Rutaganda - Frontend developer",
  description: "Front-end Developer / Content Creator",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

