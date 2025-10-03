import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/scroll-progress"

// Fuente sans similar a Geist
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

// Fuente mono similar a Geist Mono
const geistMono = JetBrains_Mono({
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
