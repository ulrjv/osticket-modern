import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Section } from '../../components/Section';
import { noticias } from './data';

export const NoticiasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Section id="noticias" background="white">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Noticias y Actualizaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre nuestras últimas actividades y logros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {noticias.map((noticia, index) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary-500 to-green-500" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={noticia.fecha}>
                      {formatDate(noticia.fecha)}
                    </time>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {noticia.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {noticia.titulo}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-1 mb-4">
                    {noticia.resumen}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};
