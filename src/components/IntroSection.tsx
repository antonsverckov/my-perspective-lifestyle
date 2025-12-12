const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight animate-slide-up">
          На моих занятиях ты получаешь не только красивый голос, но и развитие своего внутреннего мира, качественное управление своим вниманием и телом.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Я соединяю технику, тело, психологию и артистизм.
          Со мной студенты ощущают поддерживающее и безопасное поле, свободу и внутренние открытия.
          Мы раскапываем звук, который живёт внутри тебя.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
