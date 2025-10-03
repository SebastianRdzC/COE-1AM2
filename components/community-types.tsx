const communityTypes = [
  {
    title: "Foros de Discusión",
    description:
      "Espacios asíncronos donde los miembros comparten conocimientos, resuelven dudas y debaten temas relevantes.",
    examples: ["Reddit", "Stack Overflow", "Discord"],
  },
  {
    title: "Equipos de Aprendizaje",
    description:
      "Grupos enfocados en el desarrollo de habilidades mediante cursos, talleres y proyectos colaborativos.",
    examples: ["Cohorts", "Bootcamps", "Study Groups"],
  },
  {
    title: "Comunidades de Práctica",
    description: "Profesionales que comparten experiencias, mejores prácticas y recursos en un dominio específico.",
    examples: ["Slack Communities", "LinkedIn Groups", "Meetups"],
  },
  {
    title: "Redes de Soporte",
    description: "Espacios centrados en el apoyo mutuo, mentoría y construcción de relaciones significativas.",
    examples: ["Peer Support", "Mentorship Programs", "Alumni Networks"],
  },
]

export function CommunityTypes() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">Tipos de Comunidades</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cada comunidad tiene características únicas que requieren enfoques de gestión adaptados a sus objetivos y
            dinámicas particulares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {communityTypes.map((type, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-white border-2 border-gray-200 hover:border-[#049ce7] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-black group-hover:text-[#0176bc] transition-colors">
                  {type.title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0176bc] to-[#049ce7] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{type.description}</p>

              <div className="flex flex-wrap gap-2">
                {type.examples.map((example, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
