import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="rounded-[2rem] bg-card border border-border p-8 md:p-12 space-y-8 animate-slide-up">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium self-start">
              Обо мне
            </span>
            <div className="space-y-4 text-center">
              <div className="relative w-full max-w-[14rem] md:max-w-[20rem] mx-auto aspect-[2/3] md:aspect-[5/6] rounded-[1.5rem] overflow-hidden bg-muted group">
                <img
                  src="/anton-sverchkov+.jpeg"
                  alt="Антон Сверчков"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-center">
                Антон Сверчков -
                <br />
                <span className="text-base md:text-lg font-medium">профессиональный вокалист, композитор и вокальный наставник.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-sm md:text-base text-muted-foreground">
                Я выступаю на сцене с 5 лет и вот уже <span className="font-bold underline">25 лет</span> я изучаю свой голос, разные музыкальные инструменты, написание песен, текстов и аранжировок. А также более 6 лет раскрываю людей и <span className="font-bold underline">возвращаю любовь к себе и своему голосу</span>.
              </p>
              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  За моими плечами <span className="font-bold">10 лет музыкальной школы, 6 лет МПГУ</span> по эстрадно-джазовому вокалу, участие в телепроекте <span className="font-bold">«Битва Хоров»</span> на телеканале <span className="font-bold">Россия 1</span>, победа в конкурсе <span className="font-bold">«Пой в душе»</span> и годовая ротация на радио <span className="font-bold">«Русский Хит»</span>.
                </p>
                <p>
                  Тысячи концертов в разных составах: <span className="font-bold">соло</span>, <span className="font-bold">вокальный ансамбль</span>, <span className="font-bold">хор</span>, <span className="font-bold">вокалист Gospel хора</span> в Москве, <span className="font-bold">выступления в кавер-бэндах</span>, а также <span className="font-bold">выступления за рубежом</span>.
                </p>
                
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-muted text-xs md:text-sm">Работа с новичками и продолжающими</span>
                <span className="px-4 py-2 rounded-full bg-muted text-xs md:text-sm">Twang, cry, belting, опора</span>
                <span className="px-4 py-2 rounded-full bg-muted text-xs md:text-sm">Интонация и ритм под метроном</span>
                <span className="px-4 py-2 rounded-full bg-muted text-xs md:text-sm">Подготовка к записи и сцене</span>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <ProgramsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Benefits Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-[2rem] bg-muted animate-slide-up stagger-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Сообщество и поддержка</h3>
              <p className="text-muted-foreground">
                Чат единомышленников в Telegram с полезной информацией о вокале, музыке и практике.
              </p>
            </div>

            <div className="text-center p-8 rounded-[2rem] bg-muted animate-slide-up stagger-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Удобные форматы занятий</h3>
              <p className="text-muted-foreground">
                ONLINE и OFFLINE — выбирайте формат, который подходит вам.<br />
                Домашние задания с разбором и обратной связью.<br />
                Поддержка и связь между уроками.
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

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="rounded-[2rem] bg-muted p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-slide-up">
            <div className="space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">Контакты</span>
              <h3 className="text-3xl font-bold">Напишите, чтобы подобрать программу</h3>
              <p className="text-muted-foreground">
                Отвечу на вопросы, помогу выбрать формат и пришлю первые материалы для старта.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Telegram: <a className="text-primary hover:underline" href="https://t.me/antonsverchkov" target="_blank" rel="noreferrer">@antonsverchkov</a></li>
                <li>Email: <a className="text-primary hover:underline" href="mailto:anderik12@mail.ru">anderik12@mail.ru</a></li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/antonsverchkov"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Написать в Telegram
              </a>
              <a
                href="mailto:anderik12@mail.ru"
                className="px-6 py-3 rounded-full border border-border font-medium hover:border-primary hover:text-primary hover:scale-105 transition-all"
              >
                Написать на email
              </a>
            </div>
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
                <li><a href="#programs" className="hover:text-accent transition-colors">Голос с нуля</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Вокал +</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Артист и автор</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">Обо мне</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Правовая информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-muted-foreground/80">Политика конфиденциальности</span></li>
                <li><span className="text-muted-foreground/80">Договор-оферта</span></li>
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
