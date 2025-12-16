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
    telegram: "",
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

    try {
      const requestBody = {
        ...formData,
        program: program?.title || null,
        programPrice: program?.price ?? null
      };

      console.log("Отправка данных:", requestBody);

      const response = await fetch("/.netlify/functions/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      console.log("Статус ответа:", response.status, response.statusText);
      console.log("Content-Type:", response.headers.get("content-type"));

      if (!response.ok) {
        let errorMessage = "Не удалось отправить сообщение";
        
        // Специальная обработка 404
        if (response.status === 404) {
          errorMessage = "Функция сервера не найдена. Убедитесь, что сайт развернут на Netlify или запустите локально через 'netlify dev'";
          throw new Error(errorMessage);
        }
        
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
          try {
            const errorData = await response.json();
            console.error("Ошибка от сервера:", errorData);
            errorMessage = errorData?.error || errorMessage;
            if (errorData?.details) {
              console.error("Детали ошибки:", errorData.details);
            }
          } catch (parseError) {
            console.error("Ошибка парсинга JSON:", parseError);
            errorMessage = `Ошибка сервера: ${response.status} ${response.statusText}`;
          }
        } else {
          const errorText = await response.text();
          console.error("Текст ошибки:", errorText);
          errorMessage = `Ошибка сервера: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      let result;
      try {
        const responseText = await response.text();
        console.log("Текст ответа:", responseText);
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Ошибка парсинга ответа:", parseError);
        throw new Error("Неверный формат ответа от сервера");
      }

      console.log("Результат:", result);

      if (result?.ok === false) {
        throw new Error(result?.error || "Не удалось отправить сообщение");
      }

      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в ближайшее время"
      });

      setFormData({ name: "", phone: "", email: "", telegram: "", message: "" });
      onClose();
    } catch (error) {
      console.error("Полная ошибка:", error);
      toast({
        title: "Ошибка",
        description:
          error instanceof Error
            ? error.message
            : "Не удалось отправить заявку, попробуйте позже",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }

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

            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              <div>
                <label htmlFor="telegram" className="text-sm font-medium mb-1.5 block">
                  Telegram
                </label>
                <Input
                  id="telegram"
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
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
