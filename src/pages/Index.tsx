import { Header } from "@/components/Header";
import { SearchSection } from "@/components/SearchSection";
import { StatsGrid } from "@/components/StatsGrid";
import { FeatureCards } from "@/components/FeatureCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="relative container mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-pokemon rounded-2xl flex items-center justify-center shadow-glow mb-4">
              <span className="text-white font-bold text-2xl md:text-3xl">DT</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Everything Pokémon in One Place
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Search across Pokédex, TCG cards, moves, items, and more with our unified search experience
          </p>
          
          <SearchSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <StatsGrid />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Pokémon World</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover everything you need to know about Pokémon, from stats to strategies
            </p>
          </div>
          
          <FeatureCards />
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-12 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">What's New</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {/* Latest TCG Set */}
            <Card className="shadow-card border-0 hover:shadow-primary transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-pokemon-electric/10 text-pokemon-electric border-0">
                    Latest Set
                  </Badge>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Paldea Evolved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">279 cards</p>
                <Button variant="outline" className="w-full">
                  View Set
                </Button>
              </CardContent>
            </Card>

            {/* Trending Pokemon */}
            <Card className="shadow-card border-0 hover:shadow-primary transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-pokemon-fire/10 text-pokemon-fire border-0">
                    Trending
                  </Badge>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Popular Pokémon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Charizard</span>
                    <span className="text-muted-foreground">#6</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pikachu</span>
                    <span className="text-muted-foreground">#25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gardevoir</span>
                    <span className="text-muted-foreground">#282</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View More
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-card border-0 hover:shadow-primary transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-pokemon-psychic/10 text-pokemon-psychic border-0">
                    Quick Access
                  </Badge>
                </div>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm">
                    Starter Pokémon
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm">
                    Explore Regions
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-auto p-2 text-sm">
                    Mini Games
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
