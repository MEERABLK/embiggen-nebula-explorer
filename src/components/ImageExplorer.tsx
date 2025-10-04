import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCw, Layers, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import earthSample from "@/assets/earth-sample.jpg";

const ImageExplorer = () => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="explorer" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Interactive Image Explorer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Zoom, pan, and explore high-resolution NASA imagery
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Viewer */}
          <div className="lg:col-span-3">
            <Card className="glass-panel overflow-hidden">
              {/* Toolbar */}
              <div className="border-b border-border/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass-panel"
                    onClick={handleZoomIn}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass-panel"
                    onClick={handleZoomOut}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass-panel"
                    onClick={handleReset}
                  >
                    <RotateCw className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground ml-2">
                    {Math.round(zoom * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="glass-panel">
                    <Layers className="w-4 h-4 mr-2" />
                    Layers
                  </Button>
                  <Button size="sm" variant="outline" className="glass-panel">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Viewer Canvas */}
              <div 
                className="relative w-full h-[600px] bg-background/50 overflow-hidden cursor-move"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  src={earthSample}
                  alt="NASA Earth Imagery"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                  style={{
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${zoom})`,
                    transition: isDragging ? 'none' : 'transform 0.2s',
                  }}
                  draggable={false}
                />

                {/* AI Highlight Example */}
                <div 
                  className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-accent rounded-lg aurora-glow pointer-events-none animate-pulse"
                  style={{
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${zoom})`,
                  }}
                >
                  <div className="absolute -top-8 left-0 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
                    AI Detected: Weather Pattern
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-4">
            {/* Dataset Selector */}
            <Card className="glass-panel p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                Datasets
              </h3>
              <div className="space-y-2">
                {['Earth', 'Moon', 'Mars', 'Andromeda'].map((dataset) => (
                  <button
                    key={dataset}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      dataset === 'Earth' 
                        ? 'bg-primary text-primary-foreground cosmic-glow' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    {dataset}
                  </button>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="glass-panel p-4">
              <h3 className="font-semibold mb-3 text-accent">AI Insights</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 animate-pulse" />
                  <div>
                    <div className="font-medium">Weather Pattern</div>
                    <div className="text-muted-foreground text-xs">Confidence: 94%</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 animate-pulse" />
                  <div>
                    <div className="font-medium">Cloud Formation</div>
                    <div className="text-muted-foreground text-xs">Confidence: 87%</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Metadata */}
            <Card className="glass-panel p-4">
              <h3 className="font-semibold mb-3">Metadata</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source</span>
                  <span className="font-medium">NASA MODIS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution</span>
                  <span className="font-medium">1.2 GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">2024-10-04</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wavelength</span>
                  <span className="font-medium">Visible</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageExplorer;
