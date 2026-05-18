import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcos Oliveira',
    role: 'Atleta Amador',
    content: 'Depois de meses com dor no joelho, o tratamento com o Rodrigo foi o único que me permitiu voltar a correr sem medo. Profissional excelente!',
    rating: 5,
  },
  {
    name: 'Ana Paula Santos',
    role: 'Professora',
    content: 'As sessões de liberação miofascial salvaram minha coluna. O Rodrigo explica tudo com muita paciência e calma. Recomendo muito.',
    rating: 5,
  },
  {
    name: 'Ricardo Silva',
    role: 'Empresário',
    content: 'O atendimento em Ipatinga é nota 10. Pontualidade e eficiência no tratamento das minhas dores lombares.',
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-lg md:text-4xl font-bold mb-4">
              O que dizem nossos <span className="text-secondary">Pacientes</span>
            </h2>
            <p className="text-xs md:text-base text-text-light">
              Histórias reais de pessoas que recuperaram sua mobilidade e vida ativa conosco.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-secondary/20 shrink-0">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" className="md:w-5 md:h-5"/>)}
            </div>
            <span className="font-bold text-primary text-[10px] md:text-sm">4.9/5 Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col h-full bg-medical-bg relative"
            >
              <Quote className="absolute top-4 right-4 text-secondary/10 w-16 h-16 -z-0" />
              <div className="flex text-yellow-400 mb-4 z-10">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text-dark mb-6 text-lg italic leading-relaxed flex-grow z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-text-light">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
