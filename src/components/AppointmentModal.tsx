import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Activity, Clock, MapPin } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    problem: '',
    time: '',
    city: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.name}. Estou com ${formData.problem} há ${formData.time}. Moro em ${formData.city} e gostaria de agendar uma avaliação.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531991498623?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-primary p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2">Agendar Avaliação</h2>
              <p className="text-white/80">Preencha os dados abaixo para darmos início ao seu atendimento pelo WhatsApp.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                  <input
                    required
                    type="text"
                    placeholder="Seu Nome Completo"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-medical-bg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-text-dark"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                  <input
                    required
                    type="text"
                    placeholder="Tipo de dor ou problema"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-medical-bg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-text-dark"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                  <input
                    required
                    type="text"
                    placeholder="Há quanto tempo sente a dor? (Ex: 1 semana)"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-medical-bg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-text-dark"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
                  <select
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-medical-bg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-text-dark appearance-none"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  >
                    <option value="" disabled>Selecione sua cidade</option>
                    <option value="Ipatinga">Ipatinga</option>
                    <option value="Dionísio">Dionísio</option>
                    <option value="Outra">Outra</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg gap-3 shadow-xl shadow-primary/20"
              >
                Enviar para WhatsApp
                <Send size={20} />
              </button>
              
              <p className="text-center text-xs text-text-light">
                Seus dados serão enviados de forma segura para o WhatsApp profissional do Dr. Rodrigo Caetano.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
