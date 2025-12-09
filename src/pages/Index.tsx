import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProgramsSection from "@/components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Programs Section */}
        <ProgramsSection />

        {/* Benefits Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-[2rem] bg-muted animate-slide-up stagger-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Каждое занятие адаптировано под ваш уровень, цели и особенности голоса
              </p>
            </div>

            <div className="text-center p-8 rounded-[2rem] bg-muted animate-slide-up stagger-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Проверенные методики</h3>
              <p className="text-muted-foreground">
                Авторские программы, основанные на современных техниках обучения вокалу
              </p>
            </div>

            <div className="text-center p-8 rounded-[2rem] bg-muted animate-slide-up stagger-3">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Видимый результат</h3>
              <p className="text-muted-foreground">
                Уже после первых занятий вы почувствуете прогресс и уверенность в голосе
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Готовы начать петь?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Запишитесь на пробное занятие и сделайте первый шаг к своему новому голосу
            </p>
            <button 
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Выбрать программу
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Программы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#programs" className="hover:text-accent transition-colors">Основы вокала</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Профессиональный вокал</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Индивидуальная программа</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">Обо мне</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Правовая информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Договор-оферта</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Вокальная студия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
