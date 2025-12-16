import { useState } from "react";
import ProgramCard from "./ProgramCard";
import ContactModal from "./ContactModal";
import { programs, type Program } from "@/data/programs";
import ProgramDetailsModal from "./ProgramDetailsModal";

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [detailsProgram, setDetailsProgram] = useState<Program | null>(null);

  return (
    <>
      <section id="programs" className="py-16">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Программы обучения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам, или свяжитесь со мной для составления индивидуального плана
          </p>
          <p className="text-sm mt-2 text-emerald-500 font-semibold">
            (кликни на программу для подробностей)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs
            .filter((program) => program.id !== "diagnostic")
            .map((program, index) => (
              <div key={program.id} className={`animate-slide-up stagger-${index + 1}`}>
                <ProgramCard
                  program={program}
                  onSelect={setSelectedProgram}
                  onOpenDetails={setDetailsProgram}
                />
              </div>
            ))}
        </div>
      </section>

      <ProgramDetailsModal
        program={detailsProgram}
        onClose={() => setDetailsProgram(null)}
        onSelect={(program) => {
          setSelectedProgram(program);
          setDetailsProgram(null);
        }}
      />

      <ContactModal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        program={selectedProgram}
      />
    </>
  );
};

export default ProgramsSection;
