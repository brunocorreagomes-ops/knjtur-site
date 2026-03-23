import { motion } from 'framer-motion';
import { Verified, Info, MessageSquare, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="pt-12 pb-20 px-6 max-w-5xl mx-auto">
      <article>
        <section className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Especialista em Vistos</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-on-surface">
            Precisa falar inglês para tirar o <span className="gradient-text">visto americano?</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-10">
            A dúvida mais comum entre brasileiros que sonham em visitar os Estados Unidos. Desvendamos o mito da fluência obrigatória no consulado.
          </p>
          <div className="w-full aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              alt="Visa Interview Conversation" 
              className="object-cover w-full h-full" 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-premium p-8 md:p-10 rounded-2xl border border-white/5"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Verified size={24} />
                O veredito oficial
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  A resposta curta e direta é: <strong className="text-on-surface">Não</strong>. A entrevista pode ser feita inteiramente em português.
                </p>
                <p>
                  O consulado americano no Brasil conta com oficiais consulares que falam português fluentemente. O objetivo principal da entrevista não é avaliar sua capacidade linguística, mas sim <span className="italic text-on-surface">avaliar seu perfil, seus vínculos com o Brasil e a veracidade das suas intenções de viagem</span>.
                </p>
                <blockquote className="p-6 bg-white/5 rounded-xl border-l-4 border-primary italic text-on-surface">
                  "O consulado avalia seu perfil socioeconômico e não sua fluência no idioma."
                </blockquote>
              </div>
            </motion.div>

            <div className="bg-white/[0.01] p-8 md:p-10 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="text-red-500">⚠️</span>
                Erros que você deve evitar
              </h3>
              <ul className="space-y-4">
                {[
                  'Achar que a falta de inglês resultará em uma negativa automática.',
                  'Tentar forçar um inglês básico se você não se sente confortável. Isso gera insegurança.',
                  'Não se preparar para responder perguntas fundamentais sobre seu vínculo com o Brasil.'
                ].map((error, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-on-surface-variant">{error}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-on-surface">Conclusão</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                O mais importante em um processo de visto é a transparência e a consistência. Seja honesto sobre suas intenções e apresente um formulário DS-160 impecável. O idioma é apenas uma ferramenta, mas seu perfil é o que garante o carimbo no passaporte.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center gap-8 bg-white/[0.02] p-8 rounded-2xl">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/20 flex-shrink-0 shadow-xl">
                  <img 
                    alt="Kenji" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ugfNZaPjWpabSBhicxDq3ttGZJNw0b6KLAM8tVfTUMy-Jqjaw-bpyyWAPNFFiSAhCSJTwTJwz_S7EPFbPd47v8rJp1dxtewyCLQR_tcB79HGigjKG9MFf77EWU0e0eGMM921OSE3WxVz4L19rHcI34ELYDg_FvcG5VP4fuXhKzU9LVowPnT4JnpAL3U995dxff1xyK3vM9Rw33SLsD_t4FttqQmkRzEOvOvCNxRHluOKxwwQ0Dn1abDxKLlSCsTOWxSN1abmyIZIzU"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Especialista Responsável</span>
                  <h4 className="text-2xl font-bold text-on-surface mb-3">Kenji</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    Consultor sênior na KNJ TUR, especializado em vistos americanos e processos consulares complexos. Com anos de experiência, Kenji orienta brasileiros a navegarem com segurança e transparência pelo sistema de imigração dos EUA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="bg-linear-to-br from-surface to-background p-8 rounded-2xl border border-white/10 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-on-surface">Pronto para sua viagem?</h3>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                  Deixe que a KNJ TUR cuide de toda a burocracia para você. Aumente suas chances de aprovação com quem entende do assunto.
                </p>
                <a 
                  href="https://wa.me/5511994085822?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KNJTUR%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary text-black py-4 rounded-xl font-extrabold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all"
                >
                  Fale com a KNJ no WhatsApp
                </a>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                <h4 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                  <Info className="text-primary" size={18} />
                  Dica Rápida
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Se você for para os EUA para fazer um curso de inglês, aí sim o oficial poderá testar seus conhecimentos básicos durante a entrevista.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="mt-32">
        <h4 className="text-sm font-bold uppercase tracking-[0.4em] text-on-surface-variant/40 mb-12 text-center">Continue lendo</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Guia Completo: Documentos Essenciais para o Visto B1/B2', 
              desc: 'Não seja pego de surpresa na hora da entrevista. Preparamos o checklist definitivo.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdzuajMWOtQ6PjQdonybNXlyHCngIYSapQrTPr8ZQ4-m1dFCr9CBzlXUIKMyEnH1nHMw3qalnw3wz70o9vztEuEC6NeN43qzsj2yvAOBNbRI6REj5mNGFWiVfw7Ik-Cgm3OpoduNLGswlGLDhYzG-xEXSBhvNieYe_u7TgPxUkIoWc_GS6LToyO__-fGm8tcn5bNLODgpBm6jYJlZ-J-ZAGhoGFkatXwG5K-v5efQHTx3UaMADq6kyD9ZIkf_NZyLmwHJsUGuZlHhQ'
            },
            { 
              title: 'Destinos de Luxo nos EUA: Onde ir após a aprovação', 
              desc: 'Do Aspen ao luxo urbano de Nova York. Planeje sua recompensa após o visto aprovado.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi-EBVQutazIDQyNLEV2eOcJ5UTUv4_pT88KSOL-I6YiF3q-6WC2HnZtLnBhWXNPfEBMqa7YRwdIRecxjkG0vrYdMBm-fwfjM60hXK9Tx4P-4CtEPJahG0C1iKZ0SvLy1_dlgHqPz_pJdftlzUrrD74F_aEJxXMVyPE_u8N8WpqNqdCibsFwns7umeEanGrxGrCMYz-cqZBC6gh84Y4cMGsJjFodmiEmFjpBT9cGeg7_LBiMaO2IrKF9qYFK-XNKvZxmivIC0QXcUG'
            }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden relative">
                <img 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src={post.img}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h5 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{post.title}</h5>
              <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">{post.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
