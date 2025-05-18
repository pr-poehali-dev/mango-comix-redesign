
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-1 text-2xl font-bold font-montserrat">
              <span className="text-primary-purple">Mango</span>
              <span className="text-secondary-orange">Comix</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Ваш любимый магазин комиксов, манги и графических новелл с огромным выбором и быстрой доставкой.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Telegram" fallback="Send" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/delivery" className="hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/payment" className="hover:text-white transition-colors">Оплата</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Вопросы и ответы</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Каталог</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/catalog/comics" className="hover:text-white transition-colors">Комиксы</Link></li>
              <li><Link to="/catalog/manga" className="hover:text-white transition-colors">Манга</Link></li>
              <li><Link to="/catalog/graphic-novels" className="hover:text-white transition-colors">Графические романы</Link></li>
              <li><Link to="/catalog/merch" className="hover:text-white transition-colors">Мерч</Link></li>
              <li><Link to="/catalog/sale" className="hover:text-white transition-colors">Распродажа</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-5 w-5 text-primary-purple" />
                <span>Москва, ул. Комиксов, д. 42</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5 text-primary-purple" />
                <a href="tel:+78001234567" className="hover:text-white transition-colors">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-5 w-5 text-primary-purple" />
                <a href="mailto:info@mangocomix.ru" className="hover:text-white transition-colors">info@mangocomix.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-primary-purple" />
                <span>Пн-Вс: 10:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Mango Comix. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
