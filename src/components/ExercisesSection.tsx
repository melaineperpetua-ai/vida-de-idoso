import React from 'react';
import { 
  Activity, 
  Footprints, 
  ShieldCheck, 
  HeartPulse, 
  Sparkles, 
  Clock, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';

export const ExercisesSection: React.FC = () => {
  return (
    <article className="space-y-10" aria-labelledby="exercicios-titulo">
      {/* Header com H1 e Metadados */}
      <header className="bg-white border-2 border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-blue-800 mb-4 uppercase tracking-wider">
          <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
            Mobilidade & Equilíbrio
          </span>
          <span>·</span>
          <span>Atividade Física Adaptada</span>
          <span>·</span>
          <span>Leitura: 5 min</span>
        </div>

        <h1 
          id="exercicios-titulo"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D253A] leading-tight mb-4"
        >
          Exercícios e Mobilidade: Mantendo o Corpo Firme e Seguro
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          Movimento é vida. Estudos comprovam que mesmo 15 a 20 minutos de exercícios físicos diários de baixo impacto são capazes de aumentar a densidade óssea, fortalecer os reflexos motores e reduzir em até 50% o risco de quedas em idosos.
        </p>
      </header>

      {/* H2: Treinos de Baixo Impacto */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="baixo-impacto-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-blue-800">
          <HeartPulse className="w-7 h-7" />
          <h2 id="baixo-impacto-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Treinos Seguros de Baixo Impacto para Praticar
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          Atividades que protegem a cartilagem dos joelhos e quadris enquanto fortalecem o sistema cardiovascular:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-3">
                🚶
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Caminhada ao Ar Livre
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Em pisos regulares e planos. Pratique nos horários amenos (antes das 9h ou após as 16h30) para aproveitar a luz solar suave e evitar desidratação.
              </p>
            </div>
            <div className="text-xs font-bold text-blue-800 bg-blue-50 p-2 rounded-lg">
              Meta: 20 a 30 minutos, 3x por semana
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xl mb-3">
                🏊
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hidroginástica e Natação
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                O empuxo da água sustenta até 90% do peso corporal, permitindo amplitudes articulares completas sem dor ou pressão nos discos intervertebrais.
              </p>
            </div>
            <div className="text-xs font-bold text-teal-800 bg-teal-50 p-2 rounded-lg">
              Ideal para: Artrose, bico de papagaio e hérnia
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xl mb-3">
                🧘
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Pilates e Fisioterapia Motora
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Foco no fortalecimento do "core" (abdômen e lombar), o centro de gravidade que impede o desequilíbrio para os lados ao caminhar.
              </p>
            </div>
            <div className="text-xs font-bold text-indigo-800 bg-indigo-50 p-2 rounded-lg">
              Excelente para postura e firmeza na marcha
            </div>
          </div>
        </div>
      </section>

      {/* Espaço AdSense no Meio do Conteúdo */}
      <AdSenseBanner format="in-article" customTitle="Tênis Ortopédicos com Amortecimento de Impacto e Solado de Borracha" />

      {/* H2: Alongamentos e Exercícios de Equilíbrio na Cadeira */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="alongamentos-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-indigo-800">
          <Sparkles className="w-7 h-7" />
          <h2 id="alongamentos-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Alongamentos e Equilíbrio Sem Risco de Cair
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          Série de exercícios simples para fazer usando uma cadeira pesada e estável ou apoiado na pia da cozinha:
        </p>

        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white font-black flex items-center justify-center shrink-0">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Elevação na Ponta dos Pés (Fortalecimento da Panturrilha)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-2">
                Segure com as duas mãos no encosto de uma cadeira firme. Fique na ponta dos pés, conte até 3 e desça devagar apoiando os calcanhares. Repita 10 vezes.
              </p>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                Benefício: A panturrilha bombeia o sangue de volta para o coração e estabiliza o tornozelo.
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-black flex items-center justify-center shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Levantar e Sentar na Cadeira (Treino de Quadríceps)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-2">
                Em uma cadeira firme sem rodinhas, cruze os braços sobre o peito. Incline o tronco para a frente e levante-se totalmente. Em seguida, sente-se devagar controlando a descida. Repita 8 a 10 vezes.
              </p>
              <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded">
                Benefício: Fortalece as coxas para não depender de terceiros ao levantar da cama ou do vaso.
              </span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-black flex items-center justify-center shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Alongamento Cervical e Ombros (Alívio de Tensões)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-2">
                Sentado com as costas retas, incline a cabeça suavemente em direção ao ombro direito. Mantenha por 15 segundos respirando fundo. Repita para o lado esquerdo.
              </p>
              <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded">
                Benefício: Alivia rigidez no pescoço e melhora o campo visual ao atravessar ruas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dicas de Calçados Seguros */}
      <section 
        className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 sm:p-8"
        aria-labelledby="calcados-titulo"
      >
        <div className="flex items-start gap-4">
          <Footprints className="w-10 h-10 text-amber-700 shrink-0 mt-1" />
          <div className="space-y-3">
            <h2 id="calcados-titulo" className="text-2xl font-bold text-amber-950">
              Atenção com os Calçados Dentro e Fora de Casa
            </h2>
            <p className="text-base text-amber-900 leading-relaxed">
              Mais da metade das quedas de idosos em casa está relacionada ao uso de calçados soltos, como chinelos de dedo ou pantufas sem sustentação no calcanhar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-amber-950">
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Prefira solados de borracha antiderrapante com frisos</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Escolha fechos em velcro para facilitar o calçar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
