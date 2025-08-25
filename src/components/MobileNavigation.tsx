import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  Home, 
  Search,
  Book,
  Zap,
  Gamepad2,
  Star,
  Trophy
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Book, label: "Pokédex", href: "/pokedex" },
  { icon: Zap, label: "TCG", href: "/tcg" },
  { icon: Trophy, label: "Battle", href: "/battle" },
  { icon: Gamepad2, label: "Games", href: "/games" },
  { icon: Star, label: "Favorites", href: "/favorites" },
];

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b bg-gradient-pokemon">
            <h2 className="text-2xl font-bold text-white">DexTrends</h2>
            <p className="text-white/80 text-sm mt-1">Everything Pokémon</p>
          </div>
          
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start h-12 text-left hover:bg-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
          
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Search className="h-4 w-4 mr-2" />
              Advanced Search
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};