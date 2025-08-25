import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Zap, Trophy, Database } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Pokédex",
    description: "Browse all 1,025 Pokémon with complete stats, abilities, and evolutions",
    color: "pokemon-grass",
    href: "/pokedex"
  },
  {
    icon: Zap,
    title: "TCG Database", 
    description: "Explore cards from all Pokémon TCG sets with images and details",
    color: "pokemon-electric",
    href: "/tcg"
  },
  {
    icon: Trophy,
    title: "Battle Tools",
    description: "Type calculator, damage calculator, and team building tools",
    color: "pokemon-fire",
    href: "/battle"
  },
  {
    icon: Database,
    title: "Resources",
    description: "Complete database of moves, abilities, items, and more",
    color: "pokemon-water",
    href: "/resources"
  }
];

export const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
      {features.map((feature) => (
        <Card 
          key={feature.title}
          className="group hover:shadow-primary transition-all duration-300 hover:scale-[1.02] border-0 shadow-card overflow-hidden bg-gradient-subtle"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl shadow-sm"
                style={{ backgroundColor: `hsl(var(--${feature.color}) / 0.1)` }}
              >
                <feature.icon 
                  className="h-6 w-6"
                  style={{ color: `hsl(var(--${feature.color}))` }}
                />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-base mb-4 leading-relaxed">
              {feature.description}
            </CardDescription>
            <Button 
              variant="outline" 
              className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
            >
              Explore {feature.title}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};