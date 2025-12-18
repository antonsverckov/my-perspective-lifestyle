import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItemId = "hero" | "programs" | "testimonials" | "about" | "contact";

type NavItem = {
  readonly id: NavItemId;
  readonly label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { id: "hero", label: "Главная" },
  { id: "programs", label: "Программы" },
  { id: "testimonials", label: "Отзывы" },
  { id: "about", label: "Обо мне" },
  { id: "contact", label: "Контакты" },
] as const;

const TABLET_INLINE_COUNT = 3;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme ? savedTheme === "dark" : true;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToId = (id: NavItemId) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const tabletPrimaryItems = NAV_ITEMS.slice(0, TABLET_INLINE_COUNT);
  const tabletOverflowItems = NAV_ITEMS.slice(TABLET_INLINE_COUNT);

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-transparent">
                <img
                  src="/images/logo%202.png"
                  alt="Логотип А.Я. Сверчков"
                  className="w-full h-full object-contain scale-110 sm:scale-125"
                />
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">А.Я. Сверчков</span>
            </a>
          </div>

          {/* Tablet Navigation (md only) */}
          <nav className="hidden md:flex lg:hidden items-center gap-2">
            {tabletPrimaryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
              >
                {item.label}
              </button>
            ))}
            {tabletOverflowItems.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
                    Еще...
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {tabletOverflowItems.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      onSelect={(event) => {
                        event.preventDefault();
                        scrollToId(item.id);
                      }}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Desktop Navigation (lg and up) */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Переключить тему"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <Button 
              onClick={() => scrollToId("programs")}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all"
            >
              Записаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Открыть меню"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToId("hero")} className="text-sm font-medium hover:text-accent transition-colors text-left">
                Главная
              </button>
              <button onClick={() => scrollToId("programs")} className="text-sm font-medium hover:text-accent transition-colors text-left">
                Программы
              </button>
              <button onClick={() => scrollToId("testimonials")} className="text-sm font-medium hover:text-accent transition-colors text-left">
                Отзывы
              </button>
              <button onClick={() => scrollToId("about")} className="text-sm font-medium hover:text-accent transition-colors text-left">
                Обо мне
              </button>
              <button onClick={() => scrollToId("contact")} className="text-sm font-medium hover:text-accent transition-colors text-left">
                Контакты
              </button>
              <Button 
                onClick={() => scrollToId("programs")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full"
              >
                Записаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
