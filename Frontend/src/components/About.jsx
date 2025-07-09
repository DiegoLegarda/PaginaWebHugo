import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="p-8 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Sobre el Evento</h2>
      <p className="text-lg text-center max-w-3xl mx-auto">
        La Media Maratón de Popayán es un evento anual que reúne a corredores de todas las edades y categorías para recorrer las hermosas calles de nuestra ciudad.
      </p>
    </motion.section>
  )
}

export default About;
