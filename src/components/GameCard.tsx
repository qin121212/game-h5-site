import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-72 h-96 group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{game.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>{game.rating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-gray-600">{game.plays} plays</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}