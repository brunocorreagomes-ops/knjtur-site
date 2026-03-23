import { motion } from 'framer-motion';
import { Plane, Hotel, Car, Shield, MapPin, Compass, ArrowRight, MessageSquare, Globe, Navigation } from 'lucide-react';

export default function Travel() {
  return (
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Experiências Completas</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-10">
            Muito além do <br /> <span className="gradient-text">Visto Americano</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant/80 font-light max-w-2xl leading-relaxed mb-12">
            A KNJ TUR é sua agência de viagens completa. Do planejamento do roteiro à reserva do hotel, cuidamos de cada detalhe para que sua única preocupação seja aproveitar.
          </p>
          
          <a 
            href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20viagem%20pela%20KNJTUR." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-8 py-4 rounded-xl text-black font-black text-lg shadow-xl shadow-primary/20 inline-block"
          >
            Solicitar Cotação
          </a>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/5 bg-surface group">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=2070&auto=format&fit=crop"
              referrerPolicy="no-referrer"
              alt="Luxury Travel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Serviços de Agência</h2>
            <p className="text-on-surface-variant font-medium">Soluções integradas para sua viagem de negócios ou lazer.</p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden md:block mb-4"></div>
          <span className="text-primary/60 font-mono text-sm tracking-widest uppercase">Full Service</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: Plane, 
              title: 'Passagens Aéreas', 
              desc: 'Cotações em todas as companhias aéreas com tarifas exclusivas e suporte em caso de alterações.',
              color: 'text-blue-400'
            },
            { 
              icon: Hotel, 
              title: 'Hospedagem', 
              desc: 'Curadoria de hotéis e resorts ao redor do mundo, garantindo o melhor custo-benefício e conforto.',
              color: 'text-emerald-400'
            },
            { 
              icon: Navigation, 
              title: 'Traslados', 
              desc: 'Recepção personalizada em aeroportos e transporte privativo para sua total segurança e comodidade.',
              color: 'text-amber-400'
            },
            { 
              icon: Shield, 
              title: 'Seguro Viagem', 
              desc: 'Proteção completa para imprevistos médicos ou logísticos, essencial para qualquer destino internacional.',
              color: 'text-red-400'
            },
            { 
              icon: Car, 
              title: 'Aluguel de Carros', 
              desc: 'Reserva de veículos de todas as categorias com as principais locadoras globais.',
              color: 'text-indigo-400'
            },
            { 
              icon: Compass, 
              title: 'Roteiros Sob Medida', 
              desc: 'Planejamento detalhado dia a dia, otimizando seu tempo e explorando o melhor de cada destino.',
              color: 'text-primary'
            }
          ].map((item, i) => (
            <div key={i} className="group bg-surface hover:bg-white/[0.03] p-10 rounded-3xl border border-white/5 transition-all duration-500">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">{item.title}</h3>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-32 px-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden mb-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">A vantagem de uma <br /> consultoria <span className="text-primary">360º</span></h2>
            <p className="text-on-surface-variant/80 text-lg leading-relaxed mb-10">
              Ao centralizar seu visto e sua viagem com a KNJ TUR, você garante que toda a documentação, reservas e cronogramas estejam perfeitamente alinhados. Evite inconsistências que podem prejudicar sua entrada em outros países.
            </p>
            
            <div className="space-y-6">
              {[
                'Suporte 24h durante sua viagem',
                'Tarifas de agência (muitas vezes menores que sites de reserva)',
                'Conhecimento técnico sobre exigências sanitárias e de entrada',
                'Check-in antecipado e gestão de assentos'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-on-surface font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1506012733851-bb0785baabc0?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel 1" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel 2" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel 3" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Sua próxima aventura começa aqui</h2>
        <p className="text-on-surface-variant mb-12">Não importa o destino, a KNJ TUR leva você com segurança e estilo.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20viagem%20pela%20KNJTUR." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-10 py-5 rounded-2xl text-black font-black text-lg flex items-center justify-center gap-3"
          >
            Falar com um Agente
            <MessageSquare size={22} />
          </a>
          <a 
            href="/guia" 
            className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            Ver Processo de Visto
            <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}
