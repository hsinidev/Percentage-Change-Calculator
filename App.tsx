
import React, { useState } from 'react';
import ThemeLayout from './components/ThemeLayout';
import PercentageChangeCalculator from './components/PercentageChangeCalculator';
import { SeoArticle } from './utils/SeoArticle';

const App: React.FC = () => {
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);

  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <PercentageChangeCalculator />
        
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className={`transition-all duration-700 ease-in-out px-6 md:px-10 py-8 ${
                isArticleExpanded ? 'max-h-[15000px]' : 'max-h-[140px] overflow-hidden'
              }`}
            >
              <SeoArticle />
            </div>
            
            {!isArticleExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent pointer-events-none flex flex-col justify-end items-center pb-4">
              </div>
            )}
            
             <div className={`${isArticleExpanded ? 'pb-8 pt-4' : 'absolute bottom-6 left-0 right-0'} flex justify-center z-10`}>
                <button
                  onClick={() => setIsArticleExpanded(!isArticleExpanded)}
                  className="group relative inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <span>{isArticleExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${isArticleExpanded ? 'rotate-180' : 'bounce-small'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <style>{`
                    @keyframes bounce-small {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(3px); }
                    }
                    .bounce-small {
                      animation: bounce-small 2s infinite;
                    }
                  `}</style>
                </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default App;
