"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { AlertCircle, CheckCircle, XCircle, ArrowRight } from "lucide-react"

const conflictStyles = [
  {
    name: "Competir",
    description: "Alta asertividad, baja cooperación",
    when: "Decisiones rápidas, emergencias, principios no negociables",
    risk: "Puede dañar relaciones a largo plazo",
    color: "#dc2626",
  },
  {
    name: "Colaborar",
    description: "Alta asertividad, alta cooperación",
    when: "Soluciones creativas, relaciones importantes, tiempo disponible",
    risk: "Requiere tiempo y energía significativos",
    color: "#16a34a",
  },
  {
    name: "Comprometer",
    description: "Asertividad y cooperación moderadas",
    when: "Objetivos mutuamente excluyentes, soluciones temporales",
    risk: "Nadie queda completamente satisfecho",
    color: "#0176bc",
  },
  {
    name: "Evitar",
    description: "Baja asertividad, baja cooperación",
    when: "Temas triviales, necesidad de enfriamiento, sin poder",
    risk: "Problemas sin resolver pueden escalar",
    color: "#9ca3af",
  },
  {
    name: "Acomodar",
    description: "Baja asertividad, alta cooperación",
    when: "Preservar relaciones, reconocer errores, construir crédito social",
    risk: "Puede generar resentimiento si se usa en exceso",
    color: "#049ce7",
  },
]

const resolutionSteps = [
  {
    step: 1,
    title: "Identificación Temprana",
    description:
      "Detecta señales de conflicto antes de que escale: cambios en tono, participación reducida, comentarios pasivo-agresivos.",
    technique: "Monitoreo activo y análisis de sentimiento",
  },
  {
    step: 2,
    title: "Escucha Activa",
    description:
      "Permite que todas las partes expresen sus perspectivas sin interrupciones. Valida emociones antes de abordar hechos.",
    technique: "Técnica del parafraseo y validación emocional",
  },
  {
    step: 3,
    title: "Reencuadre Cognitivo",
    description:
      "Ayuda a las partes a ver el conflicto desde diferentes perspectivas. Transforma 'yo vs tú' en 'nosotros vs el problema'.",
    technique: "Preguntas socráticas y cambio de narrativa",
  },
  {
    step: 4,
    title: "Generación de Soluciones",
    description:
      "Facilita brainstorming colaborativo sin juicio. Busca opciones que satisfagan intereses subyacentes, no solo posiciones.",
    technique: "Negociación basada en intereses (Fisher & Ury)",
  },
  {
    step: 5,
    title: "Acuerdo y Seguimiento",
    description:
      "Documenta acuerdos claros con responsabilidades específicas. Programa check-ins para asegurar cumplimiento.",
    technique: "Contratos de comportamiento y accountability partners",
  },
]

export function ConflictResolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Resolución de <span className="text-[#0176bc]">Conflictos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Modelo Thomas-Kilmann y estrategias basadas en evidencia para gestionar tensiones comunitarias
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">5 Estilos de Manejo de Conflictos</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {conflictStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedStyle(selectedStyle === index ? null : index)}
                className="cursor-pointer"
              >
                <div
                  className="rounded-2xl p-6 h-full border-2 transition-all duration-300"
                  style={{
                    borderColor: selectedStyle === index ? style.color : "transparent",
                    backgroundColor: selectedStyle === index ? `${style.color}15` : "#f9fafb",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${style.color}30` }}
                  >
                    {index === 1 ? (
                      <CheckCircle className="w-6 h-6" style={{ color: style.color }} />
                    ) : index === 3 ? (
                      <XCircle className="w-6 h-6" style={{ color: style.color }} />
                    ) : (
                      <AlertCircle className="w-6 h-6" style={{ color: style.color }} />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-center mb-2" style={{ color: style.color }}>
                    {style.name}
                  </h4>
                  <p className="text-xs text-gray-600 text-center mb-3">{style.description}</p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={selectedStyle === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-200 space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Cuándo usar:</p>
                        <p className="text-xs text-gray-700">{style.when}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Riesgo:</p>
                        <p className="text-xs text-gray-700">{style.risk}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Proceso de Resolución en 5 Pasos</h3>
          <div className="space-y-6">
            {resolutionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#0176bc] to-[#049ce7] flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  {item.step}
                </motion.div>

                <div className="flex-1 bg-gray-50 rounded-2xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h4 className="text-xl font-bold mb-2 text-black group-hover:text-[#0176bc] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-[#049ce7]" />
                    <span className="font-medium text-[#0176bc]">{item.technique}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
