
import ComicCard from './ComicCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const NewComics = () => {
  const newComics = [
    {
      id: 1,
      title: "Мастера меча онлайн",
      author: "Реки Кавахара",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=400&h=600&auto=format&fit=crop",
      price: 780,
      rating: 4.5,
      isNew: true
    },
    {
      id: 2,
      title: "Атака титанов",
      author: "Хадзимэ Исаяма",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=400&h=600&auto=format&fit=crop",
      price: 850,
      rating: 4.8,
      isNew: true
    },
    {
      id: 3,
      title: "Токийский гуль",
      author: "Суи Исида",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=400&h=600&auto=format&fit=crop",
      price: 690,
      rating: 4.6,
      isNew: true,
      discount: 10
    },
    {
      id: 4,
      title: "Моя геройская академия",
      author: "Кохэй Хорикоси",
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&h=600&auto=format&fit=crop",
      price: 750,
      rating: 4.7,
      isNew: true
    }
  ];

  const preorderComics = [
    {
      id: 5,
      title: "Клинок, рассекающий демонов",
      author: "Коёхару Готогэ",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&h=600&auto=format&fit=crop",
      price: 890,
      isNew: true
    },
    {
      id: 6,
      title: "Человек-бензопила",
      author: "Тацуки Фудзимото",
      image: "https://images.unsplash.com/photo-1560942485-b7a69929ffd7?q=80&w=400&h=600&auto=format&fit=crop",
      price: 820,
      isNew: true
    },
    {
      id: 7,
      title: "Магическая битва",
      author: "Гэгэ Акутами",
      image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=400&h=600&auto=format&fit=crop",
      price: 950,
      isNew: true,
      discount: 5
    },
    {
      id: 8,
      title: "Доктор Стоун",
      author: "Риитиро Инагаки",
      image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=400&h=600&auto=format&fit=crop",
      price: 790,
      isNew: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat section-title">Новинки</h2>
          <Button variant="ghost" className="hidden md:flex items-center gap-1 text-primary-purple hover:text-primary-dark">
            Смотреть все
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
        
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="new" className="data-[state=active]:bg-primary-purple data-[state=active]:text-white">В продаже</TabsTrigger>
            <TabsTrigger value="preorder" className="data-[state=active]:bg-primary-purple data-[state=active]:text-white">Предзаказ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newComics.map(comic => (
                <ComicCard key={comic.id} {...comic} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="preorder" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {preorderComics.map(comic => (
                <ComicCard key={comic.id} {...comic} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="text-primary-purple border-primary-purple hover:bg-primary-purple/10">
            Смотреть все
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewComics;
