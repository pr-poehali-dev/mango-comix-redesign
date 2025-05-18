
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NewComicCard = () => (
  <Card className="overflow-hidden group">
    <div className="relative aspect-[2/3] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
        alt="Новый комикс" 
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <Badge className="absolute top-2 right-2 bg-blue-500">Новинка</Badge>
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold text-lg mb-1 line-clamp-1">Тайная лаборатория</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">Захватывающее приключение группы ученых в секретной лаборатории.</p>
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium">Дата выхода: <span className="text-primary-purple">15.05.2025</span></span>
        <span className="font-bold text-primary-purple">580 ₽</span>
      </div>
    </CardContent>
  </Card>
);

const New = () => {
  return (
    <PageLayout>
      <div className="container py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Новинки комиксов</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Свежие поступления и самые ожидаемые релизы комиксов. Будьте в курсе последних новинок!</p>
        </div>
        
        <Tabs defaultValue="this-week" className="mb-10">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="this-week">Новинки недели</TabsTrigger>
              <TabsTrigger value="this-month">За месяц</TabsTrigger>
              <TabsTrigger value="coming-soon">Скоро в продаже</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="this-week">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <NewComicCard key={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="this-month">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <NewComicCard key={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="coming-soon">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <NewComicCard key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на обновления</h2>
            <p className="text-gray-600 mb-6">Получайте уведомления о новых поступлениях ваших любимых комиксов прямо на электронную почту</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default New;
