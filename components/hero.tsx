"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#049ce7]/5 to-[#0176bc]/10">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#049ce7]/20 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#0176bc]/20 blur-3xl"
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ bottom: "20%", right: "10%" }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-mono tracking-wider text-[#0176bc] uppercase">
              Psicología del Liderazgo Comunitario
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 text-balance"
          >
            <span className="text-black">Gestión de</span>
            <br />
            <span className="bg-gradient-to-r from-[#0176bc] via-[#049ce7] to-[#0076bd] bg-clip-text text-transparent">
              Comunidades
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty"
          >
            La ciencia detrás del liderazgo efectivo: neurociencia, psicología social y dinámicas de grupo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            {[
              { label: "Neurociencia Social", color: "#049ce7" },
              { label: "Psicología de Grupos", color: "#0176bc" },
              { label: "Comportamiento Colectivo", color: "#0076bd" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 cursor-pointer"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-[#0176bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
