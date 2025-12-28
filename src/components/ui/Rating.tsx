import { useState } from 'react';

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
  name: string;
}

export const Rating = ({ value, onChange, name }: RatingProps) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div className="flex flex-row-reverse justify-end gap-1">
      {[5, 4, 3, 2, 1].map((star) => (
        <label
          key={star}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          className="cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            className="hidden"
          />
          <span
            className={`text-4xl transition-all ${
              star <= (hoveredStar || value)
                ? 'text-yellow-400 scale-110'
                : 'text-white/30'
            }`}
          >
            ★
          </span>
        </label>
      ))}
    </div>
  );
};
