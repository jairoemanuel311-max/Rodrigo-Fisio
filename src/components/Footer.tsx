import { MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        <div className="space-y-6">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1NqAtrgpTJ6leOM-e4pF7jAwMCyHu9p6R" 
              alt=""
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight group-hover:text-secondary transition-colors">Rodrigo Caetano</span>
              <span className="text-[10px] font-medium text-secondary uppercase tracking-widest">Fisioterapia</span>
            </div>
          </a>
          <p className="text-white/60 leading-relaxed max-w-xs text-xs">
            Especialista em Fisioterapia Ortopédica e Esportiva, dedicado a devolver a qualidade de vida aos pacientes com excelência.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary">Atendimento</h4>
          <ul className="space-y-4 text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0" />
              <div>
                <p className="font-bold text-white">Ipatinga - MG</p>
                <p className="text-sm">Rua de Referência, 123 - Centro</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0" />
              <div>
                <p className="font-bold text-white">Dionísio - MG</p>
                <p className="text-sm">Av. Principal, 456 - Vila Alegre</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary">Links Úteis</h4>
          <ul className="space-y-3 text-white/70">
            <li><a href="#home" className="hover:text-secondary transition-colors">Página Inicial</a></li>
            <li><a href="#especialidades" className="hover:text-secondary transition-colors">Especialidades</a></li>
            <li><a href="#diferenciais" className="hover:text-secondary transition-colors">Diferenciais</a></li>
            <li><a href="#depoimentos" className="hover:text-secondary transition-colors">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary">Contato Direto</h4>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
            <Phone size={32} className="mx-auto text-secondary mb-4" />
            <p className="text-sm text-white/60 mb-2">WhatsApp Profissional</p>
            <p className="text-xl font-bold text-white">(31) 99149-8623</p>
            <a
              href="https://wa.me/5531991498623?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-primary w-full py-2 text-sm"
            >
              Falar Agora
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2024 Rodrigo Caetano Fisioterapia. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <p>CREFITO: 448155-F</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <span className="text-secondary font-bold">AI Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
