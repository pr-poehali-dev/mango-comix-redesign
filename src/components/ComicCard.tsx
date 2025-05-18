
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Button } from "@/components/ui/button";

interface ComicCardProps {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  discount?: number;
}

const ComicCard = ({ 
  title, 
  author, 
  image, 
  price, 
  rating, 
  isNew = false, 
  isBestseller = false,
  discount 
}: ComicCardProps) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <Card className="comic-card overflow-hidden bg-white border border-gray-200">
      <div className="relative">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          />
          
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <Badge className="bg-secondary-orange text-white">Новинка</Badge>
            )}
            {isBestseller && (
              <Badge className="bg-primary-purple text-white">Хит продаж</Badge>
            )}
            {discount && (
              <Badge className="bg-destructive text-white">-{discount}%</Badge>
            )}
          </div>
          
          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
            <div className="flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Eye" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="ShoppingCart" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Heart" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {rating && (
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md flex items-center justify-center">
            <div className="flex items-center gap-0.5">
              <Icon name="Star" className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold">{rating}</span>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium line-clamp-1 text-sm">{title}</h3>
        <p className="text-gray-600 text-xs mt-1">{author}</p>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {discount ? (
              <>
                <span className="font-semibold">{discountedPrice}₽</span>
                <span className="text-gray-400 text-xs line-through">{price}₽</span>
              </>
            ) : (
              <span className="font-semibold">{price}₽</span>
            )}
          </div>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Icon name="ShoppingCart" className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComicCard;
