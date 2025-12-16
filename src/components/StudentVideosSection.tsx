import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type StudentVideo = {
  id: string;
  studentName: string;
  nickname: string;
  trackTitle: string;
  videoSrc: string;
  posterSrc: string;
  note?: string;
};

const studentVideos: StudentVideo[] = [
  {
    id: "vera",
    studentName: "Вера",
    nickname: "@rulevskaya_vera",
    trackTitle: "Miravi - Воля",
    videoSrc: "/videos/Вера - Воля-web.mp4",
    posterSrc: "/images/Вера - Воля-poster.webp",
    note: "Фразировка и эмоциональная подача в балладной форме.",
  },
  {
    id: "artur",
    studentName: "Артур",
    nickname: "@arthur_nig",
    trackTitle: "Sam Smith - I'm Not The Only One",
    videoSrc: "/videos/Artur_Iamnottheonlyone_31december-web.mp4",
    posterSrc: "/images/Artur_Iamnottheonlyone_31december-poster.webp",
    note: "Работали над ровной опорой и контролем дыхания.",
  },
  {
    id: "ksusha",
    studentName: "Ксюша",
    nickname: "@koalink",
    trackTitle: "The Weeknd — Blinding Lights",
    videoSrc: "/videos/Ksusha_Weeknd-web.mp4",
    posterSrc: "/images/Ksusha_Weeknd-poster.webp",
    note: "Усиление микстового регистра и устойчивость в динамике.",
  },
];

const renderVideoCard = (
  {
    id,
    studentName,
    nickname,
    trackTitle,
    videoSrc,
    posterSrc,
    note,
  }: StudentVideo,
  nicknameMap: Record<string, string>,
): JSX.Element => (
  <article
    key={id}
    className="p-4 md:p-5 rounded-[1.5rem] bg-muted/60 border border-border/70 space-y-4 h-full"
  >
    <div className="rounded-2xl overflow-hidden bg-black/80 shadow-lg shadow-primary/10">
      <video
        className="w-full h-full"
        src={videoSrc}
        poster={posterSrc}
        controls
        preload="metadata"
      />
    </div>
    <div className="space-y-1">
      <p className="text-sm uppercase tracking-[0.08em] text-primary font-semibold">
        {studentName}
      </p>
      {nicknameMap[id] ? (
        <p className="text-sm text-muted-foreground">{nicknameMap[id]}</p>
      ) : (
        <p className="text-sm text-muted-foreground select-none" aria-hidden="true">
          •••
        </p>
      )}
      <h3 className="text-lg font-semibold">{trackTitle}</h3>
      {note ? (
        <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
      ) : null}
    </div>
  </article>
);

const StudentVideosSection: React.FC = () => {
  const [nicknameMap, setNicknameMap] = React.useState<Record<string, string>>(
    {}
  );

  React.useEffect(() => {
    const map = studentVideos.reduce<Record<string, string>>(
      (accumulator, { id, nickname }) => {
        accumulator[id] = nickname;
        return accumulator;
      },
      {}
    );

    setNicknameMap(map);
  }, []);

  return (
    <section className="py-16">
      <div className="rounded-[2rem] bg-card border border-border p-8 md:p-12 space-y-8 animate-slide-up">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Видео студентов
            </span>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Реальные результаты учеников
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Посмотрите фрагменты уроков и выступлений, где студенты применяют
                техники, отработанные на занятиях.
              </p>
            </div>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          className="relative"
        >
          <CarouselContent className="pb-12 px-3 md:px-4">
            {studentVideos.map((video) => (
              <CarouselItem
                key={video.id}
                className="basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3"
              >
                {renderVideoCard(video, nicknameMap)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex md:hidden -left-4" />
          <CarouselNext className="flex md:hidden -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default StudentVideosSection;


