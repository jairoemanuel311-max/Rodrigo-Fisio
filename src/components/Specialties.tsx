import { motion } from 'motion/react';
import { Activity, Dumbbell, ShieldCheck, Zap, UserCheck, HeartPulse } from 'lucide-react';

const specialties = [
  {
    title: 'Dores musculares',
    description: 'Tratamento eficaz para tensões, contraturas e fadiga muscular.',
    icon: Activity,
  },
  {
    title: 'Lesões Esportivas',
    description: 'Reabilitação focada no retorno rápido às atividades físicas.',
    icon: Dumbbell,
  },
  {
    title: 'Problemas de Coluna',
    description: 'Alívio de dores lombares, cervicais e hérnias de disco.',
    icon: ShieldCheck,
  },
  {
    title: 'Recuperação para Atletas',
    description: 'Protocolos específicos para melhorar a performance e prevenir lesões.',
    icon: Zap,
  },
  {
    title: 'Liberação Miofascial',
    description: 'Técnicas manuais para relaxar tecidos e melhorar a mobilidade.',
    icon: UserCheck,
  },
  {
    title: 'Dry Needling',
    description: 'Agulhamento a seco para desativação de pontos gatilho.',
    icon: HeartPulse,
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-4xl font-bold mb-4"
          >
            Especialidades de <span className="text-secondary">Tratamento</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-light max-w-2xl mx-auto text-xs md:text-base"
          >
            Oferecemos uma gama completa de serviços de fisioterapia utilizando as técnicas mais modernas do mercado.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card bg-medical-bg/30 hover:bg-white hover:shadow-xl transition-all border-none group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <item.icon size={28} />
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] md:text-sm text-text-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
