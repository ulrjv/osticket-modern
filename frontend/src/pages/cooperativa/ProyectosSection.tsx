import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '../../components/Section';
import { proyectos } from './data';

export const ProyectosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tagColors: Record<string, string> = {
    sostenibilidad: 'bg-green-100 text-green-700',
    energía: 'bg-yellow-100 text-yellow-700',
    comunidad: 'bg-blue-100 text-blue-700',
    agricultura: 'bg-emerald-100 text-emerald-700',
    innovación: 'bg-purple-100 text-purple-700',
    'economía circular': 'bg-teal-100 text-teal-700',
    construcción: 'bg-orange-100 text-orange-700',
    educación: 'bg-pink-100 text-pink-700',
    movilidad: 'bg-indigo-100 text-indigo-700',
  };

  return (
    <Section id="proyectos" background="white">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Iniciativas que están transformando nuestra comunidad y el planeta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary-500 to-green-500" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tagColors[tag] || 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {proyecto.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
