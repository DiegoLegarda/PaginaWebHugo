import { motion } from 'framer-motion';
import { FaBullhorn, FaHandshake, FaBoxOpen } from 'react-icons/fa';

function NewsSection() {
  const news = [
    { title: 'Apertura de Inscripciones', content: 'Las inscripciones están abiertas hasta el 15 de octubre.', icon: <FaBullhorn /> },
    { title: 'Nuevos Patrocinadores', content: 'Bienvenidos a nuestros nuevos aliados en esta gran carrera.', icon: <FaHandshake /> },
    { title: 'Entrega de Kits', content: 'Los kits se entregarán los días 29 y 30 de octubre en el parque Caldas.', icon: <FaBoxOpen /> }
  ];

  return (
    <section id="news" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Novedades</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-4 rounded shadow cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl text-yellow-500 mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
            <p className="text-center">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default NewsSection;
