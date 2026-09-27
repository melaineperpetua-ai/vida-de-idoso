import React, { useState } from 'react';
import { ExternalLink, X, Info } from 'lucide-react';

interface AdSenseBannerProps {
  format: 'leaderboard' | 'in-article' | 'skyscraper' | 'anchor-mobile';
  customTitle?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ format, customTitle }) => {
  const [anchorDismissed, setAnchorDismissed] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Leaderboard 728x90 (Desktop) / 320x100 or 320x50 (Mobile)
  if (format === 'leaderboard') {
    return (
      <div 
        className="w-full my-4 flex flex-col items-center justify-center" 
        role="region" 
        aria-label="Espaço Publicitário Leaderboard"
      >
        <div className="w-full max-w-4xl flex items-center justify-between text-xs text-slate-500 px-2 py-1 uppercase tracking-wider font-semibold">
          <span>Publicidade · Google AdSense (728x90)</span>
          <button 
            onClick={() => setShowDisclaimer(!showDisclaimer)} 
            className="flex items-center gap-1 hover:text-slate-800 underline focus:ring-2 focus:ring-emerald-600 rounded"
            title="Informações sobre anúncios"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Sobre os Anúncios</span>
          </button>
        </div>

        {showDisclaimer && (
          <div className="w-full max-w-4xl bg-amber-50 border border-amber-200 text-amber-900 text-sm p-3 rounded mb-2">
            Este espaço exibe anúncios contextuais seguros do Google AdSense selecionados para o público da terceira idade.
          </div>
        )}

        <div className="w-full max-w-4xl min-h-[90px] bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 border border-dashed border-slate-300 rounded-lg p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-emerald-700 text-white flex items-center justify-center font-bold text-xl shrink-0">
              AD
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 leading-tight">
                {customTitle || 'Aparelhos Auditivos Digitais de Alta Precisão & Discrição'}
              </p>
              <p className="text-sm text-slate-600">
                Tecnologia moderna com teste gratuito de 15 dias e atendimento domiciliar com fonoaudiólogo.
              </p>
            </div>
          </div>
          <a
            href="#anuncio"
            onClick={(e) => { e.preventDefault(); alert('Simulação AdSense: Este é um anúncio contextual simulado.'); }}
            className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-md shadow-xs flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-emerald-600"
          >
            <span>Saiba Mais</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  // Native In-Article Ad (Responsive In-Feed / In-Article)
  if (format === 'in-article') {
    return (
      <aside 
        className="my-8 p-5 bg-slate-50 border border-slate-200 rounded-xl"
        aria-label="Anúncio no meio do artigo"
      >
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase mb-2">
          <span>Publicidade Patrocinada · AdSense Nativo</span>
          <span>Google Ads</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg border border-slate-200">
          <div className="w-full md:w-32 h-24 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-800 font-bold text-center p-2 text-sm">
            Ortopedia & Conforto
          </div>
          <div className="flex-1 text-left">
            <h4 className="text-lg font-bold text-slate-900 mb-1">
              {customTitle || 'Cadeiras Articuladas de Banho com Encosto Anatômico'}
            </h4>
            <p className="text-base text-slate-700">
              Estrutura leve em alumínio naval, pés antiderrapantes com ventosas e altura ajustável com 6 níveis.
            </p>
          </div>
          <button
            onClick={() => alert('Simulação AdSense: Este link levaria ao anunciante parceiro.')}
            className="w-full md:w-auto px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-base shadow-xs transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Ver Modelos</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  // Skyscraper 300x600 (Desktop Sidebar)
  if (format === 'skyscraper') {
    return (
      <div 
        className="w-[300px] min-h-[600px] bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-300 rounded-xl p-4 flex flex-col justify-between shadow-xs sticky top-24"
        role="complementary"
        aria-label="Espaço Publicitário Skyscraper"
      >
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase pb-2 border-b border-slate-200 mb-4">
            <span>Publicidade (300x600)</span>
            <span>Google AdSense</span>
          </div>

          <div className="bg-emerald-900 text-white p-4 rounded-lg text-center mb-4">
            <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
              Plano de Saúde Sênior
            </span>
            <p className="text-xl font-bold leading-snug">
              Cuidado Completo Sem Coparticipação
            </p>
          </div>

          <div className="space-y-3 text-slate-700 text-base">
            <div className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold text-lg">✓</span>
              <span>Rede credenciada com hospitais de referência</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold text-lg">✓</span>
              <span>Telemedicina geriátrica 24 horas por dia</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold text-lg">✓</span>
              <span>Programa preventivo de fisioterapia motora</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={() => alert('Simulação AdSense: Clique registrado no banner lateral 300x600.')}
            className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-center text-base shadow-sm transition-colors block focus:ring-2 focus:ring-emerald-600"
          >
            Simular Valores Online
          </button>
          <p className="text-xs text-slate-400 text-center mt-2">
            Anúncio Google verificado · Proteção de privacidade
          </p>
        </div>
      </div>
    );
  }

  // Anchor Ad Mobile (Stick to bottom on small devices)
  if (format === 'anchor-mobile') {
    if (anchorDismissed) return null;

    return (
      <div 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-slate-300 shadow-2xl px-3 py-2 flex items-center justify-between gap-2"
        role="region" 
        aria-label="Anúncio Âncora Móvel"
      >
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold uppercase">
            <span>Anúncio Google</span>
            <span>·</span>
            <span className="truncate">Colchões Ortopédicos com Massagem</span>
          </div>
          <p className="text-sm font-bold text-slate-900 truncate">
            Alívio para coluna e circulação nas pernas com 40% OFF
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => alert('Simulação AdSense: Anúncio âncora móvel acionado.')}
            className="px-3 py-1.5 bg-emerald-700 text-white text-xs font-bold rounded shadow-xs"
          >
            Conferir
          </button>
          <button
            onClick={() => setAnchorDismissed(true)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded focus:ring-2 focus:ring-slate-400"
            aria-label="Fechar anúncio âncora"
            title="Fechar anúncio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
