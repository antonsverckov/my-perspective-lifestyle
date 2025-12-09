import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { Program } from "@/data/programs";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
}

const ContactModal = ({ isOpen, onClose, program }: ContactModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время"
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-[2rem] w-full max-w-lg p-6 md:p-8 shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Записаться на занятие</h3>
            {program && (
              <p className="text-muted-foreground">
                Программа: <span className="text-foreground font-medium">{program.title}</span>
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                Ваше имя <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                placeholder="Как вас зовут?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                Телефон <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                Сообщение
              </label>
              <Textarea
                id="message"
                placeholder="Расскажите о своих целях или задайте вопросы..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full py-6 text-base font-medium hover:scale-[1.02] transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
