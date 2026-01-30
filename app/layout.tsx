import React from "react"
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Cormorant_Garamond, Nunito_Sans, Open_Sans as V0_Font_Open_Sans, Geist_Mono as V0_Font_Geist_Mono, Vollkorn as V0_Font_Vollkorn } from 'next/font/google'

// Initialize fonts
const _openSans = V0_Font_Open_Sans({ subsets: ['latin'], weight: ["300","400","500","600","700","800"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _vollkorn = V0_Font_Vollkorn({ subsets: ['latin'], weight: ["400","500","600","700","800","900"] })

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const nunito = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Alma & Ser | Bienestar Holístico',
  description: 'Cuida tu cuerpo, mente y alma con nuestros servicios de psicología y productos de bienestar',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
