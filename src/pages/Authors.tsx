
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface AuthorCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  comicsCount: number;
  popular: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, role, image, bio, comicsCount, popular }) => {
  const initials = name.split(' ').map(part => part[0]).join('');
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <Avatar className="w-24 h-24 border">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <Badge variant="outline" className="mb-3">{role}</Badge>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{bio}</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start text-sm">
              <span className="text-gray-600">Комиксов: <strong>{comicsCount}</strong></span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-gray-600">Популярная работа: <strong className="text-primary-purple">{popular}</strong></span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const authorsData: AuthorCardProps[] = [
  {
    name: "Алексей Петров",
    role: "Автор",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Один из самых популярных российских авторов комиксов. Известен своими работами в жанрах фэнтези и научной фантастики. Начал карьеру в 2010 году и с тех пор создал более 20 известных серий.",
    comicsCount: 28,
    popular: "Параллельные миры"
  },
  {
    name: "Мария Иванова",
    role: "Художник",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Талантливая художница с неповторимым стилем. Специализируется на детализированных пейзажах и выразительных персонажах. Ее работы отличаются яркими цветами и динамичными сценами.",
    comicsCount: 15,
    popular: "Тайны старого города"
  },
  {
    name: "Дмитрий Соколов",
    role: "Автор и Художник",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Универсальный творец, создающий историю и иллюстрации для своих комиксов. Его работы отличаются глубокими, философскими сюжетами и минималистичным стилем рисунка. Лауреат нескольких премий в области комиксов.",
    comicsCount: 12,
    popular: "Космическое путешествие"
  },
  {
    name: "Екатерина Смирнова",
    role: "Автор",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Известная сценаристка, работающая в жанрах драмы и триллера. Ее истории отличаются глубокой проработкой персонажей и неожиданными сюжетными поворотами. Часто сотрудничает с разными художниками.",
    comicsCount: 20,
    popular: "Темные тайны"
  },
  {
    name: "Игорь Волков",
    role: "Художник",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Художник с академическим образованием, привносящий в комиксы элементы классической живописи. Его работы отличаются реалистичностью и вниманием к деталям. Специализируется на исторических комиксах.",
    comicsCount: 8,
    popular: "Битва империй"
  },
  {
    name: "Анна Козлова",
    role: "Колорист",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    bio: "Талантливый колорист с уникальным чувством цвета. Ее работы отличаются гармоничными цветовыми схемами и умением передать настроение через цвет. Сотрудничает с множеством известных художников.",
    comicsCount: 25,
    popular: "Волшебный лес"
  }
];

const Authors = () => {
  return (
    <PageLayout>
      <div className="container py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Авторы и художники</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Познакомьтесь с талантливыми творцами, стоящими за вашими любимыми комиксами. Авторы историй и художники, вдохнувшие жизнь в персонажей.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="w-full md:w-auto">
            <Input placeholder="Поиск авторов..." className="max-w-sm" />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Button variant="outline" className="text-sm">Все</Button>
            <Button variant="outline" className="text-sm">Авторы</Button>
            <Button variant="outline" className="text-sm">Художники</Button>
            <Button variant="outline" className="text-sm">Колористы</Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {authorsData.map((author, index) => (
            <AuthorCard 
              key={index}
              name={author.name}
              role={author.role}
              image={author.image}
              bio={author.bio}
              comicsCount={author.comicsCount}
              popular={author.popular}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Authors;
