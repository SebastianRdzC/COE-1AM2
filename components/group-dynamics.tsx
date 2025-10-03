"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const stages = [
  {
    name: "Forming",
    title: "Formación",
    description: "Los miembros se conocen y establecen normas básicas. Alta cortesía, baja productividad.",
    psychology: "Ansiedad social y búsqueda de aceptación según la teoría de Maslow",
    leaderRole: "Proporcionar estructura clara, establecer expectativas y crear seguridad psicológica",
    duration: "2-4 semanas",
    color: "#0176bc",
  },
  {
    name: "Storming",
    title: "Conflicto",
    description: "Emergen diferencias y tensiones. Los miembros desafían ideas y liderazgo.",
    psychology: "Lucha por estatus y poder según la teoría de dominancia social",
    leaderRole: "Facilitar diálogo constructivo, mediar conflictos y validar perspectivas diversas",
    duration: "3-6 semanas",
    color: "#049ce7",
  },
  {
    name: "Norming",
    title: "Normalización",
    description: "Se establecen normas compartidas y aumenta la cohesión grupal.",
    psychology: "Desarrollo de identidad colectiva y normas sociales implícitas",
    leaderRole: "Reforzar comportamientos positivos y celebrar colaboración efectiva",
    duration: "4-8 semanas",
    color: "#0076bd",
  },
  {
    name: "Performing",
    title: "Desempeño",
    description: "El grupo funciona de manera autónoma y altamente productiva.",
    psychology: "Estado de flujo colectivo y sincronización neuronal entre miembros",
    leaderRole: "Delegar responsabilidades, proporcionar recursos y mantener motivación",
    duration: "Indefinido",
    color: "#0176bc",
  },
  {
    name: "Adjourning",
    title: "Cierre",
    description: "El grupo completa su propósito y los miembros se preparan para la separación.",
    psychology: "Procesamiento emocional de pérdida y transición según Kübler-Ross",
    leaderRole: "Celebrar logros, facilitar cierre emocional y mantener conexiones",
    duration: "1-2 semanas",
    color: "#049ce7",
  },
]

export function GroupDynamics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section ref={ref} className="py-32 bg-black text-white relative overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #0176bc20 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #049ce720 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #0176bc20 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Modelo de <span className="text-[#049ce7]">Tuckman</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Las 5 etapas del desarrollo grupal: un framework científico para entender la evolución de comunidades
          </p>
        </motion.div>

        <div className="flex justify-center mb-16 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {stages.map((stage, index) => (
              <motion.button
                key={stage.name}
                onClick={() => setActiveStage(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeStage === index ? "text-black shadow-lg" : "bg-white/10 text-white hover:bg-white/20"
                }`}
                style={{
                  backgroundColor: activeStage === index ? stage.color : undefined,
                }}
              >
                {index + 1}. {stage.title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeStage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black"
                style={{ backgroundColor: stages[activeStage].color }}
              >
                {activeStage + 1}
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold mb-1">{stages[activeStage].title}</h3>
                <p className="text-gray-400 text-sm">Duración típica: {stages[activeStage].duration}</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{stages[activeStage].description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-[#049ce7]">🧠 Psicología Subyacente</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{stages[activeStage].psychology}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-[#0176bc]">👤 Rol del Líder</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{stages[activeStage].leaderRole}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-12">
          {stages.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 rounded-full cursor-pointer"
              style={{
                width: activeStage === index ? "40px" : "8px",
                backgroundColor: activeStage === index ? stages[index].color : "#ffffff30",
              }}
              onClick={() => setActiveStage(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
