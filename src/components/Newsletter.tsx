
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary-purple text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat">Подпишитесь на новости</h2>
          <p className="mt-4 text-white/80 mb-8">
            Получайте уведомления о новых поступлениях, скидках и эксклюзивных предложениях!
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              required
            />
            <Button type="submit" className="bg-white text-primary-purple hover:bg-white/90">
              Подписаться
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
