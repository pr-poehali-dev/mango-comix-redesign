
import React from 'react';
import ComicCard from './ComicCard';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const PopularComics = () => {
  const comics = [
    {
      id: 1,
      title: "Тёмный Рыцарь: Возрождение",
      author: "Фрэнк Миллер",
      image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=400&h=600&auto=format&fit=crop",
      price: 990,
      rating: 4.8,
      isBestseller: true
    },
    {
      id: 2,
      title: "Хранители",
      author: "Алан Мур",
      image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&h=600&auto=format&fit=crop",
      price: 1250,
      rating: 4.9,
      isBestseller: true
    },
    {
      id: 3,
      title: "Сага",
      author: "Брайан К. Вон",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&h=600&auto=format&fit=crop",
      price: 850,
      rating: 4.7,
      discount: 15
    },
    {
      id: 4,
      title: "Песочный человек",
      author: "Нил Гейман",
      image: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?q=80&w=400&h=600&auto=format&fit=crop",
      price: 1100,
      rating: 4.6,
      isBestseller: true
    }
  ];

  return (
    <section className="py-12 container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat section-title">Популярные комиксы</h2>
        <Button variant="ghost" className="hidden md:flex items-center gap-1 text-primary-purple hover:text-primary-dark">
          Смотреть все
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {comics.map(comic => (
          <ComicCard key={comic.id} {...comic} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center md:hidden">
        <Button variant="outline" className="text-primary-purple border-primary-purple hover:bg-primary-purple/10">
          Смотреть все
        </Button>
      </div>
    </section>
  );
};

export default PopularComics;
