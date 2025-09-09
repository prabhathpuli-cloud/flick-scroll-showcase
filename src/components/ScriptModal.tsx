import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Clock, User, Download, Share, Users, Palette, Mail } from "lucide-react";

interface Script {
  id: string;
  title: string;
  genre: string;
  duration: string;
  author: string;
  description: string;
  image: string;
  content: string;
  verdict: string;
  logline: string;
  synopsis: string;
}

interface ScriptModalProps {
  script: Script | null;
  isOpen: boolean;
  onClose: () => void;
}

const ScriptModal = ({ script, isOpen, onClose }: ScriptModalProps) => {
  if (!script) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-card border-border/50 p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {script.genre}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{script.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{script.author}</span>
                  </div>
                </div>
              </div>
              
              <DialogTitle className="font-cinematic text-3xl font-bold text-foreground mb-3">
                {script.title}
              </DialogTitle>
              
              <p className="text-muted-foreground leading-relaxed">
                {script.description}
              </p>
            </div>
            
          </div>

          {/* Script Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">Verdict</h4>
              <p className="text-foreground/90 text-lg">{script.verdict}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Log Line</h4>
              <p className="text-foreground/90 italic">{script.logline}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-primary mb-2">Synopsis</h4>
              <p className="text-foreground/90 leading-relaxed">{script.synopsis}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="border-border/50 hover:bg-primary hover:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" />
              Characters
            </Button>
            <Button variant="outline" className="border-border/50 hover:bg-primary hover:text-primary-foreground">
              <Palette className="w-4 h-4 mr-2" />
              Mood Board
            </Button>
            <Button variant="outline" className="border-border/50 hover:bg-primary hover:text-primary-foreground">
              <Mail className="w-4 h-4 mr-2" />
              Contact Director
            </Button>
          </div>
        </DialogHeader>

        {/* Script Content */}
        <ScrollArea className="px-6 pb-6 max-h-[60vh]">
          <div className="bg-background/50 rounded-lg p-6 mt-6 border border-border/30">
            <h3 className="font-cinematic text-xl font-semibold mb-4 text-primary">
              Script Preview
            </h3>
            <div className="font-mono text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
              {script.content}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ScriptModal;