import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gestión de Comunidades | Liderazgo Basado en Ciencia",
  description:
    "Habilidades para liderar grupos, foros y equipos de aprendizaje basadas en psicología social, neurociencia y comportamiento organizacional",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
