import React from 'react';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { games } from './data/games';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Welcome to GameHub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and play amazing games from our carefully curated collection
          </p>
        </section>

        {/* Featured Games */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Adventure', 'RPG', 'Racing', 'Strategy'].map(category => (
              <div
                key={category}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-lg">{category}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;