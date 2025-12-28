import { Page } from '../types';
import { recipes } from '../data/recipes';
import { PageHeader } from '../components/PageHeader';
import { RecipeCard } from '../components/RecipeCard';

interface RecipesPageProps {
  onNavigate: (page: Page, data?: any) => void;
}

export const RecipesPage = ({ onNavigate }: RecipesPageProps) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Напитки из матча"
        onBack={() => onNavigate('main-menu')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Intro */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="text-center mb-6 italic text-white/90 text-sm leading-relaxed">
            <p>Городской шум.<br/>Над чашей матча растёт<br/>остров тишины.</p>
            <span className="text-white/60 text-xs mt-2 block">— DAO MATCHA</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Матча — чистая энергия и фокус без нервяка. Когда город ускоряется, тебе нужен спокойный драйв.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Энергия 4–6 часов</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Фокус</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Спокойствие</span>
          </div>
          <p className="text-white/70 text-sm text-center italic">
            Остановись. Сделай глоток. Идти за флажки или за всеми — теперь ты волен выбирать.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-2 gap-4">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onNavigate('recipe-detail', { recipeId: recipe.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
