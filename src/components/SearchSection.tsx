import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search Pokémon, cards, moves, items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg bg-background shadow-card border-0 focus:shadow-primary transition-shadow"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          variant="outline" 
          className="flex-1 h-12 text-base hover:bg-accent/10"
        >
          <Search className="h-4 w-4 mr-2" />
          Quick Search
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 h-12 text-base hover:bg-accent/10"
        >
          <Filter className="h-4 w-4 mr-2" />
          Advanced Search
        </Button>
      </div>
    </div>
  );
};