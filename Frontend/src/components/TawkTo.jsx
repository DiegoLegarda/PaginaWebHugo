import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Inicializar las variables globales de Tawk
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Crear el script dinámicamente
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6854a84901bbfa190a533305/1iu5b2oap'; // Tu ID específico
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Insertarlo en el DOM
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
    
    // Cleanup function para evitar duplicados
    return () => {
      // Remover el script si el componente se desmonta
      const tawkScript = document.querySelector('script[src*="embed.tawk.to/6854a84901bbfa190a533305"]');
      if (tawkScript) {
        tawkScript.remove();
      }
      
      // Limpiar variables globales
      if (window.Tawk_API) {
        delete window.Tawk_API;
        delete window.Tawk_LoadStart;
      }
    };
  }, []); // Array vacío para que solo se ejecute una vez

  return null; // Este componente no renderiza nada visible
};

export default TawkTo;