"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { TrendingUp, Users, MessageCircle, Heart, Eye, Clock } from "lucide-react"

const metrics = [
  {
    icon: Users,
    label: "Miembros Activos",
    value: 0,
    target: 2847,
    suffix: "",
    color: "#0176bc",
    insight: "Usuarios que interactúan al menos 1 vez por semana",
  },
  {
    icon: MessageCircle,
    label: "Mensajes Diarios",
    value: 0,
    target: 1523,
    suffix: "",
    color: "#049ce7",
    insight: "Promedio de interacciones por día",
  },
  {
    icon: Heart,
    label: "Tasa de Retención",
    value: 0,
    target: 87,
    suffix: "%",
    color: "#0076bd",
    insight: "Miembros que regresan después de 30 días",
  },
  {
    icon: TrendingUp,
    label: "Crecimiento Mensual",
    value: 0,
    target: 23,
    suffix: "%",
    color: "#0176bc",
    insight: "Incremento de miembros mes a mes",
  },
  {
    icon: Eye,
    label: "Engagement Rate",
    value: 0,
    target: 64,
    suffix: "%",
    color: "#049ce7",
    insight: "Porcentaje de miembros que participan activamente",
  },
  {
    icon: Clock,
    label: "Tiempo Promedio",
    value: 0,
    target: 42,
    suffix: " min",
    color: "#0076bd",
    insight: "Duración promedio de sesión por usuario",
  },
]

const engagementFactors = [
  {
    factor: "Contenido de Calidad",
    impact: 95,
    description: "Información valiosa, relevante y bien presentada",
    color: "#0176bc",
  },
  {
    factor: "Respuesta Rápida",
    impact: 88,
    description: "Tiempo de respuesta menor a 2 horas aumenta satisfacción",
    color: "#049ce7",
  },
  {
    factor: "Reconocimiento Social",
    impact: 82,
    description: "Badges, menciones y celebración de contribuciones",
    color: "#0076bd",
  },
  {
    factor: "Eventos Regulares",
    impact: 76,
    description: "AMAs, webinars y encuentros virtuales programados",
    color: "#0176bc",
  },
  {
    factor: "Onboarding Efectivo",
    impact: 91,
    description: "Primera experiencia clara y acogedora en 24 horas",
    color: "#049ce7",
  },
]

export function EngagementMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedMetrics, setAnimatedMetrics] = useState(metrics)

  useEffect(() => {
    if (isInView) {
      metrics.forEach((metric, index) => {
        const duration = 2000
        const steps = 60
        const increment = metric.target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= metric.target) {
            current = metric.target
            clearInterval(timer)
          }

          setAnimatedMetrics((prev) => prev.map((m, i) => (i === index ? { ...m, value: Math.floor(current) } : m)))
        }, duration / steps)
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0176bc]/5 via-transparent to-[#049ce7]/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Métricas de <span className="text-[#049ce7]">Engagement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            KPIs esenciales para medir la salud y vitalidad de tu comunidad basados en data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {animatedMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <metric.icon className="w-7 h-7" style={{ color: metric.color }} />
                </motion.div>
              </div>

              <div className="mb-2">
                <motion.div className="text-4xl font-bold mb-1" style={{ color: metric.color }}>
                  {metric.value.toLocaleString()}
                  {metric.suffix}
                </motion.div>
                <div className="text-sm font-medium text-gray-600">{metric.label}</div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">{metric.insight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Factores Clave de Engagement</h3>
          <div className="space-y-6">
            {engagementFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-black mb-1">{factor.factor}</h4>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </div>
                  <div className="text-2xl font-bold ml-4" style={{ color: factor.color }}>
                    {factor.impact}%
                  </div>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${factor.impact}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: factor.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
