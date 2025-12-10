import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Program } from "@/data/programs";

type ProgramDetailsModalProps = {
  program: Program | null;
  onClose: () => void;
  onSelect: (program: Program) => void;
};

const detailsById: Record<string, { title: string; content: JSX.Element }> = {
  "voice-zero": {
    title: "«Голос с нуля»",
    content: (
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p><strong>Для кого:</strong> никогда не пели, «не попадаю в ноты», стеснение голоса, не занимались вокалом.</p>
        <p><strong>Цель:</strong> свободно звучать, чисто интонировать, убрать зажимы, начать петь простые песни, понимать, как управлять голосом.</p>
        <p><strong>Продолжительность:</strong> 6–12 недель.</p>
        <div>
          <strong>Формат:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>1–2 урока в неделю (12 уроков по 60 мин)</li>
            <li>домашние задания</li>
            <li>обратная связь по тарифу</li>
          </ul>
        </div>
        <div>
          <strong>Программа:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>установки и страхи (стеснение, «мне нельзя петь»)</li>
            <li>дыхание и контроль воздушного потока</li>
            <li>тело и снятие зажимов (челюсть, плечи, гортань)</li>
            <li>базовая интонация</li>
            <li>грудной и головной регистры, штробас</li>
            <li>дикция и артикуляция</li>
            <li>простые ритмы</li>
            <li>твёрдая, мягкая и сбалансированная атака</li>
            <li>работа с 1–2 простыми песнями</li>
          </ul>
        </div>
        <p><strong>Результат:</strong> поёт чисто, уверенно и понимает, как управлять голосом.</p>
        <div>
          <strong>Чек-листы:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>дыхание</li>
            <li>скороговорки для дикции</li>
            <li>попадание в ноты</li>
            <li>музыкальный ритм</li>
            <li>тональность: что это и для чего</li>
            <li>работа над песней</li>
            <li>распевки с текстовым объяснением</li>
          </ul>
        </div>
        <div>
          <strong>Стоимость:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>35 000 ₽ — без домашних заданий</li>
            <li>45 000 ₽ — с домашкой и обратной связью</li>
          </ul>
        </div>
      </div>
    ),
  },
  "vocal-plus": {
    title: "«Вокал +»",
    content: (
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p>
          <strong>Для кого:</strong> уже занимались вокалом, выступали несколько раз, хотят звучать профессиональнее и осознанно управлять голосом.
        </p>
        <p>
          <strong>Цель:</strong> контроль голоса, освоение техник, осознанное пение.
        </p>
        <p>
          <strong>Продолжительность:</strong> 8–16 недель.
        </p>
        <div>
          <strong>Формат:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>1–2 урока в неделю (16 уроков)</li>
            <li>разборы песен</li>
            <li>домашка с фидбеком или без — по тарифу</li>
          </ul>
        </div>
        <div>
          <strong>Программа:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>дыхание и поток</li>
            <li>регистры: грудь, голова, фальцет, микст</li>
            <li>атаки звука: твёрдая, мягкая, сбалансированная</li>
            <li>динамика</li>
            <li>ритм и работа с метрономом</li>
            <li>дикция и артикуляция</li>
            <li>техники: twang, cry, субтон, вибрато, belting</li>
            <li>интонация и гармонический слух</li>
            <li>2–3 песни посложнее</li>
            <li>импровизация</li>
            <li>актерские навыки</li>
          </ul>
        </div>
        <p><strong>Результат:</strong> уверенное, стильное пение + понимание, что и зачем ты делаешь.</p>
        <div>
          <strong>Чек-листы:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>техника под стиль</li>
            <li>работа с песней</li>
            <li>контроль регистра</li>
            <li>стабильность на выступлениях и управление энергией</li>
            <li>распевки для самостоятельного обучения (с голосом и текстовым описанием)</li>
          </ul>
        </div>
        <p>
          <strong>БОНУС на тарифе с обратной связью:</strong> запись и сведение песни в конце обучения (ONLINE и OFFLINE форматы).
        </p>
        <div>
          <strong>Стоимость:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>48 000 ₽ — без обратной связи и домашек</li>
            <li>60 000 ₽ — с домашкой и обратной связью + БОНУС (запись и сведение песни)</li>
          </ul>
        </div>
      </div>
    ),
  },
};

const ProgramDetailsModal = ({ program, onClose, onSelect }: ProgramDetailsModalProps) => {
  const details = program ? detailsById[program.id] : null;

  return (
    <Dialog open={!!program} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        {program && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{details?.title ?? program.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {program.subtitle}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-4">
                {details?.content ?? (
                  <p className="text-muted-foreground text-sm">Подробности скоро будут.</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => onSelect(program)}
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  Записаться
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDetailsModal;

