function RouteMap() {
  return (
    <section id="route" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Mapa del Recorrido</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.832654!2d-76.610167!3d2.444814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30fcf58cfe5b71%3A0x51f3c41bdb612!2sPopay%C3%A1n!5e0!3m2!1ses-419!2sco!4v1689370000000!5m2!1ses-419!2sco"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa del Recorrido"
        ></iframe>
      </div>
    </section>
  )
}

export default RouteMap