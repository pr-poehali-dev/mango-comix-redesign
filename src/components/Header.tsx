
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-10">
                <Link to="/" className="text-lg font-medium hover:text-primary-purple transition-colors">Главная</Link>
                <Link to="/catalog" className="text-lg font-medium hover:text-primary-purple transition-colors">Каталог</Link>
                <Link to="/new" className="text-lg font-medium hover:text-primary-purple transition-colors">Новинки</Link>
                <Link to="/genre" className="text-lg font-medium hover:text-primary-purple transition-colors">Жанры</Link>
                <Link to="/authors" className="text-lg font-medium hover:text-primary-purple transition-colors">Авторы</Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary-purple transition-colors">О нас</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xl font-bold font-montserrat text-primary-purple">Mango</span>
            <span className="text-xl font-bold font-montserrat text-secondary-orange">Comix</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 ml-8">
            <Link to="/" className="text-sm font-medium hover:text-primary-purple transition-colors">Главная</Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary-purple transition-colors">Каталог</Link>
            <Link to="/new" className="text-sm font-medium hover:text-primary-purple transition-colors">Новинки</Link>
            <Link to="/genre" className="text-sm font-medium hover:text-primary-purple transition-colors">Жанры</Link>
            <Link to="/authors" className="text-sm font-medium hover:text-primary-purple transition-colors">Авторы</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary-purple transition-colors">О нас</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative w-full max-w-sm">
            <Input 
              type="search" 
              placeholder="Поиск комиксов..." 
              className="pr-8"
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0">
              <Icon name="Search" className="h-4 w-4" />
              <span className="sr-only">Поиск</span>
            </Button>
          </form>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Search" className="h-6 w-6" />
            <span className="sr-only">Поиск</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" className="h-6 w-6" />
            <span className="sr-only">Корзина</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Icon name="User" className="h-6 w-6" />
            <span className="sr-only">Профиль</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
