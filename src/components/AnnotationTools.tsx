import { useState } from "react";
import { Pencil, MapPin, MessageSquare, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Annotation {
  id: number;
  type: 'marker' | 'note' | 'highlight';
  x: number;
  y: number;
  content: string;
  timestamp: string;
}

const AnnotationTools = () => {
  const [annotations, setAnnotations] = useState<Annotation[]>([
    { id: 1, type: 'marker', x: 30, y: 40, content: 'Interesting cloud formation', timestamp: '2 hours ago' },
    { id: 2, type: 'note', x: 60, y: 20, content: 'Possible storm system developing', timestamp: '5 hours ago' },
  ]);
  const [activeTool, setActiveTool] = useState<'marker' | 'note' | 'highlight' | null>(null);

  const handleDeleteAnnotation = (id: number) => {
    setAnnotations(annotations.filter(a => a.id !== id));
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Annotation & Discovery Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mark, annotate, and share your discoveries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Annotation Canvas */}
          <div className="lg:col-span-2">
            <Card className="glass-panel p-6">
              {/* Toolbar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                <Button
                  size="sm"
                  variant={activeTool === 'marker' ? 'default' : 'outline'}
                  className={activeTool === 'marker' ? 'bg-primary cosmic-glow' : 'glass-panel'}
                  onClick={() => setActiveTool('marker')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Marker
                </Button>
                <Button
                  size="sm"
                  variant={activeTool === 'note' ? 'default' : 'outline'}
                  className={activeTool === 'note' ? 'bg-accent aurora-glow' : 'glass-panel'}
                  onClick={() => setActiveTool('note')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Note
                </Button>
                <Button
                  size="sm"
                  variant={activeTool === 'highlight' ? 'default' : 'outline'}
                  className={activeTool === 'highlight' ? 'bg-secondary' : 'glass-panel'}
                  onClick={() => setActiveTool('highlight')}
                >
                  <Pencil className="w-4 h-4 mr-2" />
                  Highlight
                </Button>
                <div className="flex-1" />
                <Button size="sm" className="bg-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Session
                </Button>
              </div>

              {/* Preview Area */}
              <div className="relative aspect-video bg-background/50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Click on the image explorer above to add annotations
                </div>

                {/* Sample Annotations */}
                <div className="absolute top-[40%] left-[30%] w-8 h-8 rounded-full bg-primary/20 border-2 border-primary animate-pulse cursor-pointer">
                  <div className="absolute -top-8 left-0 bg-primary text-primary-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
                    Cloud Formation
                  </div>
                </div>
                <div className="absolute top-[20%] left-[60%] w-8 h-8 rounded-full bg-accent/20 border-2 border-accent animate-pulse cursor-pointer">
                  <div className="absolute -top-8 left-0 bg-accent text-accent-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
                    Storm System
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{annotations.length}</div>
                  <div className="text-xs text-muted-foreground">Total Annotations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-xs text-muted-foreground">Discoveries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-xs text-muted-foreground">Shared</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Annotations List */}
          <div>
            <Card className="glass-panel p-4">
              <h3 className="font-semibold mb-4">Your Annotations</h3>
              <div className="space-y-3">
                {annotations.map((annotation) => (
                  <div
                    key={annotation.id}
                    className="glass-panel p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={
                          annotation.type === 'marker'
                            ? 'border-primary text-primary'
                            : annotation.type === 'note'
                            ? 'border-accent text-accent'
                            : 'border-secondary text-secondary'
                        }
                      >
                        {annotation.type}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => handleDeleteAnnotation(annotation.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-sm mb-1">{annotation.content}</p>
                    <p className="text-xs text-muted-foreground">{annotation.timestamp}</p>
                  </div>
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="glass-panel p-4 rounded-lg text-center cosmic-glow">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold">Explorer Badge</div>
                  <div className="text-xs text-muted-foreground">10+ Annotations Made</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationTools;
