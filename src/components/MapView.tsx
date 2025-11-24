import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";

export const MapView = () => {
  const convoys = [
    { id: "CV-001", lat: 28.6139, lng: 77.2090, status: "moving", priority: "high" },
    { id: "CV-002", lat: 28.7041, lng: 77.1025, status: "checkpoint", priority: "medium" },
    { id: "CV-003", lat: 28.5355, lng: 77.3910, status: "moving", priority: "low" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Live Map View</h2>
        <Badge variant="outline" className="gap-2">
          <Navigation className="h-3 w-3" />
          {convoys.length} Active
        </Badge>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--border)) 20px, hsl(var(--border)) 21px),
                                   repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--border)) 20px, hsl(var(--border)) 21px)`
               }}>
          </div>
        </div>

        {/* Convoy Markers */}
        <div className="absolute inset-0 p-8">
          {convoys.map((convoy, idx) => (
            <div
              key={convoy.id}
              className="absolute group cursor-pointer"
              style={{
                left: `${20 + idx * 30}%`,
                top: `${30 + idx * 20}%`,
              }}
            >
              <div className={`relative flex items-center justify-center h-8 w-8 rounded-full border-2 
                ${convoy.priority === 'high' ? 'bg-destructive border-destructive' : 
                  convoy.priority === 'medium' ? 'bg-warning border-warning' : 
                  'bg-success border-success'} 
                ${convoy.status === 'moving' ? 'animate-pulse' : ''}`}
              >
                <MapPin className="h-4 w-4 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap">
                  <p className="font-semibold text-foreground">{convoy.id}</p>
                  <p className="text-sm text-muted-foreground capitalize">{convoy.status}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {convoy.priority.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* Route Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 20% 30% Q 35% 45% 50% 50%"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
            <path
              d="M 50% 50% Q 65% 60% 80% 70%"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>

      {/* Map Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive" />
          <span className="text-muted-foreground">High Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-warning" />
          <span className="text-muted-foreground">Medium Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-success" />
          <span className="text-muted-foreground">Low Priority</span>
        </div>
      </div>
    </div>
  );
};
