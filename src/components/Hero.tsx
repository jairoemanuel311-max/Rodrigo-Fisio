import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-medical-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-[60vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-[11px] md:text-xs tracking-wide"
          >
            Fisioterapia Ortopédica e Esportiva
          </motion.div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-primary">
            Recupere sua <span className="text-secondary">Qualidade de Vida</span> sem Dor
          </h1>
          
          <p className="text-[14px] md:text-lg lg:text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Fisioterapia especializada para dores musculares, lesões e coluna com atendimento personalizado e técnicas modernas para sua recuperação rápida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="btn-primary w-full sm:w-auto px-8 py-4 gap-2 text-sm md:text-base shadow-xl shadow-primary/20"
            >
              <Calendar size={18} />
              Agendar Atendimento
            </button>
            <a
              href="https://wa.me/5531991498623?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto px-8 py-4 gap-2 text-sm md:text-base"
            >
              <Phone size={20} />
              Falar no WhatsApp
            </a>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4 text-[10px] md:text-xs text-text-light">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
              ].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm">
              <span className="font-bold text-primary">+500 pacientes</span> satisfeitos em busca de bem-estar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
