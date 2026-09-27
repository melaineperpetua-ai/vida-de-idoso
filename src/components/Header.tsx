import React, { useState } from 'react';
import { 
  Home, 
  ShieldCheck, 
  Salad, 
  Activity, 
  HeartHandshake, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Eye, 
  Type
} from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  fontScale: number;
  setFontScale: (scale: number | ((prev: number) => number)) => void;
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
  isReading: boolean;
  toggleSpeech: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  fontScale,
  setFontScale,
  isHighContrast,
  setIsHighContrast,
  isReading,
  toggleSpeech,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as TabType, label: 'Início', icon: Home, subtitle: 'Página inicial' },
    { id: 'casa-segura' as TabType, label: 'Casa Segura', icon: ShieldCheck, subtitle: 'Barras & Prevenção' },
    { id: 'alimentacao' as TabType, label: 'Alimentação', icon: Salad, subtitle: 'Nutrição & Receitas' },
    { id: 'exercicios' as TabType, label: 'Exercícios', icon: Activity, subtitle: 'Mobilidade & Firmeza' },
    { id: 'familia' as TabType, label: 'Família & Cuidados', icon: HeartHandshake, subtitle: 'Rotina & Memória' },
  ];

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 shadow-sm transition-colors">
      {/* Skip to Main Content Link for screen readers and keyboard users */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-800 focus:text-white focus:font-bold focus:rounded-md shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* Senior Accessibility Bar */}
      <div className="bg-[#12283E] text-white text-sm px-4 py-2 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-300 flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>Acessibilidade para Você:</span>
            </span>
            <span className="hidden sm:inline text-slate-300 text-xs">
              Ajuste o tamanho do texto ou ouça a página
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Font Size Adjusters */}
            <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-600" title="Ajustar tamanho da letra">
              <span className="text-xs px-2 text-slate-300 flex items-center gap-1">
                <Type className="w-3.5 h-3.5" />
                <span>Letra:</span>
              </span>
              <button
                onClick={() => setFontScale((prev) => Math.max(0.9, Number((prev - 0.1).toFixed(1))))}
                className="px-2.5 py-1 text-xs font-bold hover:bg-slate-700 active:bg-slate-600 rounded transition-colors"
                aria-label="Diminuir tamanho da letra"
              >
                A-
              </button>
              <button
                onClick={() => setFontScale(1.0)}
                className={`px-2.5 py-1 text-xs font-bold transition-colors rounded ${
                  fontScale === 1.0 ? 'bg-emerald-600 text-white' : 'hover:bg-slate-700'
                }`}
                aria-label="Restaurar tamanho padrão da letra"
              >
                Normal
              </button>
              <button
                onClick={() => setFontScale((prev) => Math.min(1.3, Number((prev + 0.1).toFixed(1))))}
                className="px-2.5 py-1 text-xs font-bold hover:bg-slate-700 active:bg-slate-600 rounded transition-colors"
                aria-label="Aumentar tamanho da letra"
              >
                A+
              </button>
            </div>

            {/* High Contrast Mode Toggle */}
            <button
              onClick={() => setIsHighContrast((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold border transition-colors ${
                isHighContrast
                  ? 'bg-yellow-400 text-black border-yellow-300 shadow-sm'
                  : 'bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700'
              }`}
              aria-pressed={isHighContrast}
              aria-label="Alternar modo de alto contraste para facilitar a leitura"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isHighContrast ? 'Alto Contraste: ATIVO' : 'Alto Contraste'}</span>
            </button>

            {/* Audio Reader Toggle */}
            <button
              onClick={toggleSpeech}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition-colors border ${
                isReading
                  ? 'bg-red-600 text-white border-red-500 animate-pulse'
                  : 'bg-emerald-700 text-white border-emerald-600 hover:bg-emerald-600'
              }`}
              aria-pressed={isReading}
              aria-label={isReading ? 'Pausar leitura de voz' : 'Ouvir a página em voz alta'}
            >
              {isReading ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isReading ? 'Pausar Áudio' : 'Ouvir Artigo'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Slogan */}
          <div 
            onClick={() => handleSelectTab('home')}
            className="cursor-pointer flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-700 rounded-lg p-1"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelectTab('home')}
            aria-label="Ir para a página inicial Viver Bem"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-800 to-teal-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7 text-emerald-100" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#0D253A] tracking-tight block">
                Viver Bem <span className="text-emerald-700 font-bold text-lg sm:text-xl">Melhor Idade</span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 block">
                Longevidade Saudável & Segurança no Lar
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden lg:flex items-center gap-1.5" 
            aria-label="Navegação Principal"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2.5 rounded-xl font-bold text-base transition-all flex items-center gap-2 border-2 ${
                    isActive
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-102'
                      : 'bg-white text-slate-800 border-transparent hover:border-slate-300 hover:bg-slate-100/80 active:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 focus:ring-4 focus:ring-emerald-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav 
          className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-2"
          aria-label="Menu Mobile"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 px-2">
            Navegue pelas Seções:
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-bold text-lg flex items-center justify-between border-2 transition-colors ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                    : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-6 h-6 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                  <div>
                    <span className="block leading-tight">{item.label}</span>
                    <span className={`text-xs block font-normal ${isActive ? 'text-emerald-100' : 'text-slate-600'}`}>
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-black/10">
                  {isActive ? 'Atual' : 'Abrir'}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
