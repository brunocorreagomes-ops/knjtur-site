import { motion } from 'framer-motion';
import { FileText, CreditCard, Calendar, ShieldCheck, AlertTriangle, HelpCircle, Plus, TrendingUp, Search, FileWarning, ArrowRight } from 'lucide-react';

export default function Guide() {
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
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Edição Exclusiva 2026</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-10">
            Guia do <br /> <span className="gradient-text">Visto Americano</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant/80 font-light max-w-2xl leading-relaxed mb-12">
            O caminho para a aprovação exige estratégia e precisão. Descubra como a KNJ TUR transforma burocracia em uma jornada de sucesso rumo aos Estados Unidos.
          </p>
          
          <a 
            href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vistos%20e%20assessoria%20consular." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-8 py-4 rounded-xl text-black font-black text-lg shadow-xl shadow-primary/20 inline-block"
          >
            Falar com Especialista
          </a>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/5 bg-surface group">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-ABKHjTIYE8drvqydDEfR85cfYDU0Xhbg5HCt6_Py_6-grlJR_0Svj0K_gwN-VN5cDgq8WHDabOxV1I079-cIugJ8wUirVE0GLPCuM-oTPeuRkL1vAWDV4wbvDHsQvI1SfGSigPaND6Gv6j0nm44ugXG4e5QsBDRYpA5Xa9ezbXZ_RdDt3I9sPBGlfduH1-mTdmx79SN_wNp2JNt29NSHTw74sndR0aL81SSUpjR4us4wRZr3YdqumnT80wbHVSpWBK4M893T_z2"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Step-by-Step */}
      <section className="mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">O Fluxo da Conquista</h2>
            <p className="text-on-surface-variant font-medium">As 04 etapas fundamentais para o seu sucesso consular.</p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden md:block mb-4"></div>
          <span className="text-primary/60 font-mono text-sm tracking-widest uppercase">Processo KNJ</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: FileText, title: 'Formulário', desc: 'Preenchimento minucioso do DS-160. Cada resposta é estratégica para o seu perfil.', step: '01' },
            { icon: CreditCard, title: 'Pagamento', desc: 'Gestão da taxa MRV e validação do processo junto ao sistema consular oficial.', step: '02' },
            { icon: Calendar, title: 'Agendamento', desc: 'Logística inteligente para CASV e entrevista consular em datas ideais.', step: '03' },
            { icon: ShieldCheck, title: 'Entrevista', desc: 'Preparação técnica e comportamental personalizada para o momento decisivo.', step: '04' }
          ].map((item, i) => (
            <div key={i} className="group bg-surface hover:bg-white/[0.03] p-10 rounded-3xl border border-white/5 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">{item.step}</div>
              <div className="relative z-10">
                <item.icon className="text-primary mb-8" size={32} />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">{item.title}</h3>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warning Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-[100px]"></div>
          <div className="bg-surface p-10 md:p-14 rounded-[2rem] relative z-10 border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-10">
              <AlertTriangle className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Pontos Críticos</h3>
            </div>
            <ul className="space-y-10">
              {[
                { icon: TrendingUp, title: 'Inconsistência de Dados', desc: 'Divergências entre o DS-160 e o discurso oral são fatais para a aprovação.' },
                { icon: Search, title: 'Falta de Vínculos', desc: 'Incapacidade de demonstrar laços fortes com o Brasil que garantam o seu retorno.' },
                { icon: FileWarning, title: 'Erros Formais', desc: 'Pequenos erros de digitação podem ser interpretados como má-fé pelo oficial.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-500/90 uppercase tracking-tighter mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Alerta de Risco</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">Por que a maioria <br /> é <span className="text-red-500">negada?</span></h2>
          <p className="text-on-surface-variant/80 text-lg leading-relaxed mb-10">
            O consulado não busca motivos para aprovar, mas sim para negar. Nossa assessoria atua na blindagem do seu perfil, eliminando ruídos e fortalecendo seus pontos favoráveis.
          </p>
          <a 
            href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20vistos%20e%20assessoria%20consular." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase group cursor-pointer"
          >
            Avaliar meu perfil agora 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-40">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Dúvidas Frequentes</h2>
          <p className="text-on-surface-variant/70">Esclareça os mitos e verdades mais comuns sobre o processo de visto.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { q: 'Precisa falar inglês para tirar o visto de turista?', a: 'Não. A entrevista nos consulados americanos no Brasil é conduzida integralmente em português por oficiais altamente capacitados.' },
            { q: 'Posso ter o visto negado mesmo com boa renda e emprego?', a: 'Infelizmente, sim. Situação financeira é apenas um pilar. O oficial avalia o conjunto da obra: intenção de viagem, vínculos e a coerência das informações prestadas.' }
          ].map((item, i) => (
            <div key={i} className="group bg-surface rounded-2xl overflow-hidden border border-white/5 transition-all">
              <details className="p-8">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-white pr-4">{item.q}</h4>
                  <Plus className="text-primary group-open:rotate-45 transition-transform" size={24} />
                </summary>
                <div className="mt-8 text-on-surface-variant leading-relaxed border-t border-white/5 pt-8">
                  <p><strong className="text-primary">Resposta:</strong> {item.a}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
