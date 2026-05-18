import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Differentials from './components/Differentials';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import WhatsAppButton from './components/WhatsAppButton';
import { ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Specialties />
        <Differentials />
        <SocialProof />

        {/* Strong CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary z-0" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-20 -skew-x-12 translate-x-1/2 z-0" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-5xl font-bold mb-6">Pare de conviver com dor</h2>
              <p className="text-xs md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Agende sua avaliação agora e comece sua recuperação com um atendimento especializado e focado em resultados reais.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary bg-white text-primary hover:bg-secondary hover:text-white px-7 py-3.5 text-sm md:text-lg shadow-2xl"
                >
                  Agendar Atendimento
                </button>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <p className="text-[10px] md:text-sm font-bold text-left">
                    <span className="block text-white/60">Garantia de Professionalismo</span>
                    CREFITO 448155-F
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      
      <WhatsAppButton />
      
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
