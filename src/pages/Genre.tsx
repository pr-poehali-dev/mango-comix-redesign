
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface GenreCardProps {
  title: string;
  icon: string;
  description: string;
  image: string;
  color: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ title, icon, description, image, color }) => (
  <Card className="overflow-hidden group cursor-pointer">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-80">56 комиксов</p>
      </div>
      <div 
        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${color}`}
      >
        <Icon name={icon} className="h-5 w-5 text-white" />
      </div>
    </div>
    <CardContent className="p-4">
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
    </CardContent>
  </Card>
);

const genreData: GenreCardProps[] = [
  {
    title: "Супергерои",
    icon: "Zap",
    description: "Истории о людях с суперспособностями, защищающих мир от зла и несправедливости.",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-red-500"
  },
  {
    title: "Фэнтези",
    icon: "Wand2",
    description: "Волшебные миры, магия, драконы и эпические приключения героев.",
    image: "https://images.unsplash.com/photo-1578353022142-09264fd64295?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-purple-500"
  },
  {
    title: "Научная фантастика",
    icon: "Rocket",
    description: "Истории о будущем, космосе, технологиях и инопланетных цивилизациях.",
    image: "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-blue-500"
  },
  {
    title: "Детектив",
    icon: "Search",
    description: "Расследования преступлений, загадки и тайны, которые предстоит разгадать.",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd6d686c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-amber-500"
  },
  {
    title: "Ужасы",
    icon: "Skull",
    description: "Истории о сверхъестественном, монстрах и человеческих страхах.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-slate-800"
  },
  {
    title: "Приключения",
    icon: "Map",
    description: "Захватывающие истории о путешествиях и опасных экспедициях.",
    image: "https://images.unsplash.com/photo-1541410702738-f87a5449e456?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-green-500"
  },
  {
    title: "Комедия",
    icon: "Laugh",
    description: "Веселые истории с юмором и забавными ситуациями.",
    image: "https://images.unsplash.com/photo-1543584756-37d1c18e1479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-yellow-500"
  },
  {
    title: "Драма",
    icon: "Theater",
    description: "Эмоциональные истории о человеческих отношениях и внутренних конфликтах.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-indigo-500"
  },
  {
    title: "Исторические",
    icon: "Clock",
    description: "Истории, основанные на реальных исторических событиях и эпохах.",
    image: "https://images.unsplash.com/photo-1551009175-15bdf9dcf85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-brown-500"
  },
  {
    title: "Романтика",
    icon: "Heart",
    description: "Истории о любви, отношениях и чувствах между людьми.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-pink-500"
  },
  {
    title: "Боевик",
    icon: "Sword",
    description: "Динамичные истории с множеством сражений и физического действия.",
    image: "https://images.unsplash.com/photo-1603208635400-5604a7723094?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-orange-500"
  },
  {
    title: "Манга",
    icon: "FileType",
    description: "Японские комиксы с характерным стилем рисования и повествования.",
    image: "https://images.unsplash.com/photo-1589982500106-438766cd78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-cyan-500"
  }
];

const Genre = () => {
  return (
    <PageLayout>
      <div className="container py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Жанры комиксов</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Исследуйте разнообразные миры и истории через множество жанров комиксов. От супергероев до фэнтези — каждый найдет что-то по вкусу!</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {genreData.map((genre, index) => (
            <GenreCard 
              key={index}
              title={genre.title}
              icon={genre.icon}
              description={genre.description}
              image={genre.image}
              color={genre.color}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Genre;
