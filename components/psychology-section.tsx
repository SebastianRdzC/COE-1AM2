"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Users, Lightbulb, Heart } from "lucide-react"

const psychologyPrinciples = [
  {
    icon: Brain,
    title: "Teoría de la Identidad Social",
    description:
      "Henri Tajfel demostró que las personas derivan parte de su autoestima de su pertenencia a grupos. Los líderes efectivos cultivan una identidad colectiva positiva.",
    insight: "Los miembros se comprometen más cuando sienten que el grupo refleja sus valores personales.",
    color: "#0176bc",
  },
  {
    icon: Users,
    title: "Efecto de Conformidad de Asch",
    description:
      "Solomon Asch reveló que el 75% de las personas se conforman con el grupo al menos una vez. Los líderes deben equilibrar cohesión con pensamiento crítico.",
    insight: "Fomenta la diversidad de opiniones para evitar el pensamiento grupal.",
    color: "#049ce7",
  },
  {
    icon: Lightbulb,
    title: "Facilitación Social de Zajonc",
    description:
      "La presencia de otros mejora el rendimiento en tareas simples pero lo dificulta en tareas complejas. Diseña espacios según la complejidad de la tarea.",
    insight: "Crea zonas de colaboración para tareas simples y espacios privados para trabajo complejo.",
    color: "#0076bd",
  },
  {
    icon: Heart,
    title: "Reciprocidad de Cialdini",
    description:
      "Robert Cialdini identificó que las personas sienten obligación de devolver favores. Los líderes que dan primero construyen comunidades más fuertes.",
    insight: "Ofrece valor antes de pedir participación para activar el principio de reciprocidad.",
    color: "#0176bc",
  },
]

export function PsychologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0176bc]/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Fundamentos <span className="text-[#0176bc]">Psicológicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            La gestión de comunidades se basa en principios científicos comprobados de psicología social y
            comportamiento humano
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {psychologyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${principle.color}10, transparent)`,
                }}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${principle.color}15` }}
                >
                  <principle.icon className="w-8 h-8" style={{ color: principle.color }} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#0176bc] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{principle.description}</p>

                <div
                  className="p-4 rounded-lg border-l-4 mt-4"
                  style={{ borderColor: principle.color, backgroundColor: `${principle.color}08` }}
                >
                  <p className="text-sm font-medium text-gray-700 italic">💡 {principle.insight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
