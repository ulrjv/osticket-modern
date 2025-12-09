import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section } from '../../components/Section';
import { testimonios } from './data';

export const TestimoniosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonios.length) % testimonios.length
    );
  };

  const currentTestimonio = testimonios[currentIndex];

  return (
    <Section id="testimonios" background="white">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Socios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Historias reales de personas que están haciendo la diferencia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-xl relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-200" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonio.contenido}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonio.nombre.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {currentTestimonio.nombre}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {currentTestimonio.rol}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonio}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>

            <div className="flex gap-2">
              {testimonios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonio}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
