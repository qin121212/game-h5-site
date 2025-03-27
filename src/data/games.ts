import { Game } from '../types';

export const games: Game[] = [
  {
    id: 1,
    title: "Space Adventure",
    description: "Embark on an epic journey through the cosmos in this thrilling space exploration game.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072",
    plays: 1250,
    rating: 4.5,
    category: "Adventure"
  },
  {
    id: 2,
    title: "Dragon Quest",
    description: "Battle mythical creatures in this fantasy role-playing adventure.",
    imageUrl: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=1770",
    plays: 890,
    rating: 4.8,
    category: "RPG"
  },
  {
    id: 3,
    title: "Cyber Rush",
    description: "Race through neon-lit streets in this futuristic racing game.",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1770",
    plays: 2100,
    rating: 4.2,
    category: "Racing"
  }
];