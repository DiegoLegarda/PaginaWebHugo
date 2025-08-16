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
       Running Popayán es un evento que promueve la sana competencia y el amor por el deporte en la hermosa ciudad de Popayán. Con distancias de 6K, y 12K, este evento está diseñado para corredores de todos los niveles. Únete a nosotros en noviembre de 2025 para una experiencia inolvidable llena de energía, camaradería y pasión por el running.
      </p>
          <section id="galeria" className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>
        <div className="relative w-full overflow-hidden pb-[56.25%]"> {/* 16:9 */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IluynVHavhU"
            title="Video de la carrera"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </motion.section>
    
  )
}

export default About;
