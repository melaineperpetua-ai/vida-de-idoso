import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Check, 
  Star, 
  ExternalLink, 
  AlertOctagon, 
  MapPin, 
  CheckSquare, 
  Info,
  Award,
  ShoppingCart,
  Printer,
  Sparkles
} from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';
import { ProductItem } from '../types';

export const BathroomSafetySection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    item1: true,
    item2: false,
    item3: true,
    item4: false,
    item5: false,
  });

  const products: ProductItem[] = [
    {
      id: 'barra-inox-recartilhada',
      name: 'Barra de Apoio em Aço Inox Recartilhada (45cm e 60cm)',
      badge: '🏆 Campeã de Durabilidade & Vendas',
      rating: 4.9,
      reviewsCount: 3480,
      weightCapacity: '150 kg (Norma ABNT NBR 9050)',
      material: 'Aço Inox Cirúrgico 304 genuíno polido',
      idealFor: 'Área do vaso sanitário e lavatório',
      description: 'A barra mais recomendada por fisioterapeutas e engenheiros de acessibilidade. Construída com tubo de inox espesso que nunca oxida ou enferruja, mesmo sob o vapor diário do chuveiro. Possui anel central recartilhado com ranhuras em relevo que garantem máxima fricção na pegada.',
      pros: [
        'Resiste até 150 kg de tração com buchas de fixação especiais de 8mm',
        'Textura recartilhada no meio impede que as mãos escorreguem com sabão',
        'Canoplas de acabamento elegantes que cobrem totalmente os parafusos',
        'Garantia prolongada contra oxidação e corrosão'
      ],
      ctaText: 'Ver Preço e Avaliações na Amazon',
      amazonPriceSimulated: 'R$ 78,90 – R$ 119,00'
    },
    {
      id: 'barra-grip-nylon',
      name: 'Barra de Apoio Emborrachada com Grip Térmico em Nylon',
      badge: '💛 Especial para Mãos Sensíveis & Artrose',
      rating: 4.8,
      reviewsCount: 1920,
      weightCapacity: '130 kg com estrutura interna em aço',
      material: 'Alma interna de aço carbono + revestimento externo em Nylon ABS macio',
      idealFor: 'Idosos com artrite, reumatismo e pele fina ou sensível',
      description: 'Projetada com um toque acolhedor e carinhoso para quem sente desconforto no metal frio. O revestimento térmico emborrachado mantém temperatura agradável no inverno e possui diâmetro ergonômico de 35mm que apoia a palma da mão suavemente sem exigir esforço excessivo de pinça nos dedos. Conta ainda com anéis fotoluminescentes que brilham suavemente no escuro.',
      pros: [
        'Superfície térmica e aconchegante: não fica gelada em dias frios',
        'Textura suave com nervuras anatômicas para dedos com artrose',
        'Anéis fluorescentes integrados que brilham no escuro para visualização noturna',
        'Tratamento antimicrobiano de alta durabilidade e fácil higienização'
      ],
      ctaText: 'Ver Preço na Amazon',
      amazonPriceSimulated: 'R$ 94,50 – R$ 139,90'
    },
    {
      id: 'barra-angular-l',
      name: 'Barra de Apoio Angular em "L" (70cm x 70cm)',
      badge: '🛡️ Máxima Segurança para Dentro do Box',
      rating: 4.9,
      reviewsCount: 2150,
      weightCapacity: '160 kg em alvenaria sólida',
      material: 'Aço Inox de alta espessura com 6 pontos de fixação',
      idealFor: 'Paredes internas do box e proximidade do banco de banho articulado',
      description: 'O formato em "L" é indispensável para a zona molhada do banho. Ele oferece apoio vertical contínuo para manter a estabilidade enquanto o idoso toma banho em pé ou ensaboa o corpo, aliado a um suporte horizontal firme na altura exata para ajudar a sentar ou levantar com calma do banco de banho.',
      pros: [
        'Apoio bidirecional contínuo (em pé e para sentar/levantar)',
        'Fixação robusta com 6 parafusos reforçados para alvenaria',
        'Reduz em mais de 80% o esforço nos joelhos e quadris ao levantar',
        'Compatível com a maioria dos bancos articulados de banho'
      ],
      ctaText: 'Ver Preço na Amazon',
      amazonPriceSimulated: 'R$ 159,00 – R$ 229,00'
    }
  ];

  const handleCtaClick = (prod: ProductItem) => {
    setSelectedProduct(prod);
  };

  const toggleCheck = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className="space-y-10" aria-labelledby="artigo-barras-titulo">
      {/* 1. Header do Artigo & H1 com Metadados Editoriais */}
      <header className="bg-white border-2 border-emerald-100 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 mb-4 uppercase tracking-wider">
          <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
            Segurança Residencial & Prevenção
          </span>
          <span>·</span>
          <span>Atualizado em 2026</span>
          <span>·</span>
          <span>Tempo de Leitura: 6 min</span>
        </div>

        <h1 
          id="artigo-barras-titulo"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D253A] leading-tight mb-6"
        >
          Melhores Barras de Apoio para Banheiro de Idoso: Guia de Segurança
        </h1>

        <div className="border-l-4 border-emerald-600 pl-4 py-2 bg-emerald-50/60 rounded-r-xl mb-6">
          <p className="text-base sm:text-lg text-emerald-950 font-medium">
            <strong>Revisão Técnica:</strong> Conteúdo elaborado e revisado por especialistas em acessibilidade e fisioterapia geriátrica, de acordo com as normas <strong>ABNT NBR 9050</strong> para prevenção de quedas.
          </p>
        </div>

        {/* Introdução Enfatizando a Prevenção de Quedas */}
        <div className="text-lg sm:text-xl text-slate-800 space-y-4 leading-relaxed">
          <p>
            O banheiro é estatisticamente o ambiente mais perigoso de toda a casa para quem tem mais de 60 anos. A combinação de pisos molhados, sabonete escorregadio, espaço confinado e movimentos constantes de transição — como sentar, levantar do vaso sanitário ou transpor o desnível do box — cria um cenário propício para acidentes.
          </p>
          <p>
            De acordo com dados de prontos-socorros geriátricos, <strong>mais de 70% das fraturas de fêmur e bacia em idosos acontecem no banheiro</strong>. A boa notícia é que uma intervenção simples, rápida e de baixo custo é capaz de devolver a autonomia e eliminar o pavor de escorregar: a instalação correta de <strong>barras de apoio adequadas e confiáveis</strong>.
          </p>
        </div>
      </header>

      {/* 2. H2: Como Escolher a Barra de Apoio Ideal? */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="como-escolher-titulo"
      >
        <h2 
          id="como-escolher-titulo"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D253A] mb-4"
        >
          Como Escolher a Barra de Apoio Ideal?
        </h2>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          Nem toda barra de apoio à venda no mercado atende aos critérios essenciais de segurança. Para garantir que seu investimento proteja quem você ama nos momentos críticos, avalie com atenção estes três fatores fundamentais:
        </p>

        {/* Tópicos em Formato de Lista Estruturada com Ícones */}
        <ul className="space-y-6">
          {/* Material e Resistência */}
          <li className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                1. Material e Resistência (Capacidade de Carga)
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                A barra deve suportar o impacto súbito do peso do corpo em queda livre. A norma técnica brasileira (ABNT NBR 9050) estipula que a barra e a sua fixação devem suportar um esforço mínimo de <strong>150 kg</strong> em qualquer sentido.
              </p>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-sm text-slate-800">
                <span className="font-bold text-emerald-800">✓ O que priorizar:</span> Barras em <strong>Aço Inoxidável Cirúrgico (AISI 304)</strong> ou alumínio estrutural de parede grossa. Fuja de metais ferrosos que oxidam por dentro ou plásticos ocos frágeis.
              </div>
            </div>
          </li>

          {/* Textura Antiderrapante */}
          <li className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                2. Textura Antiderrapante na Região de Empunhadura
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Em uma situação de desequilíbrio, a mão frequentemente estará molhada de água ou com espuma de sabonete. Uma barra de metal liso espelhado pode fazer os dedos escorregarem no exato instante em que a pessoa tenta se segurar.
              </p>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-sm text-slate-800">
                <span className="font-bold text-teal-800">✓ O que priorizar:</span> Modelos com <strong>recartilho central usinado</strong> (ranhuras em relevo no metal) ou <strong>revestimento emborrachado/nylon</strong> com caneluras que acomodam os dedos confortavelmente.
              </div>
            </div>
          </li>

          {/* Tamanho Adequado */}
          <li className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3. Tamanho Adequado para Cada Local do Banheiro
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                O comprimento da barra deve ser compatível com a função e o espaço físico disponível:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-800">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold block text-blue-800">30 cm a 45 cm:</span>
                  Ideal para lavatórios de pia e espaços pequenos.
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold block text-blue-800">60 cm a 80 cm:</span>
                  Ideal para parede lateral do vaso sanitário e box.
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold block text-blue-800">Em 'L' (70x70 cm):</span>
                  Excelente para dentro do box (apoio vertical + horizontal).
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* 3. Espaço Simulado para AdSense no Meio do Texto (Native) */}
      <AdSenseBanner format="in-article" customTitle="Tapetes Antiderrapantes com Sucção de Grau Hospitalar para Box" />

      {/* 4. H2: As Melhores Barras de Apoio para Banheiro de Idoso em 2026 */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="melhores-modelos-titulo"
      >
        <div className="mb-8">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Comparativo de Produtos 2026
          </span>
          <h2 
            id="melhores-modelos-titulo"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D253A] mt-2 mb-2"
          >
            As Melhores Barras de Apoio para Banheiro de Idoso em 2026
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Selecionamos os 3 modelos mais bem avaliados por famílias brasileiras, fisioterapeutas e cuidadores na Amazon Brasil:
          </p>
        </div>

        {/* 3 Cards de Produtos Simulando a Amazon */}
        <div className="space-y-8">
          {products.map((prod, index) => (
            <div 
              key={prod.id}
              className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-300 hover:border-emerald-600 rounded-3xl p-6 sm:p-8 transition-all shadow-sm hover:shadow-md flex flex-col lg:flex-row gap-6 items-start"
            >
              {/* Product Badge & Number */}
              <div className="w-full lg:w-48 shrink-0 flex flex-col justify-between self-stretch bg-slate-100/90 rounded-2xl p-4 border border-slate-200 text-center">
                <div>
                  <span className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-1">
                    Opção #{index + 1}
                  </span>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-slate-300 flex items-center justify-center text-emerald-800 font-black text-2xl shadow-xs mb-3">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <span className="text-xs font-bold text-emerald-900 bg-emerald-100/80 px-2 py-1 rounded block">
                    {prod.badge}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-500 block">Faixa estimada:</span>
                  <span className="text-base font-extrabold text-slate-900 block">
                    {prod.amazonPriceSimulated}
                  </span>
                </div>
              </div>

              {/* Product Info & Pros */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D253A]">
                    {prod.name}
                  </h3>
                </div>

                {/* Rating simulated */}
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-slate-900">{prod.rating} de 5</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600 underline">({prod.reviewsCount.toLocaleString('pt-BR')} avaliações na Amazon)</span>
                </div>

                <p className="text-base text-slate-700 leading-relaxed">
                  {prod.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm bg-white p-3 rounded-xl border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-900">Capacidade de Peso: </span>
                    <span className="text-emerald-800 font-bold">{prod.weightCapacity}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Ideal para: </span>
                    <span className="text-slate-700">{prod.idealFor}</span>
                  </div>
                </div>

                {/* Pros List */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Principais Vantagens e Prós:
                  </h4>
                  <ul className="space-y-1.5 text-base text-slate-700">
                    {prod.pros.map((pro, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amazon CTA Button */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => handleCtaClick(prod)}
                    className="px-6 py-4 bg-[#FF9900] hover:bg-[#FF8800] active:bg-[#e67a00] text-slate-950 font-black text-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-3 focus:ring-4 focus:ring-amber-300 cursor-pointer"
                    aria-label={`Ver Preço e Avaliações na Amazon para ${prod.name}`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{prod.ctaText}</span>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-500 text-center sm:text-left">
                    🚚 Disponível para entrega Prime com devolução facilitada.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Alerta em Destaque: Evite as Barras por Ventosa! */}
      <section 
        className="bg-red-50 border-4 border-red-500 rounded-3xl p-6 sm:p-8 shadow-md"
        role="alert"
        aria-labelledby="alerta-ventosa-titulo"
      >
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <AlertOctagon className="w-10 h-10" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-xs uppercase font-black tracking-widest text-red-700 bg-red-100 px-3 py-1 rounded-full">
              Aviso Crítico de Segurança
            </span>
            <h2 
              id="alerta-ventosa-titulo"
              className="text-2xl sm:text-3xl font-black text-red-950 leading-tight"
            >
              Evite as Barras de Apoio por Ventosa! Entenda o Perigo
            </h2>
            <div className="text-base sm:text-lg text-red-950 space-y-3 leading-relaxed">
              <p>
                Muitas pessoas são tentadas a comprar barras de apoio com sucção de ventosa pela promessa de <em>"instalação fácil sem furar o azulejo"</em>. No entanto, <strong>médicos ortopedistas, geriatras e peritos de segurança desaconselham formalmente esse tipo de produto para idosos</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-medium">
                <li>
                  <strong>Perda gradativa de vácuo:</strong> O vapor quente diário do chuveiro, a umidade constante e as microfissuras dos rejuntes fazem a borracha da ventosa perder aderência silenciosamente.
                </li>
                <li>
                  <strong>Falsa sensação de segurança:</strong> A barra parece firme ao toque leve, mas no momento em que o idoso escorrega e descarrega o peso repentino do corpo (efeito alavanca), a ventosa se desprende de forma instantânea.
                </li>
                <li>
                  <strong>Quedas mais graves:</strong> Como o idoso confiava no apoio, a queda ocorre com aceleração e surpresa, gerando traumas cranianos e fraturas de fêmur.
                </li>
              </ul>
              <p className="font-bold bg-white/70 p-3 rounded-xl border border-red-300 text-red-900">
                👉 Conclusão de Segurança: Utilize <strong>SEMPRE barras aparafusadas na alvenaria</strong> com buchas de 8mm e parafusos de aço inox. Fure o azulejo sem medo: a integridade física da sua família vale infinitamente mais!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. H2: Onde Instalar as Barras de Apoio no Banheiro? */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="onde-instalar-titulo"
      >
        <h2 
          id="onde-instalar-titulo"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D253A] mb-4"
        >
          Onde Instalar as Barras de Apoio no Banheiro?
        </h2>
        <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
          Para que as barras cumpram sua função ergonômica com perfeição, a localização e a altura precisam respeitar os movimentos naturais do corpo humano:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ao Lado do Vaso */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Ao Lado do Vaso Sanitário
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                O movimento de sentar e levantar exige grande força dos joelhos e da musculatura lombar. A barra horizontal deve ser instalada a aproximadamente <strong>75 cm a 80 cm do piso acabado</strong>, permitindo que a pessoa apoie o antebraço ou firme as mãos com os braços semi-flexionados.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-900 bg-emerald-100 p-2 rounded-lg text-center">
              Recomendação: Barra reta de 60cm a 80cm
            </div>
          </div>

          {/* Dentro do Box */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Dentro do Box de Banho
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Esta é a área crítica de água e espuma. O ideal é conjugar uma <strong>barra vertical</strong> perto do registro do chuveiro (altura de 1,10m a 1,50m) para se segurar enquanto ensaboa os pés, mais uma <strong>barra horizontal ou em 'L'</strong> na altura de 75cm para dar apoio ao banco articulado de banho.
              </p>
            </div>
            <div className="text-xs font-bold text-teal-900 bg-teal-100 p-2 rounded-lg text-center">
              Recomendação: Barra em 'L' ou reta de 70cm
            </div>
          </div>

          {/* Na Entrada do Box */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Na Entrada do Box
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                O momento de transpor a porta de correr do box ou o desnível do trilho de alumínio no chão é quando muitos idosos perdem o equilíbrio ao levantar um dos pés. Uma barra vertical de 45cm logo no batente ou parede de entrada oferece o ponto de apoio perfeito.
              </p>
            </div>
            <div className="text-xs font-bold text-blue-900 bg-blue-100 p-2 rounded-lg text-center">
              Recomendação: Barra vertical de 45cm
            </div>
          </div>
        </div>
      </section>

      {/* 7. Checklist Interativo de Segurança do Banheiro */}
      <section 
        className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-emerald-900"
        aria-labelledby="checklist-titulo"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3 text-emerald-300">
            <CheckSquare className="w-7 h-7" />
            <span className="text-xs uppercase font-extrabold tracking-wider">
              Ferramenta Prática para o Lar
            </span>
          </div>

          <h2 
            id="checklist-titulo"
            className="text-2xl sm:text-3xl font-black text-white mb-2"
          >
            Checklist Rápido: Seu Banheiro está Realmente Seguro?
          </h2>
          <p className="text-base text-emerald-100 mb-6">
            Marque os itens que você já possui em sua residência para avaliar o nível de segurança preventiva:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { id: 'item1', label: 'Barra de apoio parafusada na alvenaria ao lado do vaso sanitário' },
              { id: 'item2', label: 'Barra de apoio antiderrapante dentro da área molhada do box' },
              { id: 'item3', label: 'Ausência total de tapetes soltos ou uso de tapetes colados com borracha' },
              { id: 'item4', label: 'Banco ou cadeira plástica própria para banho com pés de borracha' },
              { id: 'item5', label: 'Iluminação forte e luz noturna que clareia o caminho até a pia' },
            ].map(item => (
              <label 
                key={item.id}
                className="flex items-start gap-3 bg-white/10 hover:bg-white/15 p-3.5 rounded-xl cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checklist[item.id] || false}
                  onChange={() => toggleCheck(item.id)}
                  className="w-6 h-6 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 shrink-0 cursor-pointer"
                />
                <span className="text-base font-semibold text-white select-none">
                  {item.label}
                </span>
              </label>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-5 py-3 bg-white text-emerald-950 font-bold text-base rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2"
            >
              <Printer className="w-5 h-5" />
              <span>Imprimir este Checklist</span>
            </button>
            <span className="text-xs text-emerald-300">
              💡 Dica: Leve este checklist na loja de materiais de construção ou mostre ao instalador.
            </span>
          </div>
        </div>
      </section>

      {/* Modal Demonstrativo de Afiliado Amazon */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-afiliado-titulo"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Redirecionamento Seguro Amazon
              </span>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-2xl font-bold"
                aria-label="Fechar janela"
              >
                ×
              </button>
            </div>

            <div className="text-center py-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl mx-auto flex items-center justify-center text-amber-700 mb-3">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 id="modal-afiliado-titulo" className="text-xl font-bold text-slate-900">
                {selectedProduct.name}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Você será direcionado para conferir as avaliações reais e melhores preços na página oficial da Amazon Brasil.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 space-y-1.5 border border-slate-200">
              <div className="flex items-center gap-1 font-bold text-slate-800">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Transparência Editorial Viver Bem:</span>
              </div>
              <p>
                Como participante do Programa de Associados da Amazon, o Viver Bem pode receber uma pequena comissão por compras qualificadas, sem nenhum custo extra para você. Isso financia a produção contínua de guias gratuitos de saúde para idosos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Redirecionando de forma simulada para a página do produto na Amazon:\n\n${selectedProduct.name}\n\nPreço Estimado: ${selectedProduct.amazonPriceSimulated}`);
                  setSelectedProduct(null);
                }}
                className="flex-1 py-3 px-4 bg-[#FF9900] hover:bg-[#FF8800] text-slate-950 font-black rounded-xl text-center shadow-md transition-colors"
              >
                Continuar para a Amazon
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors"
              >
                Voltar ao Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
