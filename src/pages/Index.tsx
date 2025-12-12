import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudentVideosSection from "@/components/StudentVideosSection";
import ContactModal from "@/components/ContactModal";
import { programs, type Program } from "@/data/programs";

const Index = () => {
  const diagnosticProgram = programs.find((item) => item.id === "diagnostic") ?? null;
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<Program | null>(null);

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Diagnostic Section */}
        <section id="diagnostic" className="py-16">
          <div className="rounded-[2rem] bg-card border border-border p-8 md:p-12 space-y-8 animate-slide-up">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium self-start">
              {diagnosticProgram?.title ?? "Диагностика вокала"}
            </span>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {diagnosticProgram?.subtitle ?? "Первый шаг к вашему голосу"}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {diagnosticProgram?.description ??
                    "Первое занятие, чтобы определить ваш уровень, выявить сильные стороны и зоны роста, получить обратную связь и план работы."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-[1.5rem] bg-muted">
                  <h3 className="text-lg font-semibold mb-3">Что включает диагностика:</h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    {(diagnosticProgram?.features ?? [
                      "Оценка текущего уровня",
                      "Проверка дыхания",
                      "Разбор зажимов и дикции",
                      "Тест регистров и диапазона",
                      "Первичные упражнения под ваши задачи",
                    ]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-[1.5rem] bg-muted">
                  <h3 className="text-lg font-semibold mb-3">После диагностики:</h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    {(diagnosticProgram?.forWhom ?? [
                      "Понятный план развития голоса",
                      "Рекомендации по программе обучения",
                      "Список упражнений для старта",
                      "Захочется петь и творить дальше",
                    ]).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Стоимость диагностики:{" "}
                    {diagnosticProgram?.price
                      ? `${diagnosticProgram.price.toLocaleString("ru-RU")} ₽`
                      : "2000 ₽"}
                  </span>
                  <span className="text-foreground/80">
                    {diagnosticProgram?.duration ? diagnosticProgram.duration : "45–60 минут"} · 100% гарантия возврата средств, если тебе не понравится👌
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedDiagnostic(diagnosticProgram)}
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  Записаться на диагностику
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Student Videos Section */}
        <StudentVideosSection />

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="rounded-[2rem] bg-card border border-border p-8 md:p-12 space-y-8 animate-slide-up">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium self-start">
              Обо мне
            </span>
            <div className="space-y-4 text-center">
              <div className="relative w-full max-w-[14rem] md:max-w-[20rem] mx-auto aspect-[2/3] md:aspect-[5/6] rounded-[1.5rem] overflow-hidden bg-muted group">
                <img
                  src="/antonsverchkov.webp"
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
              <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
                <img
                  src="/images/rtr.jpg"
                  alt="Логотип телеканала Россия 1"
                  className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/битвахоров.webp"
                  alt="Логотип Битва Хоров"
                  className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/русскийхит.jpg"
                  alt="Логотип радио Русский Хит"
                  className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
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
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/antonsverchkov"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <img
                  src="/images/icons8-telegram.svg"
                  alt="Telegram"
                  className="w-8 h-8"
                  loading="lazy"
                />
                <span>Написать в Telegram</span>
              </a>
              <a
                href="https://wa.me/94767544147"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <img
                  src="/images/icons8-whatsapp.svg"
                  alt="WhatsApp"
                  className="w-8 h-8"
                  loading="lazy"
                />
                <span>Написать в WhatsApp</span>
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

      <ContactModal
        isOpen={!!selectedDiagnostic}
        onClose={() => setSelectedDiagnostic(null)}
        program={selectedDiagnostic}
      />
    </div>
  );
};

export default Index;
