export function LeadershipPillars() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0176bc] to-[#0076bd] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#049ce7] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-balance">
            Los Tres Pilares del Liderazgo Comunitario
          </h2>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Empatía y Escucha Activa</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Comprender las necesidades, motivaciones y desafíos de cada miembro. Un líder efectivo no solo habla,
                  sino que escucha profundamente y responde con sensibilidad a las dinámicas del grupo.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Visión Estratégica</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Definir una dirección clara y comunicar el propósito de la comunidad. Establecer hitos alcanzables que
                  mantengan al equipo motivado y alineado con objetivos compartidos a largo plazo.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Adaptabilidad y Resiliencia</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Navegar cambios, crisis y desafíos inesperados con flexibilidad. Aprender de los errores, iterar sobre
                  estrategias y mantener la calma bajo presión para guiar a la comunidad hacia adelante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
