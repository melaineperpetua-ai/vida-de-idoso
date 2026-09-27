import React from 'react';
import { 
  ShieldCheck, 
  ArrowUp, 
  Heart, 
  Eye, 
  AlertCircle, 
  ExternalLink 
} from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';
import { TabType } from '../types';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Anchor Ad Bar from AdSense */}
      <AdSenseBanner format="anchor-mobile" />

      <footer className="bg-[#0F1D2E] text-slate-300 pt-16 pb-24 lg:pb-16 mt-20 border-t-4 border-emerald-700" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Coluna 1: Sobre & Missão */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-200" />
                </div>
                <span className="text-xl font-black text-white tracking-tight">
                  Viver Bem <span className="text-emerald-400">Melhor Idade</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Portal dedicado a promover a segurança, autonomia e longevidade com qualidade de vida para idosos e suas famílias em todo o Brasil.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Feito com amor, empatia e acessibilidade.</span>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Navegação Principal
              </h4>
              <ul className="space-y-2.5 text-base">
                <li>
                  <button 
                    onClick={() => { onNavigate('home'); scrollToTop(); }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    • Início & Newsletter
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('casa-segura'); scrollToTop(); }}
                    className="hover:text-emerald-400 transition-colors text-left font-bold text-emerald-300"
                  >
                    • Barras de Apoio para Banheiro
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('alimentacao'); scrollToTop(); }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    • Alimentação & Receitas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('exercicios'); scrollToTop(); }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    • Exercícios & Equilíbrio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('familia'); scrollToTop(); }}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    • Guia da Família & Cuidadores
                  </button>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Acessibilidade & Normas */}
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Padrões & Acessibilidade
              </h4>
              <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                Este portal segue rigorosamente as diretrizes internacionais de acessibilidade <strong>WCAG 2.1 nível AA</strong>:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Fontes ampliadas para facilitar a leitura
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Relação de alto contraste de cores
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Navegação completa por teclado (Tab)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Leitor de voz nativo integrado
                </li>
              </ul>
            </div>

            {/* Coluna 4: Aviso Legal & Voltar ao Topo */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Aviso Médico & Legal
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                As informações deste portal têm caráter estritamente educativo e informativo. Elas não substituem a consulta com médicos, geriatras, fisioterapeutas ou nutricionistas.
              </p>
              <button
                onClick={scrollToTop}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-600 transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-emerald-500"
                aria-label="Voltar para o topo da página"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>

          {/* Linha Final com Direitos e Isenção de Afiliado */}
          <div className="pt-8 border-t border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © 2026 Viver Bem na Melhor Idade. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <span>Termos de Uso</span>
              <span>·</span>
              <span>Política de Privacidade</span>
              <span>·</span>
              <span>Divulgação de Afiliados Amazon</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
