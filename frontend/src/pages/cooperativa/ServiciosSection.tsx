import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Sun,
  Sprout,
  Home,
  BookOpen,
  Recycle,
  Car,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '../../components/Section';
import { servicios } from './data';

const iconMap: Record<string, LucideIcon> = {
  sun: Sun,
  sprout: Sprout,
  home: Home,
  'book-open': BookOpen,
  recycle: Recycle,
  car: Car,
};

export const ServiciosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="servicios" background="gray">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de soluciones sostenibles para mejorar tu
            calidad de vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicios.map((servicio, index) => {
            const Icon = iconMap[servicio.icono];
            return (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {servicio.descripcion}
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
