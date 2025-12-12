import { Clock, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  onSelect: (program: Program) => void;
  onOpenDetails: (program: Program) => void;
}

const ProgramCard = ({ program, onSelect, onOpenDetails }: ProgramCardProps) => {
  return (
    <div
      className="group relative rounded-[2rem] overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => onOpenDetails(program)}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
            {program.subtitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{program.title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{program.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{program.lessons} занятий</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {program.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="space-y-1">
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
              {program.id === "vocal-plus" && index === 3 && (
                <li className="flex items-center gap-2 text-sm text-red-500 font-semibold italic uppercase">
                  <span className="ml-6">
                    БОНУС на тарифе с обратной связью: запись и сведение песни (ONLINE и OFFLINE)
                  </span>
                </li>
              )}
            </div>
          ))}
        </ul>

        {/* Price */}
        <div className="pt-4 border-t border-border space-y-3">
          {program.id === "voice-zero" ? (
            <div className="space-y-2 w-full">
              <div className="text-lg leading-tight">
                <span className="text-xl font-semibold">35 000 ₽</span>
                <span className="text-muted-foreground ml-2 text-sm">без домашних заданий</span>
              </div>
              <div className="text-lg leading-tight">
                <span className="text-xl font-semibold">45 000 ₽</span>
                <span className="text-muted-foreground ml-2 text-sm">с домашними заданиями и обратной связью</span>
              </div>
            </div>
          ) : program.id === "vocal-plus" ? (
            <div className="space-y-1">
              <div className="text-lg leading-tight">
                <span className="text-xl font-semibold">48 000 ₽</span>
                <span className="text-muted-foreground ml-2 text-sm">без домашних заданий</span>
              </div>
              <div className="text-lg leading-tight">
                <span className="text-xl font-semibold">60 000 ₽</span>
                <span className="text-muted-foreground ml-2 text-sm">
                  с домашними заданиями и обратной связью +{" "}
                  <span className="text-red-500 font-bold italic uppercase">бонус</span>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-3xl font-bold">{program.price.toLocaleString("ru-RU")}</span>
              <span className="text-muted-foreground ml-1">₽</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-start">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onSelect(program);
            }}
            className="rounded-full px-6 hover:scale-105 transition-all"
          >
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
