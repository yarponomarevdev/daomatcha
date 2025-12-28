import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/15 transition-all duration-300 hover:shadow-matcha-soft"
    >
      <div className="aspect-square bg-white/5 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-matcha-light/20 to-matcha-dark/20 flex items-center justify-center text-white/40 text-sm p-4 text-center">
          {recipe.title}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-base">{recipe.title}</h3>
        <p className="text-white/70 text-sm">{recipe.subtitle}</p>
      </div>
    </div>
  );
};
