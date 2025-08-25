import { Card } from "@/components/ui/card";

const stats = [
  { label: "Pokémon", value: "1,025", color: "pokemon-fire" },
  { label: "TCG Sets", value: "150+", color: "pokemon-water" },
  { label: "Cards", value: "15,000+", color: "pokemon-electric" },
  { label: "Moves", value: "919", color: "pokemon-psychic" },
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <Card 
          key={stat.label}
          className="p-4 md:p-6 text-center shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 border-0 bg-gradient-subtle"
        >
          <div 
            className="text-2xl md:text-3xl font-bold mb-1"
            style={{ color: `hsl(var(--pokemon-${stat.color}))` }}
          >
            {stat.value}
          </div>
          <div className="text-muted-foreground text-sm md:text-base font-medium">
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
};