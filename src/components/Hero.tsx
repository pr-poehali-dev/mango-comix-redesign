
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const heroItems = [
    {
      id: 1,
      title: "Человек-Паук: Новое Начало",
      description: "Новая эра для любимого героя. Захватывающие приключения Питера Паркера в современном мире.",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&h=600&auto=format&fit=crop",
      genre: "Супергерои",
      badge: "ХИТ ПРОДАЖ"
    },
    {
      id: 2,
      title: "Тайны Востока",
      description: "Погрузитесь в мистический мир древних легенд востока и магических артефактов.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1200&h=600&auto=format&fit=crop",
      genre: "Фэнтези",
      badge: "НОВИНКА"
    },
    {
      id: 3,
      title: "Киберпанк 2099",
      description: "Мир будущего, где технологии правят миром, а человечество борется за свое место.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&h=600&auto=format&fit=crop",
      genre: "Научная фантастика",
      badge: "ЭКСКЛЮЗИВ"
    }
  ];

  return (
    <section className="py-6 md:py-12 container">
      <Carousel className="w-full">
        <CarouselContent>
          {heroItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <AspectRatio ratio={21/9} className="bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />
                </AspectRatio>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
                  <div className="max-w-md space-y-4">
                    {item.badge && (
                      <Badge className="bg-secondary-orange text-white">{item.badge}</Badge>
                    )}
                    <h1 className="text-2xl md:text-4xl font-bold font-montserrat">{item.title}</h1>
                    <p className="text-sm md:text-base opacity-90">{item.description}</p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button variant="default" className="bg-primary-purple hover:bg-primary-dark">
                        Читать
                      </Button>
                      <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
