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
      <h2 className="text-3xl font-semibold mb-6 text-center font-poppins capitalize">
  Sobre el evento
</h2>

<p className="text-lg text-center max-w-3xl mx-auto font-poppins leading-relaxed">
  Running Popayán celebra el deporte, la naturaleza y la belleza colonial de Popayán con recorridos de 6K y 12K para todos los niveles. Vive una experiencia única, llena de energía, pasión y amor por correr en el corazón del Cauca.
</p>
<p className="text-lg text-center max-w-3xl mx-auto font-poppins leading-relaxed">  
Únete este 16 de noviembre de 2025 corre con el alma y siente el corazón de Popayán en cada paso.
</p>
      <section id="galeria" className="py-12 bg-gray-50 flex justify-center">
        <div className="relative w-full max-w-md overflow-hidden pb-[177.78%]"> {/* 9:16 proporción vertical */}
          <iframe
            className="absolute top-0 left-0 w-full h-full object-contain"
            src="https://www.youtube.com/embed/IluynVHavhU?modestbranding=1&rel=0&controls=1"
            title="Video de la carrera"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </motion.section>
    
  )
}

export default About;
