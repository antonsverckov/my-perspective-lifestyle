import Header from "@/components/Header";
import { Music, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToPrograms = () => {
    window.location.href = "/#programs";
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Обо мне
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Преподаватель вокала с многолетним опытом работы
          </p>
        </div>

        {/* Photo and Bio Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[2rem] overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=800&q=80" 
              alt="Преподаватель вокала"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="space-y-6 text-muted-foreground animate-slide-up stagger-2">
            <h2 className="text-3xl font-bold text-foreground">Моя история</h2>
            <p>
              Я начала свой путь в музыке более 10 лет назад. За это время я получила профессиональное 
              музыкальное образование, выступала на различных площадках и помогла десяткам учеников 
              раскрыть свой вокальный потенциал.
            </p>
            <p>
              Моя методика основана на понимании того, что каждый голос уникален. Я не пытаюсь сделать 
              всех одинаковыми — напротив, помогаю каждому ученику найти и развить свои сильные стороны.
            </p>
            <p>
              Для меня преподавание — это не просто работа, а возможность помочь людям обрести уверенность 
              в себе и получать удовольствие от пения.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center p-6 rounded-[1.5rem] bg-muted">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Music className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
            <div className="text-sm text-muted-foreground">лет опыта</div>
          </div>
          <div className="text-center p-6 rounded-[1.5rem] bg-muted">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-1">100+</div>
            <div className="text-sm text-muted-foreground">учеников</div>
          </div>
          <div className="text-center p-6 rounded-[1.5rem] bg-muted">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
            <div className="text-sm text-muted-foreground">выступлений</div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Мой подход</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Я верю, что научиться петь может каждый. Главное — найти правильный подход и 
              работать над техникой постепенно, без насилия над голосом.
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Индивидуальный план занятий под ваши цели и уровень</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Постепенное развитие техники без перегрузки голоса</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Работа с репертуаром, который вам нравится</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Постоянная обратная связь и поддержка между занятиями</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Начните свой путь</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Запишитесь на первое занятие и сделайте первый шаг к своему новому голосу
          </p>
          <Button 
            onClick={scrollToPrograms}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
          >
            Выбрать программу
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
