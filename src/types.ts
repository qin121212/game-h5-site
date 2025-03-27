export interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  plays: number;
  rating: number;
  category: string;
}

export interface Comment {
  id: number;
  gameId: number;
  username: string;
  content: string;
  rating: number;
  createdAt: string;
}