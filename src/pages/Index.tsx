
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularComics from '@/components/PopularComics';
import NewComics from '@/components/NewComics';
import Genres from '@/components/Genres';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PopularComics />
        <NewComics />
        <Genres />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
