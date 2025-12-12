import { Instagram, Send, Quote, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { diagnosticTestimonials } from "@/data/diagnosticTestimonials";

const HeroSection = () => {
  const scrollToDiagnostic = () => {
    const element = document.getElementById("diagnostic");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Если секции диагностики нет, ведем на контакты
      const contactElement = document.getElementById("contact");
      contactElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative rounded-[2.5rem] overflow-hidden bg-muted mb-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Video */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in w-full max-w-3xl md:max-w-full mx-auto md:mx-0">
          <video
            src="/videos/antonsverchkov-720-opt.mp4"
            poster="/images/antonsverchkov-poster.webp"
            controls
            playsInline
            autoPlay={false}
            preload="metadata"
            aria-label="Видео: Антон Сверчков"
            className="w-full h-full object-cover transition-transform duration-700"
          >
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Привет, я Антон Сверчков и я помогаю людям начать петь.
            </h1>
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed animate-slide-up stagger-1">
              За последние 6 лет со мной научились петь более двух сотен человек.
            </p>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl animate-slide-up stagger-1">
              <p>
                Пою и обучаю так, чтобы петь начал каждый, даже если когда-то говорили, что «нет слуха», «нет голоса» или «лучше помолчи».
              </p>
              <p>
                Со мной вокал становится безопасным, понятным и вдохновляющим.
                Я помогаю раскрыть голос тем, кто начинает с нуля, и тем, кто уже занимался и хочет выйти на качественно новый уровень – звучать свободно, мощно и по-настоящему по-своему.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-4 animate-slide-up stagger-2">
            <div className="flex flex-col items-start sm:items-center gap-2">
              <Button 
                onClick={scrollToDiagnostic}
                
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-7 md:px-10 text-lg font-medium transition-all hover:scale-105 w-full sm:w-auto"
              >
                Записаться на диагностику вокала
              </Button>
              <span className="font-semibold text-foreground text-xl">Стоимость диагностики: 2000 ₽</span>
              <span className="text-foreground/80 text-sm">👌 100% возврат, если вам не понравится</span>
            </div>

            <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground">
              
            </div>

            {/* Слайдер с отзывами о диагностике */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
