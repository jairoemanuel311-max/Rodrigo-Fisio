import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'A duração varia de acordo com a patologia e a resposta individual do paciente. Uma avaliação inicial é fundamental para traçar um prognóstico realista.',
  },
  {
    question: 'Precisa de encaminhamento médico?',
    answer: 'Não necessariamente. O fisioterapeuta é um profissional de primeiro contato e pode realizar sua própria avaliação e diagnóstico funcional.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'Isso depende totalmente do quadro clínico. Alguns casos sentem alívio imediato, outros demandam um acompanhamento longitudinal.',
  },
  {
    question: 'Como funciona o atendimento?',
    answer: 'O atendimento é individualizado e focado na queixa principal do paciente, utilizando técnicas manuais, exercícios terapêuticos e educação em saúde.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-medical-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-4">
            <HelpCircle size={18} />
            Dúvidas Frequentes
          </div>
          <h2 className="text-xl md:text-4xl font-bold">Perguntas <span className="text-secondary">Comuns</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between transition-colors hover:bg-gray-50"
              >
                <span className="text-sm md:text-base font-bold text-primary pr-8">{faq.question}</span>
                <ChevronDown
                  className={`text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-light leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
