import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Salad, 
  Activity, 
  HeartHandshake, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Check, 
  AlertTriangle,
  Award
} from 'lucide-react';
import { TabType } from '../types';

interface HomeSectionProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNewsletterError('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  const categories = [
    {
      id: 'casa-segura' as TabType,
      title: 'Casa Segura & Prevenção',
      icon: ShieldCheck,
      color: 'from-emerald-700 to-teal-800',
      badge: 'Artigo em Destaque',
      description: 'Adaptações essenciais para evitar quedas. Guia completo de barras de apoio para banheiro, piso antiderrapante e iluminação correta.',
      cta: 'Ver Guia de Barras de Apoio'
    },
    {
      id: 'alimentacao' as TabType,
      title: 'Alimentação Saudável',
      icon: Salad,
      color: 'from-green-700 to-emerald-900',
      badge: 'Nutrição 60+',
      description: 'Receitas fáceis e saborosas, fortalecimento da massa muscular, controle de glicemia e hipertensão, além de dicas de hidratação.',
      cta: 'Ver Dicas Nutricionais'
    },
    {
      id: 'exercicios' as TabType,
      title: 'Exercícios e Mobilidade',
      icon: Activity,
      color: 'from-blue-700 to-indigo-900',
      badge: 'Atividade Segura',
      description: 'Treinos de baixo impacto, alongamentos na cadeira e fortalecimento dos joelhos para manter a autonomia e o equilíbrio diário.',
      cta: 'Conhecer os Exercícios'
    },
    {
      id: 'familia' as TabType,
      title: 'Família e Cuidados',
      icon: HeartHandshake,
      color: 'from-rose-700 to-pink-900',
      badge: 'Apoio & Carinho',
      description: 'Orientações práticas para cuidadores e familiares, rotinas de medicação sem confusão e jogos para estímulo da memória.',
      cta: 'Acessar Guia de Cuidados'
    }
  ];

  return (
    <div className="space-y-12">
      {/* 1. Hero Section Acolhedora */}
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-[#0F2438] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg border border-emerald-800"
        aria-labelledby="hero-title"
      >
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 px-3.5 py-1.5 rounded-lg text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 text-emerald-300" />
            <span>Saúde, Segurança e Autonomia na Terceira Idade</span>
          </div>

          <h1 
            id="hero-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
          >
            Viver Bem na Melhor Idade: Seu Guia de Longevidade Saudável
          </h1>

          <p className="text-lg sm:text-xl text-emerald-100/90 font-medium mb-8 leading-relaxed">
            Bem-vindo ao seu espaço de cuidado integral. Informações confiáveis, testadas e fáceis de aplicar para tornar a sua casa mais segura, seu corpo mais forte e sua rotina repleta de bem-estar e alegria.
          </p>

          {/* Destaques rápidos em lista */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm sm:text-base font-semibold text-emerald-50">
            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl backdrop-blur-xs">
              <Check className="w-5 h-5 text-emerald-300 shrink-0" />
              <span>Prevenção de Quedas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl backdrop-blur-xs">
              <Check className="w-5 h-5 text-emerald-300 shrink-0" />
              <span>Receitas Nutritivas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl backdrop-blur-xs">
              <Check className="w-5 h-5 text-emerald-300 shrink-0" />
              <span>Exercícios em Casa</span>
            </div>
          </div>

          {/* Quick CTA to featured article */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('casa-segura')}
              className="px-6 py-4 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-950 font-black text-lg rounded-xl shadow-md transition-all flex items-center gap-2.5 focus:ring-4 focus:ring-yellow-300"
            >
              <span>Ver Guia de Barras de Apoio para Banheiro</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Formulário de Newsletter de Alta Visibilidade */}
      <section 
        className="bg-white border-2 border-emerald-200 rounded-3xl p-6 sm:p-10 shadow-sm"
        aria-labelledby="newsletter-title"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h2 
                id="newsletter-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]"
              >
                Receba Nossas Dicas Semanais Gratuitas
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-1">
                Junte-se a mais de 18.000 famílias. Enviamos conteúdos curtos, fáceis de ler e comprovados sobre longevidade, receitas e segurança.
              </p>
            </div>
          </div>

          {newsletterSubmitted ? (
            <div 
              className="bg-emerald-50 border-2 border-emerald-400 text-emerald-950 p-6 rounded-2xl flex items-start gap-4"
              role="alert"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-1">
                  Inscrição Confirmada com Sucesso!
                </h3>
                <p className="text-base text-emerald-800 leading-relaxed">
                  Obrigado, {name ? name : 'amigo(a)'}! Enviamos uma mensagem de boas-vindas para <strong>{email}</strong>. Lembre-se de conferir sua caixa de entrada para receber o Checklist do Lar Seguro.
                </p>
                <button
                  onClick={() => { setNewsletterSubmitted(false); setEmail(''); setName(''); }}
                  className="mt-4 px-4 py-2 bg-emerald-700 text-white font-bold text-sm rounded-lg hover:bg-emerald-800"
                >
                  Cadastrar outro e-mail
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-base font-bold text-slate-800 mb-1">
                    Seu Nome (opcional):
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Dona Maria ou Seu José"
                    className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-xl text-lg text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="block text-base font-bold text-slate-800 mb-1">
                    Seu Melhor E-mail <span className="text-red-600">*</span>:
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setNewsletterError(''); }}
                    placeholder="Ex: seuemail@gmail.com"
                    className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-xl text-lg text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              {newsletterError && (
                <p className="text-red-700 font-bold text-sm flex items-center gap-1.5" role="alert">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{newsletterError}</span>
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-black text-lg rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 focus:ring-4 focus:ring-emerald-400 cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>Receber Dicas Gratuitas</span>
                </button>
                <div className="text-xs text-slate-500 text-center sm:text-right">
                  🔒 Garantia de Privacidade · Sem propagandas indesejadas · Cancele quando quiser.
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. Bloco Visual de "Categorias em Destaque" */}
      <section aria-labelledby="categories-title">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 
              id="categories-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]"
            >
              Categorias em Destaque
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Escolha o tema que mais interessa para a sua família hoje:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                onClick={() => onNavigate(cat.id)}
                className="group cursor-pointer bg-white border-2 border-slate-200 hover:border-emerald-700 rounded-2xl p-6 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate(cat.id)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-800 font-bold text-base">
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Estatísticas de Conscientização da OMS e Ministério da Saúde */}
      <section 
        className="bg-slate-100 border-2 border-slate-200 rounded-3xl p-6 sm:p-10"
        aria-labelledby="stats-title"
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Conscientização & Dados Reais
          </span>
          <h2 id="stats-title" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A] mt-2">
            Por que a Prevenção de Quedas Salva Vidas?
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Pequenos ajustes na rotina e na casa transformam a segurança de quem está na melhor idade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span className="text-4xl sm:text-5xl font-black text-emerald-700 block mb-2">
              1 em 3
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Idosos sofrem queda ao ano
            </h3>
            <p className="text-sm text-slate-600">
              Segundo a Organização Mundial da Saúde (OMS), um terço das pessoas acima de 65 anos cai pelo menos uma vez por ano.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span className="text-4xl sm:text-5xl font-black text-amber-600 block mb-2">
              70%
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Ocorrem dentro de casa
            </h3>
            <p className="text-sm text-slate-600">
              O banheiro e os trajetos escuros entre o quarto e a cozinha são os locais de maior incidência de acidentes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <span className="text-4xl sm:text-5xl font-black text-blue-700 block mb-2">
              90%
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Podem ser prevenidas
            </h3>
            <p className="text-sm text-slate-600">
              Com barras de apoio firmes, calçados adequados e eliminação de tapetes escorregadios, o risco despenca.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Banner de Confiança Editorial */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
          <Award className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold text-slate-900">
            Compromisso com Informação Acessível e Responsável
          </h4>
          <p className="text-sm text-slate-600">
            Nossos guias são elaborados com base nas normas da ABNT (NBR 9050) e em diretrizes de geriatria e fisioterapia preventiva.
          </p>
        </div>
        <button
          onClick={() => onNavigate('casa-segura')}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-lg border border-slate-300 transition-colors shrink-0"
        >
          Acessar Artigo de Segurança
        </button>
      </div>
    </div>
  );
};
