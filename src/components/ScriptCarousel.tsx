import { useState } from "react";
import ScriptCard from "./ScriptCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Script {
  id: string;
  title: string;
  genre: string;
  duration: string;
  author: string;
  description: string;
  image: string;
  content: string;
}

interface ScriptCarouselProps {
  scripts: Script[];
  onScriptSelect: (script: Script) => void;
}

const ScriptCarousel = ({ scripts, onScriptSelect }: ScriptCarouselProps) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  // Group scripts by genre
  const groupedScripts = scripts.reduce((acc, script) => {
    if (!acc[script.genre]) {
      acc[script.genre] = [];
    }
    acc[script.genre].push(script);
    return acc;
  }, {} as Record<string, Script[]>);

  const rotate = (direction: 'left' | 'right') => {
    const rotationStep = 360 / 10; // 36 degrees per step for 10 items
    setRotationAngle(prev => 
      direction === 'left' 
        ? prev - rotationStep 
        : prev + rotationStep
    );
  };

  return (
    <section id="scripts" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-cinematic text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Scripts</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our handpicked selection of exceptional screenplays
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => rotate('left')}
              className="bg-card/50 border-border/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => rotate('right')}
              className="bg-card/50 border-border/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Scripts by Genre */}
        {Object.entries(groupedScripts).map(([genre, genreScripts]) => (
          <div key={genre} className="mb-32">
            <h3 className="font-cinematic text-2xl font-bold text-primary text-center mb-12">
              {genre}
            </h3>
            
            {/* 3D Donut Wheel Container */}
            <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '1200px' }}>
              <div 
                className="relative w-[400px] h-[400px] transition-transform duration-700 ease-in-out preserve-3d"
                style={{
                  transform: `rotateX(-10deg) rotateY(${rotationAngle}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {genreScripts.map((script, index) => {
                  const angle = (360 / genreScripts.length) * index;
                  const radius = 300; // Distance from center
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const z = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  // Calculate scale based on z position for depth effect
                  const scale = 0.7 + (z + radius) / (radius * 4);
                  const opacity = 0.6 + (z + radius) / (radius * 2);
                  
                  return (
                    <div 
                      key={script.id}
                      className="absolute w-[280px] transition-all duration-300 hover:scale-110"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
                        transformOrigin: 'center',
                        opacity: opacity,
                        zIndex: Math.round(z + radius)
                      }}
                    >
                      <div className="hover:shadow-glow">
                        <ScriptCard
                          {...script}
                          onClick={() => onScriptSelect(script)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScriptCarousel;