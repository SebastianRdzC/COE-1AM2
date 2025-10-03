"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageSquare, Shield, TrendingUp, Zap, Target, Sparkles } from "lucide-react"

const skills = [
  {
    icon: MessageSquare,
    title: "Comunicación Empática",
    level: 95,
    description: "Escucha activa y validación emocional según la teoría de Carl Rogers",
    techniques: ["Parafraseo reflexivo", "Validación emocional", "Preguntas abiertas"],
    color: "#0176bc",
  },
  {
    icon: Shield,
    title: "Moderación Inteligente",
    level: 88,
    description: "Aplicación de la teoría del nudge para guiar comportamientos positivos",
    techniques: ["Arquitectura de elección", "Refuerzo positivo", "Normas sociales"],
    color: "#049ce7",
  },
  {
    icon: TrendingUp,
    title: "Análisis de Engagement",
    level: 92,
    description: "Métricas basadas en la teoría del flujo de Csikszentmihalyi",
    techniques: ["Análisis de sentimiento", "Patrones de participación", "Ciclos de actividad"],
    color: "#0076bd",
  },
  {
    icon: Zap,
    title: "Resolución de Conflictos",
    level: 85,
    description: "Modelo de Thomas-Kilmann para gestión de conflictos interpersonales",
    techniques: ["Mediación neutral", "Reencuadre cognitivo", "Soluciones ganar-ganar"],
    color: "#0176bc",
  },
  {
    icon: Target,
    title: "Establecimiento de Objetivos",
    level: 90,
    description: "Teoría de fijación de metas de Locke y Latham",
    techniques: ["Metas SMART", "Feedback continuo", "Celebración de logros"],
    color: "#049ce7",
  },
  {
    icon: Sparkles,
    title: "Gamificación Ética",
    level: 87,
    description: "Motivación intrínseca según la teoría de autodeterminación de Deci y Ryan",
    techniques: ["Autonomía", "Competencia", "Relación social"],
    color: "#0076bd",
  },
]

export function InteractiveSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Habilidades <span className="text-[#049ce7]">Esenciales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Competencias fundamentales respaldadas por investigación científica en psicología y neurociencia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
                </motion.div>
                <span className="text-2xl font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-black">{skill.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{skill.description}</p>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={selectedSkill === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Técnicas Clave:</p>
                  <ul className="space-y-2">
                    {skill.techniques.map((technique) => (
                      <li key={technique} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
