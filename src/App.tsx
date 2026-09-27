/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AdSenseBanner } from './components/AdSenseBanner';
import { Sidebar } from './components/Sidebar';
import { HomeSection } from './components/HomeSection';
import { BathroomSafetySection } from './components/BathroomSafetySection';
import { NutritionSection } from './components/NutritionSection';
import { ExercisesSection } from './components/ExercisesSection';
import { CaregiversSection } from './components/CaregiversSection';
import { Footer } from './components/Footer';
import { TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [fontScale, setFontScale] = useState<number>(1.0);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isReading, setIsReading] = useState<boolean>(false);

  // Text-to-speech for seniors with vision challenges
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não possui suporte ao recurso de leitura em voz alta.');
      return;
    }

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    let textToRead = '';
    if (activeTab === 'home') {
      textToRead = 'Bem-vindo ao Viver Bem na Melhor Idade. Seu guia de longevidade saudável, prevenção de quedas, alimentação e exercícios para a terceira idade.';
    } else if (activeTab === 'casa-segura') {
      textToRead = 'Melhores Barras de Apoio para Banheiro de Idoso: Guia de Segurança. O banheiro é o cômodo mais perigoso da casa. Aprenda a escolher barras em aço inox recartilhado ou emborrachado com suporte de até 150 quilos, e evite terminantemente barras por ventosa que soltam facilmente.';
    } else if (activeTab === 'alimentacao') {
      textToRead = 'Alimentação Saudável e Nutrição na Terceira Idade. Receitas fáceis ricas em proteínas e fibras, controle natural de diabetes e pressão alta, e importância da hidratação diária.';
    } else if (activeTab === 'exercicios') {
      textToRead = 'Exercícios e Mobilidade na Terceira Idade. Treinos de baixo impacto, hidroginástica, alongamentos na cadeira e fortalecimento das pernas para evitar quedas.';
    } else if (activeTab === 'familia') {
      textToRead = 'Família e Cuidados. Dicas para organizar remédios sem erros com caixas semanais, jogos de memória e estímulo cognitivo, e cuidados com a saúde mental do cuidador.';
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95; // Slightly slower pace for seniors
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsReading(false);
    };

    utterance.onerror = () => {
      setIsReading(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
  };

  // Stop audio reading when switching tabs
  const handleTabChange = (newTab: TabType) => {
    if (isReading && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
    setActiveTab(newTab);
  };

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div 
      className={`min-h-screen transition-all ${
        isHighContrast 
          ? 'bg-white text-black font-semibold' 
          : 'bg-[#FAF9F5] text-[#132238]'
      }`}
      style={{
        fontSize: `${fontScale * 100}%`
      }}
    >
      {/* 1. Header with Accessibility Bar and Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        fontScale={fontScale}
        setFontScale={setFontScale}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        isReading={isReading}
        toggleSpeech={toggleSpeech}
      />

      {/* 2. Top Simulated AdSense Leaderboard (728x90) just below Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner format="leaderboard" />
      </div>

      {/* 3. Main Content Container with Layout Grid */}
      <main 
        id="conteudo-principal" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 focus:outline-none"
        tabIndex={-1}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column (8 cols on desktop) */}
          <div className="lg:col-span-8">
            {activeTab === 'home' && (
              <HomeSection onNavigate={handleTabChange} />
            )}

            {activeTab === 'casa-segura' && (
              <BathroomSafetySection />
            )}

            {activeTab === 'alimentacao' && (
              <NutritionSection />
            )}

            {activeTab === 'exercicios' && (
              <ExercisesSection />
            )}

            {activeTab === 'familia' && (
              <CaregiversSection />
            )}
          </div>

          {/* Sidebar Column (4 cols on desktop) with Skyscraper 300x600 & Senior Utilities */}
          <div className="lg:col-span-4 hidden lg:block">
            <Sidebar onNavigate={handleTabChange} />
          </div>
        </div>
      </main>

      {/* 4. Footer with Anchor Ad and Accessibility Disclaimers */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}
