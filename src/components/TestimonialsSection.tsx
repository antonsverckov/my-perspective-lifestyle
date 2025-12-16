import { Quote, Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Отзывы учеников
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Реальные результаты: меньше страха, больше контроля голоса, готовые треки и уверенные выступления.
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative"
      >
        <CarouselContent className="pb-12">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={item.id}
              className={`sm:basis-1/2 lg:basis-1/3`}
            >
              <div
                className={`h-full p-6 rounded-[1.75rem] border border-border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all animate-slide-up stagger-${index + 1}`}
              >
                <div className="mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <Badge variant="secondary" className="rounded-full">
                        {item.program}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <div className="relative pl-10 mb-4">
                  <Quote className="w-5 h-5 text-primary absolute left-0 top-0" />
                  <p className="text-base leading-relaxed">{item.quote}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Результат: {item.result}
                </p>

                {item.audio && (
                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full px-0 text-primary hover:text-primary/90"
                  >
                    <a href={item.audio} target="_blank" rel="noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Послушать фрагмент
                    </a>
                  </Button>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="flex" />
        <CarouselNext className="flex" />
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;

