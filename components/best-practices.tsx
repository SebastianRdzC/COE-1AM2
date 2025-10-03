import { CheckCircle2 } from "lucide-react"

const practices = [
  {
    category: "Onboarding",
    items: [
      "Crear guías de bienvenida claras y accesibles",
      "Asignar mentores o buddies a nuevos miembros",
      "Facilitar presentaciones y primeras interacciones",
    ],
  },
  {
    category: "Engagement",
    items: [
      "Publicar contenido regular y de alta calidad",
      "Reconocer y celebrar contribuciones destacadas",
      "Organizar eventos, AMAs y actividades interactivas",
    ],
  },
  {
    category: "Moderación",
    items: [
      "Establecer código de conducta transparente",
      "Responder rápidamente a reportes y conflictos",
      "Aplicar consecuencias consistentes y justas",
    ],
  },
  {
    category: "Crecimiento",
    items: [
      "Analizar métricas de participación regularmente",
      "Solicitar feedback y actuar sobre sugerencias",
      "Experimentar con nuevos formatos y canales",
    ],
  },
]

export function BestPractices() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">Mejores Prácticas</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Estrategias probadas para construir, mantener y hacer crecer comunidades saludables y comprometidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {practices.map((practice, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#0176bc] to-[#049ce7] rounded-full" />
                  <h3 className="text-2xl font-bold text-black">{practice.category}</h3>
                </div>

                <ul className="space-y-4">
                  {practice.items.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <CheckCircle2 className="w-6 h-6 text-[#049ce7] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#0176bc]/5 via-[#049ce7]/5 to-[#0076bd]/5 border-2 border-[#049ce7]/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-black">El Factor Humano</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Más allá de las herramientas y estrategias, el éxito en la gestión de comunidades radica en la{" "}
                <span className="font-bold text-[#0176bc]">autenticidad</span>, la{" "}
                <span className="font-bold text-[#049ce7]">consistencia</span> y el{" "}
                <span className="font-bold text-[#0076bd]">compromiso genuino</span> con el bienestar y crecimiento de
                cada miembro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
