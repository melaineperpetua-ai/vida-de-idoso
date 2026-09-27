import React, { useState } from 'react';
import { PhoneCall, Droplets, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';
import { TabType } from '../types';

interface SidebarProps {
  onNavigate: (tab: TabType) => void;
}

const DAILY_TIPS = [
  "Retire tapetes soltos no corredor e banheiro. Se mantiver, fixe com fita dupla-face antiderrapante.",
  "Mantenha uma luz noturna suave no trajeto do quarto até o banheiro para evitar tropeços no escuro.",
  "Evite chinelos sem calcanhar fixo (tipo 'mule'). Prefira calçados fechados com solado de borracha.",
  "Beba um copo de água a cada 2 horas, mesmo sem sentir sede. Idosos sentem menos a desidratação.",
  "Coloque os itens que você mais usa na altura dos olhos ou do peito, evitando bancos ou escadas para alcançar armários altos.",
  "Tome 15 minutos de sol matinal antes das 9h para auxiliar na ativação da Vitamina D e fortalecimento ósseo."
];

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [weight, setWeight] = useState<string>('65');
  const [tipIndex, setTipIndex] = useState<number>(0);

  // Recommended hydration: ~30-35ml per kg of body weight for seniors
  const calculatedWater = Math.round((Number(weight) || 60) * 35);
  const glasses = Math.round(calculatedWater / 250);

  const nextTip = () => {
    setTipIndex((prev) => (prev + 1) % DAILY_TIPS.length);
  };

  return (
    <aside className="space-y-6" aria-label="Barra Lateral de Utilidades e Publicidade">
      {/* Skyscraper 300x600 Google AdSense */}
      <div className="flex justify-center">
        <AdSenseBanner format="skyscraper" />
      </div>

      {/* Widget: Calculadora de Hidratação Sênior */}
      <div className="bg-white border-2 border-emerald-100 rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-3 text-emerald-800">
          <Droplets className="w-6 h-6 text-emerald-600" />
          <h3 className="text-lg font-bold">Calculadora de Água Diária</h3>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          Na terceira idade, a sensação de sede diminui naturalmente. Calcule a meta ideal de líquidos para seu peso:
        </p>

        <div className="mb-4">
          <label htmlFor="peso-idoso" className="block text-xs font-bold uppercase text-slate-700 mb-1">
            Seu peso corporal (kg):
          </label>
          <div className="flex items-center gap-2">
            <input
              id="peso-idoso"
              type="number"
              min="35"
              max="160"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg text-lg font-bold text-slate-900 focus:border-emerald-600 focus:outline-none"
            />
            <span className="text-sm font-bold text-slate-600">kg</span>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
          <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider block">
            Meta Recomendada:
          </span>
          <span className="text-2xl font-black text-emerald-900 block my-0.5">
            {calculatedWater.toLocaleString('pt-BR')} ml/dia
          </span>
          <span className="text-xs text-emerald-700 font-semibold block">
            Aproximadamente {glasses} copos de 250ml
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-2 leading-tight">
          *Em casos de restrição hídrica (insuficiência cardíaca ou renal), siga estritamente a orientação do seu médico.
        </p>
      </div>

      {/* Widget: Dica Rápida do Dia */}
      <div className="bg-amber-50/70 border-2 border-amber-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <h3>Dica Rápida de Segurança</h3>
          </div>
          <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
            Dica {tipIndex + 1}/{DAILY_TIPS.length}
          </span>
        </div>
        <p className="text-base text-slate-800 leading-relaxed min-h-[70px]">
          "{DAILY_TIPS[tipIndex]}"
        </p>
        <button
          onClick={nextTip}
          className="mt-3 w-full py-2 bg-amber-200 hover:bg-amber-300 active:bg-amber-400 text-amber-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <span>Ver Outra Dica</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Widget: Destaque Guia Casa Segura */}
      <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-emerald-300">
          <ShieldCheck className="w-6 h-6" />
          <span className="text-xs uppercase font-extrabold tracking-wider">
            Guia de Prevenção 2026
          </span>
        </div>
        <h4 className="text-lg font-bold mb-2 leading-snug">
          Melhores Barras de Apoio para Banheiro
        </h4>
        <p className="text-sm text-emerald-100 mb-4">
          Descubra como evitar 90% das quedas no banheiro com barras inox certificadas pela ABNT.
        </p>
        <button
          onClick={() => onNavigate('casa-segura')}
          className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-extrabold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <span>Ler Guia Completo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Widget: Telefones de Emergência */}
      <div className="bg-white border-2 border-red-100 rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-3 text-red-700">
          <PhoneCall className="w-5 h-5 text-red-600" />
          <h3 className="text-base font-bold">Telefones Úteis no Brasil</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-800">
          <li className="flex justify-between items-center py-1 border-b border-slate-100">
            <span>SAMU (Ambulância Médica):</span>
            <span className="font-extrabold text-red-600 text-base">192</span>
          </li>
          <li className="flex justify-between items-center py-1 border-b border-slate-100">
            <span>Bombeiros (Resgate):</span>
            <span className="font-extrabold text-red-600 text-base">193</span>
          </li>
          <li className="flex justify-between items-center py-1">
            <span>Disque Direitos Humanos (Idoso):</span>
            <span className="font-extrabold text-slate-900 text-base">100</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
