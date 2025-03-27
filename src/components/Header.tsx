import React from 'react';
import { TowerControl as GameController } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GameController className="w-8 h-8" />
            <h1 className="text-2xl font-bold">GameHub</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-indigo-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-indigo-200 transition-colors">New Games</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}