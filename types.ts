export interface FlashcardType {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface CapsuleType {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  readTime: string;
  date: string;
  imageUrl: string;
}
