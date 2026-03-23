import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Verified, PersonStanding, FileText, Mic, ClipboardCheck, CheckCircle2, Brain, BarChart3, MessageSquare, Plane, Hotel, Globe, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Empresário",
    content: "A KNJ TUR foi fundamental para a aprovação do meu visto. Profissionalismo impecável e suporte em cada detalhe do processo.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Ana Paula",
    role: "Médica",
    content: "Excelente atendimento! Cuidaram de tudo, desde o visto até as passagens e hospedagem. Recomendo muito para quem busca tranquilidade.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Marcos Oliveira",
    role: "Engenheiro",
    content: "Segurança e agilidade. O suporte 24h durante a viagem fez toda a diferença quando precisei de uma alteração de última hora.",
    image: "https://picsum.photos/seed/person3/100/100"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary-variant/10 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">Consultoria Indaiatuba</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Visto Americano <br />
              <span className="gradient-text">Aprovado</span> com <br />
              Segurança.
            </h1>
            
            <p className="text-xl text-on-surface-variant font-light max-w-lg leading-relaxed">
              Consultoria de alto padrão em Indaiatuba focada em estratégias personalizadas para maximizar sua chance de sucesso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="btn-premium px-10 py-5 text-black rounded-full font-extrabold text-lg flex items-center justify-center gap-3 shadow-2xl"
              >
                Falar no WhatsApp
                <ArrowRight size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] border border-white/10 group">
              <img 
                alt="Passport and Travel" 
                className="w-full h-[600px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqnOJ0P0xjDs-LswEvCX_9NGpLczFO12I_G91T67Ri3gUfeCLzJii63FC6CpM0o9HYv6PMp2C1sJiVhiXu0niZgnI22U9vgzMMmnqq-wy7PA3RiITeKHMpWE1Tt7xUKt8k7bQ16Gsd3leTrUc2ausdtKKuq2wiwLZtILVMFeHtN_KMGUH9eIdDYEVk_PIelW8SzqgWpS953Qg8Hiwu_2lIy2Wn60j5dUPb8EZW4QopvBJ6jMmsCSQyy3DEUPqtleVfFUGQqtCazQO"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-8 card-premium rounded-2xl border border-white/10 shadow-3xl backdrop-blur-xl z-20">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary">98%</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant mt-1">Taxa de Sucesso</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">+ 1.000 Atendidos</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Referência sólida para viajantes que buscam excelência e confiança.</p>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Verified className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Alta Aprovação</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Análise de perfil cirúrgica para reduzir riscos e antecipar soluções.</p>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <PersonStanding className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Personalização</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Cada aplicação é tratada como um projeto único e exclusivo.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">O perigo dos detalhes.</h2>
            <p className="text-lg text-on-surface-variant font-light">Erros pequenos que impedem grandes sonhos. Saiba onde a maioria falha:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Erros no DS-160', desc: 'A base do seu processo. Dados inconsistentes são o motivo número 1 de negativas imediatas.' },
              { icon: Mic, title: 'Despreparo na Entrevista', desc: 'Nervosismo e respostas sem foco geram desconfiança. O preparo psicológico é vital.' },
              { icon: ClipboardCheck, title: 'Inconsistência de Dados', desc: 'Conflitos entre documentos e fala destroem sua credibilidade perante o oficial consular.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl card-premium border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                alt="Premium Documents" 
                className="w-full h-[500px] object-cover brightness-75 hover:brightness-100 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BQhO0ilk_VYshrLA8ZTAozGRH0U63cOGG_E-PD8Lp84FsixC3Ipte6kZ9YAEOLrzu8ZHSH_-9WWwb3GYs4c4zVtNqx5ja3DwJVX8NJJ9Hrm9aZJtUb3bBK92nxWP1nfu1j_B7-YwPLvfKXQiN8ttr0ps-CWJwYVlQzrZlCRwqfNUCiJpTerLpdXrH8nCvZ0pgS763GXgNErwSmrPyd8QVwH28e4kDXWTAHQLSsc9n0nsoze2NVzOroXElhzvw8kJXatQlamoSP4b"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-10"
          >
            <h2 className="text-4xl font-extrabold leading-tight">Suporte total e <br /><span className="text-primary">estratégico</span> KNJ:</h2>
            <ul className="space-y-8">
              {[
                { icon: CheckCircle2, title: 'DS-160 Impecável', desc: 'Preenchimento técnico visando destacar seus pontos fortes.' },
                { icon: Brain, title: 'Simulação de Entrevista', desc: 'Treinamento intensivo para respostas claras e confiantes.' },
                { icon: BarChart3, title: 'Análise de Perfil 360º', desc: 'Estudo detalhado de vínculos e justificativas para o visto.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-on-surface-variant font-light text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Expert Section (Kenji) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-square">
              <img 
                alt="Kenji - Especialista" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugfNZaPjWpabSBhicxDq3ttGZJNw0b6KLAM8tVfTUMy-Jqjaw-bpyyWAPNFFiSAhCSJTwTJwz_S7EPFbPd47v8rJp1dxtewyCLQR_tcB79HGigjKG9MFf77EWU0e0eGMM921OSE3WxVz4L19rHcI34ELYDg_FvcG5VP4fuXhKzU9LVowPnT4JnpAL3U995dxff1xyK3vM9Rw33SLsD_t4FttqQmkRzEOvOvCNxRHluOKxwwQ0Dn1abDxKLlSCsTOWxSN1abmyIZIzU"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2">Fundador & Consultor Master</p>
                <h3 className="text-4xl font-black text-white">Kenji</h3>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
          
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Verified className="text-primary" size={16} />
              <span className="text-[10px] font-black tracking-widest uppercase text-primary">Especialista Autoridade</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              A expertise que faz a <br />
              <span className="gradient-text">diferença</span> na aprovação.
            </h2>
            
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
              <p>
                Com anos de atuação dedicados exclusivamente à consultoria de vistos, Kenji consolidou a KNJ TUR como sinônimo de rigor técnico e transparência.
              </p>
              <p>
                Nossa metodologia transcende o simples preenchimento de formulários; construímos uma narrativa estratégica que ressoa positivamente com as expectativas consulares.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-2xl card-premium border-white/5">
                <span className="text-4xl font-black text-primary">+10</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mt-2">Anos de Mercado</p>
              </div>
              <div className="p-6 rounded-2xl card-premium border-white/5">
                <span className="text-4xl font-black text-primary">1k+</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mt-2">Sonhos Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Agency Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Experiência Completa</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Sua Viagem <br /> <span className="gradient-text">Sem Fronteiras</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-light">
              Além da consultoria de vistos, a KNJ TUR é uma agência de viagens regular. Cuidamos de toda a logística para que sua experiência seja perfeita do início ao fim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Plane, title: 'Passagens Aéreas', desc: 'Cotações dinâmicas com as melhores tarifas do mercado.' },
              { icon: Hotel, title: 'Hospedagem', desc: 'Reserva em hotéis e resorts selecionados no mundo todo.' },
              { icon: Globe, title: 'Pacotes Completos', desc: 'Traslados, seguro viagem e roteiros personalizados.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-surface border border-white/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/viagens" 
              className="inline-flex items-center gap-3 text-primary font-bold tracking-widest text-xs uppercase group"
            >
              Ver todos os serviços de viagem
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">O que nossos <br /> <span className="gradient-text">clientes dizem</span></h2>
          </div>

          <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/[0.03] border border-white/5 p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
              >
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 p-1">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Quote className="text-primary/20 mb-4 mx-auto md:mx-0" size={40} />
                  <p className="text-lg md:text-xl text-on-surface-variant italic mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-primary text-xs uppercase tracking-widest font-bold">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentTestimonial === i ? 'bg-primary w-8' : 'bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-30"></div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.03] border border-white/10 p-12 md:p-24 rounded-[48px] text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pronto para carimbar <br />seu passaporte?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-light">Agende agora uma análise preliminar com nossos especialistas e comece sua jornada.</p>
            <a 
              href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-4 px-14 py-6 text-black rounded-full font-black text-xl shadow-3xl"
            >
              Falar no WhatsApp
              <MessageSquare size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
