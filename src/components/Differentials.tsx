import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Award, ShieldCheck } from 'lucide-react';

const differentials = [
  {
    title: 'Atendimento Personalizado',
    description: 'Cada paciente é único. Nossos planos de tratamento são desenhados sob medida para suas necessidades específicas.',
    icon: Target,
  },
  {
    title: 'Técnicas Modernas',
    description: 'Utilizamos o que há de mais recente na ciência da fisioterapia para garantir resultados eficientes.',
    icon: Lightbulb,
  },
  {
    title: 'Foco na Recuperação Rápida',
    description: 'Nossa meta é devolver sua mobilidade e qualidade de vida no menor tempo possível, com segurança.',
    icon: TrendingUp,
  },
  {
    title: 'Experiência Profissional',
    description: 'Anos de atuação dedicada à fisioterapia ortopédica e suporte a atletas de alto rendimento.',
    icon: Award,
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-medical-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg md:text-4xl font-bold mb-6 leading-tight">
                Por que escolher <br />
                <span className="text-xl md:text-5xl font-bold italic text-secondary">Rodrigo Caetano?</span>
              </h2>
              <p className="text-xs md:text-base text-text-light mb-8 max-w-lg">
                Combinamos conhecimento técnico profundo com um olhar humanizado sobre a dor de cada paciente, garantindo um processo de cura completo.
              </p>
              
              <div className="grid gap-4">
                {differentials.map((diff, index) => (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-2xl transition-colors hover:bg-white/50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm shadow-primary/20">
                      <diff.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-lg font-bold text-primary mb-0.5">{diff.title}</h4>
                      <p className="text-text-light text-[11px] md:text-sm">{diff.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-3xl bg-secondary/20 p-4">
              <img
                src="https://lh3.googleusercontent.com/d/1RPluQWWvYn6yd7KFyf8fFw1q3KnfDAD-"
                alt=""
                className="w-full h-full object-cover rounded-[30px] md:rounded-[40px]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-[30px] -z-10 animate-pulse" />
            <div className="absolute -top-10 left-1/4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <ShieldCheck size={20} className="fill-green-600/20" />
              </div>
              <p className="text-sm font-bold text-primary">CREFITO 448155-F</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
