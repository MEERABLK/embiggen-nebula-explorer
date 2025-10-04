import earthSample from "@/assets/earth-sample.jpg";
import cycloneImage from "@/assets/tropical-cyclone-02a.png";

export interface DatasetMetadata {
  id: string;
  name: string;
  planet: string;
  coordinates?: { lat: number; lon: number };
  timestamp: string;
  instrument: string;
  windSpeed?: string;
  description: string;
  source: string;
  resolution: string;
  wavelength: string;
  image: string;
  thumbnail: string;
}

export const datasets: Record<string, DatasetMetadata[]> = {
  Earth: [
    {
      id: "earth-sample",
      name: "Earth Overview",
      planet: "Earth",
      timestamp: "2024-10-04",
      instrument: "MODIS",
      description: "High-resolution overview of Earth from space showing cloud patterns and landmasses.",
      source: "NASA MODIS",
      resolution: "1.2 GP",
      wavelength: "Visible",
      image: earthSample,
      thumbnail: earthSample,
    },
    {
      id: "tropical-cyclone-02a",
      name: "Tropical Cyclone 02A",
      planet: "Earth",
      coordinates: { lat: 15.0, lon: 62.0 },
      timestamp: "2025-10-04",
      instrument: "MODIS/VIIRS True Color",
      windSpeed: "65 kts",
      description: "High-resolution snapshot of Tropical Cyclone 02A in the north Arabian Sea, touching the southern coast of Pakistan.",
      source: "NASA MODIS/VIIRS",
      resolution: "2.1 GP",
      wavelength: "True Color Composite",
      image: cycloneImage,
      thumbnail: cycloneImage,
    },
  ],
  Moon: [
    {
      id: "moon-sample",
      name: "Lunar Surface",
      planet: "Moon",
      timestamp: "2024-09-15",
      instrument: "LRO Camera",
      description: "Detailed view of the lunar surface showing craters and maria.",
      source: "NASA LRO",
      resolution: "0.5 GP",
      wavelength: "Visible",
      image: earthSample, // Placeholder
      thumbnail: earthSample,
    },
  ],
  Mars: [
    {
      id: "mars-sample",
      name: "Martian Terrain",
      planet: "Mars",
      timestamp: "2024-08-22",
      instrument: "HiRISE",
      description: "High-resolution view of Martian surface features and geological formations.",
      source: "NASA MRO HiRISE",
      resolution: "1.5 GP",
      wavelength: "RGB Composite",
      image: earthSample, // Placeholder
      thumbnail: earthSample,
    },
  ],
  Andromeda: [
    {
      id: "andromeda-sample",
      name: "Andromeda Galaxy",
      planet: "Andromeda",
      timestamp: "2024-07-10",
      instrument: "Hubble Space Telescope",
      description: "Deep space observation of the Andromeda Galaxy showing stellar formations.",
      source: "NASA Hubble",
      resolution: "3.2 GP",
      wavelength: "Multi-spectrum",
      image: earthSample, // Placeholder
      thumbnail: earthSample,
    },
  ],
};

export const aiInsights: Record<string, Array<{ pattern: string; confidence: number }>> = {
  "earth-sample": [
    { pattern: "Weather Pattern", confidence: 94 },
    { pattern: "Cloud Formation", confidence: 87 },
  ],
  "tropical-cyclone-02a": [
    { pattern: "Cyclonic Rotation", confidence: 98 },
    { pattern: "Eye Wall Structure", confidence: 95 },
    { pattern: "Storm Bands", confidence: 92 },
    { pattern: "Convective Activity", confidence: 89 },
  ],
  "moon-sample": [
    { pattern: "Impact Craters", confidence: 96 },
    { pattern: "Regolith Patterns", confidence: 84 },
  ],
  "mars-sample": [
    { pattern: "Erosion Patterns", confidence: 91 },
    { pattern: "Geological Layers", confidence: 88 },
  ],
  "andromeda-sample": [
    { pattern: "Star Clusters", confidence: 97 },
    { pattern: "Spiral Arms", confidence: 93 },
  ],
};
