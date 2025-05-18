
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <PageLayout>
      <div className="container py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О нас</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Mango Comix — ваш путеводитель в захватывающий мир комиксов и графических новелл. Узнайте больше о нашей истории, миссии и команде энтузиастов.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша история</h2>
            <p className="text-gray-600 mb-4">
              Mango Comix был основан в 2015 году группой энтузиастов комиксов, которые хотели создать место, где любители графических историй могли бы находить качественный контент.
            </p>
            <p className="text-gray-600 mb-4">
              За годы существования мы выросли из небольшого сообщества в один из крупнейших онлайн-магазинов комиксов в России, предлагающий широкий выбор изданий для читателей всех возрастов и предпочтений.
            </p>
            <p className="text-gray-600">
              Сегодня Mango Comix — это не только магазин, но и культурный хаб для любителей комиксов, место встречи авторов, художников и читателей.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Офис Mango Comix" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="w-8 h-8 text-primary-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Страсть к искусству</h3>
                <p className="text-gray-600 text-center">Мы верим, что комиксы — это уникальная форма искусства, сочетающая литературу и визуальное повествование.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Сообщество</h3>
                <p className="text-gray-600 text-center">Мы стремимся создать дружное сообщество, где каждый может поделиться своей любовью к комиксам.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Icon name="Star" className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Качество</h3>
                <p className="text-gray-600 text-center">Мы отбираем лучшие комиксы со всего мира, уделяя особое внимание качеству историй и иллюстраций.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Наша команда</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">За Mango Comix стоит команда преданных своему делу профессионалов и фанатов комиксов</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Артём К.", role: "Основатель", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Елена С.", role: "Арт-директор", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Максим Д.", role: "Редактор", image: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Анна П.", role: "Куратор", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-6">У вас есть вопросы или предложения? Мы всегда рады пообщаться с нашими читателями!</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:info@mangocomix.ru" className="flex items-center gap-2 text-primary-purple hover:underline">
                <Icon name="Mail" className="w-5 h-5" />
                <span>info@mangocomix.ru</span>
              </a>
              <a href="tel:+78001234567" className="flex items-center gap-2 text-primary-purple hover:underline">
                <Icon name="Phone" className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
