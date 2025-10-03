"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Sparkles, Zap, Heart } from "lucide-react"

const insights = [
  {
    icon: Brain,
    title: "Neuronas Espejo y Empatía",
    finding:
      "Giacomo Rizzolatti descubrió que las neuronas espejo se activan tanto al realizar una acción como al observarla en otros.",
    application:
      "Los líderes que modelan comportamientos positivos activan las neuronas espejo de su comunidad, facilitando la adopción de conductas deseadas.",
    neurotransmitter: "Oxitocina",
    effect: "Aumenta confianza y cohesión social",
    color: "#0176bc",
  },
  {
    icon: Sparkles,
    title: "Dopamina y Recompensas",
    finding:
      "Wolfram Schultz demostró que la dopamina se libera ante recompensas inesperadas, no solo ante la recompensa misma.",
    application:
      "Implementa reconocimientos sorpresa y celebraciones espontáneas para maximizar la liberación de dopamina y mantener el engagement.",
    neurotransmitter: "Dopamina",
    effect: "Refuerza motivación y aprendizaje",
    color: "#049ce7",
  },
  {
    icon: Zap,
    title: "Sincronización Neural",
    finding:
      "Uri Hasson descubrió que los cerebros de personas en conversación profunda sincronizan sus patrones de actividad.",
    application:
      "Facilita discusiones significativas y storytelling compartido para crear sincronización neural y fortalecer vínculos comunitarios.",
    neurotransmitter: "Serotonina",
    effect: "Mejora estado de ánimo y pertenencia",
    color: "#0076bd",
  },
  {
    icon: Heart,
    title: "Cortisol y Estrés Social",
    finding:
      "Shelley Taylor identificó que el apoyo social reduce significativamente los niveles de cortisol en situaciones estresantes.",
    application:
      "Crea redes de apoyo peer-to-peer y sistemas de mentoría para reducir el estrés y aumentar la resiliencia comunitaria.",
    neurotransmitter: "Cortisol (reducción)",
    effect: "Disminuye ansiedad y mejora bienestar",
    color: "#0176bc",
  },
]

export function NeuroscienceInsights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="brain-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#0176bc" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brain-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Insights de <span className="text-[#0076bd]">Neurociencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Cómo funciona el cerebro en contextos sociales: aplicaciones prácticas de la neurociencia social
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${insight.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${insight.color}20` }}
                    >
                      <insight.icon className="w-8 h-8" style={{ color: insight.color }} />
                    </motion.div>

                    <div className="text-right">
                      <div className="text-xs font-mono text-gray-500 mb-1">Neurotransmisor</div>
                      <div className="font-bold text-sm" style={{ color: insight.color }}>
                        {insight.neurotransmitter}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black">{insight.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                        🔬 Hallazgo Científico
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{insight.finding}</p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                        💡 Aplicación Práctica
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{insight.application}</p>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl mt-4"
                      style={{ backgroundColor: `${insight.color}10` }}
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4" style={{ color: insight.color }} />
                        <span className="text-sm font-medium text-gray-700">{insight.effect}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
