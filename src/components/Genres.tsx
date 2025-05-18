
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Genres = () => {
  const genres = [
    {
      id: 1,
      name: "Фэнтези",
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-purple-900/70 to-purple-500/70"
    },
    {
      id: 2,
      name: "Научная фантастика",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-blue-900/70 to-blue-500/70"
    },
    {
      id: 3,
      name: "Боевик",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-red-900/70 to-red-500/70"
    },
    {
      id: 4,
      name: "Романтика",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-pink-900/70 to-pink-500/70"
    },
    {
      id: 5,
      name: "Ужасы",
      image: "https://images.unsplash.com/photo-1626716493143-3850a97f4a43?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-gray-900/70 to-gray-700/70"
    },
    {
      id: 6,
      name: "Приключения",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=400&h=250&auto=format&fit=crop",
      color: "from-green-900/70 to-green-500/70"
    }
  ];

  return (
    <section className="py-12 container">
      <h2 className="text-2xl md:text-3xl font-bold font-montserrat section-title mb-8">Популярные жанры</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <Card key={genre.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative">
              <AspectRatio ratio={16/10}>
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="object-cover w-full h-full"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${genre.color}`} />
              </AspectRatio>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-center text-sm md:text-base">{genre.name}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Genres;
