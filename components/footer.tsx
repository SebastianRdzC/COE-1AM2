"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="py-16 bg-black text-white relative overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #0176bc20 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #049ce720 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #0176bc20 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#0176bc] via-[#049ce7] to-[#0076bd] bg-clip-text text-transparent">
              Gestión de Comunidades
            </h3>
            <p className="text-gray-400 text-sm">Liderazgo basado en ciencia, impulsado por empatía</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4 text-[#049ce7]">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                {["Guías de Inicio", "Casos de Estudio", "Herramientas", "Investigación"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-4 text-[#049ce7]">Comunidad</h4>
              <ul className="space-y-2 text-gray-400">
                {["Foro de Discusión", "Eventos", "Newsletter", "Mentoría"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-4 text-[#049ce7]">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                {["Soporte", "Colaboraciones", "Feedback", "Consultoría"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0176bc] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-500 text-sm">
              © 2025 Gestión de Comunidades. Construyendo espacios de aprendizaje colaborativo.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Basado en investigación científica de psicología social, neurociencia y comportamiento organizacional
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
