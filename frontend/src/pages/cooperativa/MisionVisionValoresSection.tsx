import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { Section } from '../../components/Section';
import { misionVisionValores } from './data';

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  eye: Eye,
  heart: Heart,
};

export const MisionVisionValoresSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="mision" background="white">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra Esencia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los pilares que guían nuestro trabajo y compromiso con la comunidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {misionVisionValores.map((item, index) => {
            const Icon = iconMap[item.icono];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.tipo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.contenido}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
