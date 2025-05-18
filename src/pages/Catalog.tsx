
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ComicCard = () => (
  <Card className="overflow-hidden">
    <div className="relative aspect-[2/3] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
        alt="Комикс" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-15%</div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg mb-2 line-clamp-1">Тайны космоса</h3>
      <div className="flex justify-between items-baseline">
        <div className="text-sm text-gray-600">Том 2</div>
        <div className="font-bold text-primary-purple">450 ₽</div>
      </div>
    </CardContent>
  </Card>
);

const Catalog = () => {
  return (
    <PageLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Каталог комиксов</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Фильтры */}
          <div className="w-full md:w-1/4 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Фильтры</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Поиск</label>
                    <Input placeholder="Название комикса..." />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Жанр</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите жанр" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fantasy">Фэнтези</SelectItem>
                        <SelectItem value="sci-fi">Научная фантастика</SelectItem>
                        <SelectItem value="superhero">Супергерои</SelectItem>
                        <SelectItem value="adventure">Приключения</SelectItem>
                        <SelectItem value="drama">Драма</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Издатель</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите издателя" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marvel">Marvel</SelectItem>
                        <SelectItem value="dc">DC Comics</SelectItem>
                        <SelectItem value="image">Image Comics</SelectItem>
                        <SelectItem value="bubble">Bubble</SelectItem>
                        <SelectItem value="other">Другие</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Цена</label>
                    <div className="flex items-center gap-2">
                      <Input placeholder="от" type="number" />
                      <span>—</span>
                      <Input placeholder="до" type="number" />
                    </div>
                  </div>
                  
                  <Button className="w-full">Применить</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Список комиксов */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between mb-6">
              <div className="text-lg">Найдено: 56 комиксов</div>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">Сначала дешевле</SelectItem>
                  <SelectItem value="price-high">Сначала дороже</SelectItem>
                  <SelectItem value="new">Сначала новые</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <ComicCard key={index} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="mx-1">...</Button>
              <Button variant="outline" className="mx-1">8</Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Catalog;
