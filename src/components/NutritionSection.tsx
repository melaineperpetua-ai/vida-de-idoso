import React from 'react';
import { 
  Salad, 
  Heart, 
  Utensils, 
  Droplets, 
  Pill, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';

export const NutritionSection: React.FC = () => {
  return (
    <article className="space-y-10" aria-labelledby="nutricao-titulo">
      {/* Header com H1 e Metadados */}
      <header className="bg-white border-2 border-green-100 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-green-800 mb-4 uppercase tracking-wider">
          <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full">
            Nutrição na Terceira Idade
          </span>
          <span>·</span>
          <span>Otimizado para Longevidade</span>
          <span>·</span>
          <span>Leitura: 5 min</span>
        </div>

        <h1 
          id="nutricao-titulo"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D253A] leading-tight mb-4"
        >
          Alimentação Saudável e Nutrição na Terceira Idade
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          Com o passar dos anos, o metabolismo desacelera, a absorção de certos micronutrientes se altera e o paladar pode sofrer variações. Uma alimentação equilibrada e saborosa é a chave para preservar a massa magra, proteger o coração e manter a energia lá em cima.
        </p>
      </header>

      {/* H2: Receitas Fáceis e Fortalecedoras */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="receitas-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-green-800">
          <Utensils className="w-7 h-7" />
          <h2 id="receitas-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Receitas Fáceis e Ricas em Proteína e Fibras
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          Pratos leves, fáceis de mastigar e ricos em nutrientes para o café da manhã, almoço e jantar:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Receita 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Café da Manhã & Lanche
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
                Mingau de Aveia com Canela e Banana
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Excelente fonte de beta-glucana (fibra que auxilia a reduzir o colesterol LDL) e potássio.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 mb-4">
                <li>• 2 colheres de sopa de farelo de aveia</li>
                <li>• 1 xícara de leite desnatado ou vegetal</li>
                <li>• 1 banana madura amassada</li>
                <li>• 1 pitada de canela em pó (sem açúcar)</li>
              </ul>
            </div>
            <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
              ✓ Ajuda no trânsito intestinal e saciedade
            </div>
          </div>

          {/* Receita 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Almoço ou Jantar Leve
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
                Sopa Cremosa de Abóbora com Frango
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Textura suave para idosos com dificuldade de mastigação e alto teor proteico contra a perda muscular.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 mb-4">
                <li>• 300g de abóbora cabotiá cozida e batida</li>
                <li>• 150g de peito de frango bem desfiado</li>
                <li>• Cenoura ralada e folhas de espinafre</li>
                <li>• Temperado com alho, cebola e azeite</li>
              </ul>
            </div>
            <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
              ✓ Rico em betacaroteno, ferro e proteína
            </div>
          </div>

          {/* Receita 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                Hidratação & Vitalidade
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
                Suco Revitalizante de Couve e Maçã
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Bebida refrescante que combate a constipação e fornece cálcio vegetal e antioxidantes.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 mb-4">
                <li>• 1 folha de couve manteiga fresca</li>
                <li>• 1 maçã média com casca</li>
                <li>• 200ml de água de coco ou água mineral</li>
                <li>• Gotas de limão siciliano a gosto</li>
              </ul>
            </div>
            <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg">
              ✓ Hidratação com reposição de eletrólitos
            </div>
          </div>
        </div>
      </section>

      {/* Espaço Simulado para AdSense no Meio do Conteúdo */}
      <AdSenseBanner format="in-article" customTitle="Suplementos de Proteína Isolada (Whey Geriátrico) Recomendados" />

      {/* H2: Controle de Diabetes e Hipertensão */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="controle-clinico-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-rose-800">
          <Heart className="w-7 h-7" />
          <h2 id="controle-clinico-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Controle de Diabetes e Hipertensão Arterial
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          Estratégias simples para manter os índices glicêmicos e a pressão controlados sem abrir mão do sabor:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-600"></span>
              Pressão Arterial Sob Controle
            </h3>
            <p className="text-base text-slate-700">
              Reduzir o sal não significa comer comida sem graça. O segredo é investir em <strong>ervas aromáticas</strong>:
            </p>
            <ul className="space-y-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Substitua o sal refinado por orégano, alecrim fresco, manjericão e cúrcuma (açafrão-da-terra).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Evite embutidos, conservas, caldos prontos em cubo e molhos ultraprocessados ricos em sódio oculto.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Consuma folhas verde-escuras que contêm magnésio e potássio, vasodilatadores naturais.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-600"></span>
              Glicemia Estável e Prevenção do Diabetes
            </h3>
            <p className="text-base text-slate-700">
              Evite picos rápidos de glicose através da combinação inteligente de nutrientes:
            </p>
            <ul className="space-y-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sempre consuma frutas acompanhadas de sementes (chia ou linhaça) ou aveia para reduzir o índice glicêmico.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Priorize carboidratos de digestão lenta: batata-doce, mandioca e arroz integral.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Fracione as refeições para evitar longos períodos de jejum que causam hipoglicemia e tontura.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* H2: Suplementos Essenciais na Terceira Idade */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="suplementos-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-blue-800">
          <Pill className="w-7 h-7" />
          <h2 id="suplementos-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Suplementação: Cálcio, Vitamina D e Ômega 3
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          Com a menor capacidade de síntese cutânea e intestinal, alguns suplementos podem ser prescritos pelo médico geriatra:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-1">Vitamina D3</h3>
            <p className="text-sm text-slate-700">
              Fixa o cálcio na estrutura óssea e reforça a resposta do sistema imunológico. Fundamental na prevenção da osteopenia e osteoporose.
            </p>
          </div>
          <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200">
            <h3 className="text-lg font-bold text-amber-900 mb-1">Cálcio + Magnésio</h3>
            <p className="text-sm text-slate-700">
              O magnésio atua em conjunto com o cálcio para garantir contração muscular adequada e prevenir cãibras noturnas frequentes.
            </p>
          </div>
          <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200">
            <h3 className="text-lg font-bold text-emerald-900 mb-1">Ômega 3 DHA/EPA</h3>
            <p className="text-sm text-slate-700">
              Ácido graxo essencial com ação anti-inflamatória cerebral e vascular, auxiliando na preservação da cognição e memória.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-100/70 border border-amber-300 rounded-xl flex items-center gap-3 text-amber-950 text-sm">
          <AlertCircle className="w-6 h-6 shrink-0 text-amber-800" />
          <span>
            <strong>Atenção Médica:</strong> Nunca inicie suplementação por conta própria. Consulte sempre o médico geriatra ou nutricionista para realizar exames de sangue periódicos.
          </span>
        </div>
      </section>
    </article>
  );
};
