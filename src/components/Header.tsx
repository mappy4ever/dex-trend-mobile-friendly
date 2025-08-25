import { Button } from "@/components/ui/button";
import { MobileNavigation } from "./MobileNavigation";
import { Heart, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Pokédex", href: "/pokedex" },
  { label: "TCG", href: "/tcg" },
  { label: "Battle", href: "/battle" },
  { label: "Games", href: "/games" },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <MobileNavigation />
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DexTrends
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="text-base font-medium hover:bg-accent/10"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex hover:bg-accent/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/10"
          >
            <Heart className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-accent/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
};