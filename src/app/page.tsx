"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Heart, Sun, Moon, Star, Zap } from "lucide-react";

const ebookContent = [
  {
    chapter: "Introdução",
    title: "O Poder da Mente Positiva",
    content: `Bem-vindo a uma jornada transformadora! Este e-book foi criado para ajudá-lo a compreender e dominar a arte de mentalizar energias positivas.

A mentalização é uma prática milenar que combina intenção, foco mental e energia emocional para criar mudanças reais em sua vida. Quando você aprende a direcionar seus pensamentos de forma consciente, abre portas para um universo de possibilidades.

Neste guia, você descobrirá técnicas práticas, exercícios diários e insights profundos que transformarão sua relação com a energia que você emite e recebe do universo.`,
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    chapter: "Capítulo 1",
    title: "Entendendo as Energias",
    content: `Tudo no universo é energia vibrando em diferentes frequências. Seus pensamentos, emoções e intenções também são formas de energia que influenciam sua realidade.

**Energia Positiva:**
• Eleva sua vibração
• Atrai experiências harmoniosas
• Fortalece seu sistema imunológico
• Melhora relacionamentos
• Aumenta criatividade e produtividade

**Como Funciona:**
A Lei da Atração não é mágica - é física quântica. Quando você mantém pensamentos positivos consistentes, seu cérebro libera neurotransmissores que melhoram seu humor, sua saúde e sua percepção da realidade.`,
    icon: Sparkles,
    color: "from-cyan-500 to-blue-500"
  },
  {
    chapter: "Capítulo 2",
    title: "Técnicas de Mentalização",
    content: `**1. Visualização Criativa**
Feche os olhos e imagine com detalhes vívidos o que você deseja manifestar. Use todos os sentidos: veja cores, ouça sons, sinta texturas.

**2. Afirmações Positivas**
Repita diariamente frases no presente:
• "Eu sou merecedor de abundância"
• "Energia positiva flui através de mim"
• "Eu atraio experiências maravilhosas"

**3. Meditação Energética**
Dedique 10-15 minutos diários para silenciar a mente e conectar-se com sua energia interior.

**4. Gratidão Ativa**
Liste 3 coisas pelas quais você é grato todos os dias. A gratidão é o ímã mais poderoso para energias positivas.`,
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    chapter: "Capítulo 3",
    title: "Limpeza Energética",
    content: `Antes de mentalizar energias positivas, é essencial limpar as negativas que acumulamos.

**Técnicas de Limpeza:**

**Banho Energético:**
Visualize uma luz dourada descendo do topo da sua cabeça, lavando todas as energias densas e negativas.

**Respiração Consciente:**
Inspire profundamente pelo nariz (4 segundos), segure (4 segundos), expire pela boca (6 segundos). Repita 7 vezes.

**Desapego Mental:**
Identifique pensamentos negativos recorrentes e conscientemente os libere. Diga: "Eu libero o que não me serve mais".

**Ambiente Físico:**
Limpe e organize seu espaço. Ambientes bagunçados retêm energia estagnada.`,
    icon: Moon,
    color: "from-indigo-500 to-purple-500"
  },
  {
    chapter: "Capítulo 4",
    title: "Práticas Diárias",
    content: `**Rotina Matinal (10 minutos):**
1. Ao acordar, respire profundamente 3 vezes
2. Diga: "Hoje será um dia maravilhoso"
3. Visualize seu dia fluindo perfeitamente
4. Liste 3 intenções positivas para o dia

**Durante o Dia:**
• Observe seus pensamentos sem julgamento
• Redirecione pensamentos negativos para positivos
• Sorria mais - isso muda sua química cerebral
• Pratique gentileza aleatória

**Rotina Noturna (10 minutos):**
1. Revise seu dia com gratidão
2. Perdoe a si mesmo por erros
3. Visualize energia dourada envolvendo você
4. Durma com pensamentos de paz e amor`,
    icon: Sun,
    color: "from-orange-400 to-red-500"
  },
  {
    chapter: "Capítulo 5",
    title: "Mantendo a Vibração Alta",
    content: `**Alimentos Energéticos:**
Frutas frescas, vegetais verdes, água pura, chás naturais - tudo isso eleva sua vibração física.

**Música e Sons:**
Frequências específicas (432Hz, 528Hz) harmonizam suas células. Ouça música que faz seu coração cantar.

**Natureza:**
Passe tempo ao ar livre. A terra tem uma frequência natural que equilibra sua energia.

**Relacionamentos:**
Cerque-se de pessoas que elevam você. Energia é contagiosa - escolha bem suas companhias.

**Movimento:**
Exercícios físicos liberam endorfinas e movimentam energia estagnada. Dance, caminhe, pratique yoga.`,
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    chapter: "Conclusão",
    title: "Sua Jornada Começa Agora",
    content: `Você agora possui as ferramentas para transformar sua vida através da mentalização de energias positivas. Lembre-se:

**Princípios Fundamentais:**
• Consistência é mais importante que perfeição
• Pequenas mudanças diárias criam grandes transformações
• Você é o criador da sua realidade
• A energia segue a atenção
• O universo conspira a seu favor

**Próximos Passos:**
1. Escolha UMA técnica para praticar esta semana
2. Crie um diário de manifestações
3. Seja paciente e gentil consigo mesmo
4. Celebre pequenas vitórias
5. Compartilhe energia positiva com outros

Você é um ser de luz infinita. Sua capacidade de mentalizar e manifestar é ilimitada. Confie no processo, mantenha a fé e observe a magia acontecer.

✨ Que sua jornada seja repleta de luz, amor e abundância! ✨`,
    icon: Star,
    color: "from-yellow-400 to-amber-500"
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextPage = () => {
    if (currentPage < ebookContent.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!mounted) {
    return null;
  }

  const currentContent = ebookContent[currentPage];
  const IconComponent = currentContent.icon;

  if (!isReading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
            <BookOpen className="w-24 h-24 mx-auto text-yellow-300 relative z-10 mb-6" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
            Mentalizar Energias Positivas
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Um guia completo para transformar sua vida através do poder da mente
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-4">
            <div className="flex items-center justify-center gap-3 text-purple-200">
              <Sparkles className="w-5 h-5" />
              <span>7 Capítulos Transformadores</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-purple-200">
              <Heart className="w-5 h-5" />
              <span>Técnicas Práticas e Exercícios</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-purple-200">
              <Star className="w-5 h-5" />
              <span>Mudança Real e Duradoura</span>
            </div>
          </div>

          <button
            onClick={() => setIsReading(true)}
            className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50"
          >
            Começar Leitura
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsReading(false)}
            className="text-purple-300 hover:text-white transition-colors mb-4 flex items-center gap-2 mx-auto"
          >
            <BookOpen className="w-5 h-5" />
            <span>Voltar à Capa</span>
          </button>
          <div className="flex items-center justify-center gap-2 text-purple-300 text-sm">
            <span>Página {currentPage + 1} de {ebookContent.length}</span>
          </div>
        </div>

        {/* E-book Page */}
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          {/* Chapter Header */}
          <div className={`bg-gradient-to-r ${currentContent.color} p-6 md:p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm opacity-90 font-medium">{currentContent.chapter}</p>
                <h2 className="text-2xl md:text-3xl font-bold">{currentContent.title}</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <div className="prose prose-lg max-w-none">
              {currentContent.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('•')) {
                  return (
                    <li key={index} className="text-gray-700 ml-4 mb-2">
                      {paragraph.substring(1).trim()}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentPage === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-lg'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="flex gap-2">
                {ebookContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPage
                        ? 'bg-purple-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === ebookContent.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentPage === ebookContent.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-lg'
                }`}
              >
                <span className="hidden sm:inline">Próxima</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-purple-300 text-sm">
          <p>✨ Leia com calma e pratique os exercícios ✨</p>
        </div>
      </div>
    </div>
  );
}
