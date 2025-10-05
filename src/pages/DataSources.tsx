import { ExternalLink, Database, Satellite } from "lucide-react";
import { Card } from "@/components/ui/card";

const DataSources = () => {
  const nasaResources = [
    {
      name: "NASA Worldview",
      url: "https://worldview.earthdata.nasa.gov/",
      description: "Visually explore Earth's past and present from a satellite's perspective.",
    },
    {
      name: "Mars Reconnaissance Orbiter Online Data Volumes",
      url: "https://pds-imaging.jpl.nasa.gov/volumes/mro.html",
      description: "Primary digital image/data collections from past and present planetary missions, including Mars.",
    },
    {
      name: "Transiting Exoplanet Survey Satellite (TESS) Data Products Information",
      url: "https://heasarc.gsfc.nasa.gov/docs/tess/",
      description: "Information about TESS and how it works.",
    },
    {
      name: "Data Portal",
      url: "https://wms.lroc.asu.edu/lroc",
      description: "Search datasets from Apollo, LROC, ShadowCam by proximity, text, bounding box.",
    },
    {
      name: "Solar System Treks",
      url: "https://trek.nasa.gov/",
      description: "Interactive maps of Mars, Mercury, Venus, and multiple moons/asteroids.",
    },
    {
      name: "EarthData",
      url: "https://earthdata.nasa.gov/",
      description: "Search Earth science data by keywords, time, and spatial area.",
    },
    {
      name: "Lunar Reconnaissance Orbiter (LROC)",
      url: "http://lroc.sese.asu.edu/",
      description: "Download global/polar/regional/topographic products and targeted views of the lunar surface.",
    },
  ];

  const partnerResources = [
    {
      agency: "Canadian Space Agency (CSA)",
      resources: [
        {
          name: "Canadian Wildland Fire Information System (CWFIS)",
          url: "https://cwfis.cfs.nrcan.gc.ca/",
        },
        {
          name: "GEO.ca – Canada's open geospatial information",
          url: "https://geo.ca/",
        },
        {
          name: "Radarsat Constellation Mission (RCM) – Open Data and Information Portal",
          url: "https://www.asc-csa.gc.ca/eng/satellites/radarsat/",
        },
        {
          name: "MOPITT (on Terra)",
          url: "https://www2.acom.ucar.edu/mopitt",
        },
        {
          name: "Atmospheric Chemistry Experiment (ACE) on SCISAT",
          url: "https://ace.uwaterloo.ca/",
        },
        {
          name: "OSIRIS (on Sweden's Odin)",
          url: "https://research-groups.usask.ca/osiris/",
        },
      ],
    },
    {
      agency: "Brazilian Space Agency (AEB)",
      resources: [
        {
          name: "Brazilian National Spatial Data Infrastructure (INDE) Visualizer",
          url: "https://visualizador.inde.gov.br/",
        },
        {
          name: "Brazilian National Institute for Space Research (INPE) Catalogue",
          url: "http://www.dgi.inpe.br/catalogo/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Data Sources & Credits</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Exploring the cosmos through open data from NASA and international space agencies
          </p>
        </div>

        {/* NASA Non-Endorsement Notice */}
        <Card className="glass-panel p-6 mb-12 border-l-4 border-l-accent">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-accent" />
            NASA Non-Endorsement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            NASA does not endorse any non-U.S. Government entity and is not responsible for information 
            contained on non-U.S. Government websites. For non-U.S. Government websites, participants must 
            comply with any data use parameters of that specific website.
          </p>
        </Card>

        {/* NASA Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Satellite className="w-6 h-6 text-primary" />
            NASA Data & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {nasaResources.map((resource, idx) => (
              <Card key={idx} className="glass-panel p-5 hover:cosmic-glow transition-all">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="font-semibold mb-2 flex items-center justify-between">
                    {resource.name}
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Space Agency Partners */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Space Agency Partner Resources</h2>
          <div className="space-y-8">
            {partnerResources.map((partner, idx) => (
              <Card key={idx} className="glass-panel p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{partner.agency}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {partner.resources.map((resource, resIdx) => (
                    <a
                      key={resIdx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="text-sm">{resource.name}</span>
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Dataset Attribution */}
        <Card className="glass-panel p-6 mt-12">
          <h3 className="text-xl font-semibold mb-4">Dataset Attribution</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>Earth imagery:</strong> NASA MODIS/VIIRS via NASA Worldview
            </p>
            <p>
              <strong>Moon imagery:</strong> NASA Lunar Reconnaissance Orbiter Camera (LROC) via Arizona State University
            </p>
            <p>
              <strong>Mars imagery:</strong> NASA Mars Reconnaissance Orbiter HiRISE via University of Arizona / JPL
            </p>
            <p>
              <strong>Andromeda imagery:</strong> NASA/ESA Hubble Space Telescope via HubbleSite and STScI
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DataSources;