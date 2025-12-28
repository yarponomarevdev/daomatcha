import { useState } from 'react';
import { Page } from '../types';
import { recipes } from '../data/recipes';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { PlayIcon } from '../components/icons/PlayIcon';
import { ShoppingCartIcon } from '../components/icons/ShoppingCartIcon';

interface RecipeDetailPageProps {
  recipeId: string;
  onNavigate: (page: Page) => void;
}

export const RecipeDetailPage = ({ recipeId, onNavigate }: RecipeDetailPageProps) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker">
        <PageHeader
          title="Рецепт не найден"
          onBack={() => onNavigate('recipes')}
        />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white">Рецепт не найден</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
        <PageHeader
          title={recipe.title}
          onBack={() => onNavigate('recipes')}
        />

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {/* Recipe Image */}
          <div className="w-full aspect-square bg-white/5 rounded-2xl mb-6 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-matcha-light/20 to-matcha-dark/20 rounded-2xl flex items-center justify-center text-white/40 p-8 text-center">
              {recipe.title}<br/>{recipe.subtitle}
            </div>
          </div>

          {/* Recipe Content */}
          <div className="space-y-6">
            {/* Ingredients */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Ингредиенты</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-matcha-light mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Приготовление</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-matcha-light rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            {recipe.tips && recipe.tips.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Советы</h3>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">💡</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-shrink-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] flex gap-3">
          <Button 
            onClick={() => setShowVideoModal(true)} 
            variant="ghost" 
            className="flex-1"
          >
            <PlayIcon />
            Видео
          </Button>
          <Button 
            onClick={() => onNavigate('shop')} 
            variant="primary" 
            className="flex-1"
          >
            <ShoppingCartIcon />
            В магазин
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          onClick={() => setShowVideoModal(false)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
        >
          <div className="bg-gradient-to-b from-matcha-light to-matcha-dark rounded-3xl p-8 max-w-sm text-center">
            <div className="text-6xl mb-4">▶️</div>
            <h3 className="text-white text-xl font-bold mb-2">Видео скоро появится</h3>
            <p className="text-white/70 text-sm">Мы готовим для вас пошаговые видео-рецепты</p>
          </div>
        </div>
      )}
    </>
  );
};
