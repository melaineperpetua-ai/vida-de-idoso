import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Brain, 
  CalendarClock, 
  Smile, 
  Users, 
  Check, 
  Pill, 
  BookOpen, 
  Lightbulb,
  Heart
} from 'lucide-react';
import { AdSenseBanner } from './AdSenseBanner';

export const CaregiversSection: React.FC = () => {
  // Simple interactive memory puzzle demo
  const [revealedWord, setRevealedWord] = useState<number | null>(null);

  const memoryWords = [
    { id: 1, tip: "Capital da França com a Torre Eiffel", word: "PARIS" },
    { id: 2, tip: "Flor símbolo do amor, com espinhos", word: "ROSA" },
    { id: 3, tip: "Oceano que banha todo o litoral do Brasil", word: "ATLÂNTICO" },
  ];

  return (
    <article className="space-y-10" aria-labelledby="familia-titulo">
      {/* Header com H1 e Metadados */}
      <header className="bg-white border-2 border-rose-100 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-rose-800 mb-4 uppercase tracking-wider">
          <span className="bg-rose-100 text-rose-900 px-3 py-1 rounded-full">
            Família, Cuidadores & Afeto
          </span>
          <span>·</span>
          <span>Guia Prático e Humanizado</span>
          <span>·</span>
          <span>Leitura: 5 min</span>
        </div>

        <h1 
          id="familia-titulo"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D253A] leading-tight mb-4"
        >
          Família e Cuidados: Amor, Organização e Saúde Mental
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          Cuidar de um ente querido idoso é uma das maiores demonstrações de amor, mas também exige técnica, paciência e autocuidado. Com organização e empatia, a convivência familiar se fortalece e a rotina se torna mais leve para todos.
        </p>
      </header>

      {/* H2: Organização de Medicamentos sem Estresse */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="medicamentos-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-rose-800">
          <Pill className="w-7 h-7" />
          <h2 id="medicamentos-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Como Organizar Medicamentos Sem Erros ou Esquecimentos
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          A confusão de remédios é uma das causas mais frequentes de internação geriátrica. Siga este passo a passo comprovado:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 font-bold flex items-center justify-center text-lg mb-3">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Caixa Organizadora Semanal
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Utilize porta-comprimidos com divisórias transparentes divididas por dia (Segunda a Domingo) e período (Manhã, Tarde, Noite). Abasteça sempre no mesmo dia da semana (ex: domingo após o almoço).
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-lg mb-3">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Tabela Visual na Geladeira
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Imprima uma folha com letras bem grandes (fonte 20+) contendo o nome do remédio, a cor da caixa e o horário exato. Pregue com ímã na porta da geladeira em local iluminado.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-lg mb-3">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Alarmes com Nomes Clariços
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              No celular do idoso ou da casa, configure alarmes sonoros com etiquetas personalizadas como <em>"Remédio da Pressão - Comprimido Branco"</em>, facilitando a identificação imediata.
            </p>
          </div>
        </div>
      </section>

      {/* Espaço AdSense no Meio do Conteúdo */}
      <AdSenseBanner format="in-article" customTitle="Organizadores Eletrônicos de Medicamentos com Alarme e Trava" />

      {/* H2: Estímulo Cognitivo e Jogos de Memória */}
      <section 
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs"
        aria-labelledby="memoria-titulo"
      >
        <div className="flex items-center gap-3 mb-2 text-purple-800">
          <Brain className="w-7 h-7" />
          <h2 id="memoria-titulo" className="text-2xl sm:text-3xl font-extrabold text-[#0D253A]">
            Estímulo Cognitivo: Atividades para Proteger a Memória
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 mb-6">
          O cérebro tem plasticidade em qualquer idade. Desafiar a mente diariamente cria novas conexões neurais e retarda declínios cognitivos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-700" />
              Atividades Diárias Divertidas
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Palavras Cruzadas & Caça-Palavras:</strong> Excelente para vocabulário e memória semântica.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Jogos de Cartas (Buraco, Trunfo ou Memória):</strong> Exigem planejamento tático e cálculo mental.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Recordar Histórias de Família:</strong> Folhear álbuns de fotos antigos e relembrar nomes e viagens estimula a memória autobiográfica.</span>
              </li>
            </ul>
          </div>

          {/* Mini jogo interativo de memória */}
          <div className="p-6 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-3">
            <h3 className="text-lg font-bold text-purple-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-purple-700" />
              Mini Desafio da Mente: Adivinhe a Palavra
            </h3>
            <p className="text-sm text-purple-800">
              Teste sua mente agora mesmo ou jogue com seu familiar:
            </p>

            <div className="space-y-2">
              {memoryWords.map((item) => (
                <div key={item.id} className="bg-white p-3 rounded-xl border border-purple-200 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-800">{item.tip}</span>
                  {revealedWord === item.id ? (
                    <span className="text-sm font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded">
                      {item.word}
                    </span>
                  ) : (
                    <button
                      onClick={() => setRevealedWord(item.id)}
                      className="text-xs font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 px-3 py-1.5 rounded transition-colors"
                    >
                      Ver Resposta
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2: Cuidando de Quem Cuida */}
      <section 
        className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-10 shadow-md border border-emerald-800"
        aria-labelledby="cuidador-titulo"
      >
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-emerald-200">
            <Heart className="w-4 h-4 text-rose-300" />
            <span>Saúde Emocional do Cuidador Familiar</span>
          </div>
          <h2 id="cuidador-titulo" className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Cuidando de Quem Cuida: Prevenção do Esgotamento
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
            A "Síndrome de Burnout do Cuidador" é real. Para cuidar bem de alguém, você precisa primeiro estar saudável física e emocionalmente:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-emerald-50">
            <div className="bg-white/10 p-4 rounded-xl">
              <span className="font-bold text-white block mb-1">Divida as Tarefas:</span>
              Não centralize tudo em si. Estabeleça um revezamento claro com irmãos e parentes para consultas e finais de semana.
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <span className="font-bold text-white block mb-1">Reserve Seu Momento:</span>
              Tenha pelo menos 1 hora do seu dia para atividades que você ama: leitura, caminhada ou descanso sem culpa.
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
