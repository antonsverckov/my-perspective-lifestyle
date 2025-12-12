import { Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById("programs");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img 
            src="/DSC08175.jpg"
            alt="Антон Сверчков"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Раскройте свой голос с помощью вокальной терапии
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl animate-slide-up stagger-1">
              Индивидуальные занятия по вокалу для тех, кому раньше говорили, что у них: "Нет таланта, нет слуха, не ори, помолчи, да ещё и медведь на ухо наступил". Но также и для тех кто ранее уже имел опыт занятий, но хочет продолжать и достигать новых качественных высот в вокале.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <Button 
              onClick={scrollToPrograms}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto"
            >
              Записаться на занятие
            </Button>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/ayasverchkov/"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#telegram"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
