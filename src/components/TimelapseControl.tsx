import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const TimelapseControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 365; // Example: 365 days

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFrameChange = (value: number[]) => {
    setCurrentFrame(value[0]);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Time-Lapse Explorer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch planetary changes over time with interactive playback
          </p>
        </div>

        <Card className="glass-panel p-8 max-w-4xl mx-auto">
          {/* Timeline Preview */}
          <div className="mb-6">
            <div className="grid grid-cols-8 gap-2 mb-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    Math.floor((currentFrame / totalFrames) * 8) === i
                      ? 'border-primary cosmic-glow'
                      : 'border-border/30'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs text-muted-foreground">
                    Day {Math.floor((i / 8) * 365)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playback Controls */}
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <Slider
                value={[currentFrame]}
                onValueChange={handleFrameChange}
                max={totalFrames}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Day 0</span>
                <span className="font-medium text-foreground">
                  Day {currentFrame} / {totalFrames}
                </span>
                <span>Day {totalFrames}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="sm"
                variant="outline"
                className="glass-panel"
                onClick={() => setCurrentFrame(Math.max(0, currentFrame - 30))}
              >
                <SkipBack className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                className={`cosmic-glow ${isPlaying ? 'bg-secondary' : 'bg-primary'}`}
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 mr-2" />
                ) : (
                  <Play className="w-6 h-6 mr-2" />
                )}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="glass-panel"
                onClick={() => setCurrentFrame(Math.min(totalFrames, currentFrame + 30))}
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            {/* Playback Options */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
              <Button size="sm" variant="ghost" className="text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Select Date Range
              </Button>
              <div className="h-4 w-px bg-border/50" />
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Speed:</span>
                <select className="bg-transparent border border-border/50 rounded px-2 py-1">
                  <option>0.5x</option>
                  <option>1x</option>
                  <option>2x</option>
                  <option>5x</option>
                </select>
              </div>
            </div>
          </div>

          {/* Date Info */}
          <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">2023</div>
              <div className="text-xs text-muted-foreground">Start Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">2024</div>
              <div className="text-xs text-muted-foreground">Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">365</div>
              <div className="text-xs text-muted-foreground">Total Days</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TimelapseControl;
