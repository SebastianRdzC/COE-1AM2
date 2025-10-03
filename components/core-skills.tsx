import { Users, MessageSquare, Target, TrendingUp, Shield, Lightbulb } from "lucide-react"

const skills = [
  {
    icon: Users,
    title: "Construcción de Comunidad",
    description:
      "Crear espacios inclusivos donde los miembros se sientan valorados, escuchados y motivados a participar activamente.",
    color: "#0176bc",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Asertiva",
    description:
      "Facilitar diálogos constructivos, mediar conflictos y mantener un tono profesional que fomente la colaboración.",
    color: "#049ce7",
  },
  {
    icon: Target,
    title: "Definición de Objetivos",
    description:
      "Establecer metas claras y medibles que alineen los esfuerzos de la comunidad hacia resultados tangibles.",
    color: "#0076bd",
  },
  {
    icon: TrendingUp,
    title: "Análisis de Métricas",
    description:
      "Monitorear el engagement, participación y crecimiento mediante datos para optimizar estrategias continuamente.",
    color: "#0176bc",
  },
  {
    icon: Shield,
    title: "Moderación Efectiva",
    description:
      "Implementar políticas claras, gestionar comportamientos disruptivos y mantener un ambiente seguro y respetuoso.",
    color: "#049ce7",
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    description:
      "Experimentar con nuevos formatos, herramientas y dinámicas que mantengan la comunidad activa y relevante.",
    color: "#0076bd",
  },
]

export function CoreSkills() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">Habilidades Fundamentales</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un gestor de comunidades exitoso domina un conjunto diverso de competencias que van desde lo técnico hasta
            lo interpersonal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#049ce7]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-black">{skill.title}</h3>

              <p className="text-gray-600 leading-relaxed">{skill.description}</p>

              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
