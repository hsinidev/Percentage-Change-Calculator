import React, { useState } from 'react';
import ThemeLayout from './components/ThemeLayout';
import PercentageChangeCalculator from './components/PercentageChangeCalculator';
import { SeoArticle } from './utils/SeoArticle';

const App: React.FC = () => {
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);

  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <PercentageChangeCalculator />
        
        <div className="mt-12">
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isArticleExpanded ? 'max-h-[10000px]' : 'max-h-40 relative'}`}>
            <SeoArticle />
            {!isArticleExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
            )}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setIsArticleExpanded(!isArticleExpanded)}
              className="bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-cyan-400 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isArticleExpanded ? 'Show Less' : 'Read Full Guide'}
            </button>
          </div>
        </div>

      </div>
    </ThemeLayout>
  );
};

export default App;