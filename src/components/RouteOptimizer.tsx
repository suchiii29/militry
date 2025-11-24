import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Route, TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export const RouteOptimizer = () => {
  const routes = [
    {
      id: "RT-001",
      name: "Highway Route A",
      distance: "42 km",
      duration: "45 min",
      traffic: "low",
      terrain: "plain",
      safety: 95,
      fuel: "Low consumption",
      recommended: true,
    },
    {
      id: "RT-002",
      name: "Mountain Pass B",
      distance: "38 km",
      duration: "1 hr 15 min",
      traffic: "none",
      terrain: "mountainous",
      safety: 78,
      fuel: "High consumption",
      recommended: false,
    },
    {
      id: "RT-003",
      name: "Alternate Route C",
      distance: "52 km",
      duration: "1 hr 5 min",
      traffic: "medium",
      terrain: "mixed",
      safety: 88,
      fuel: "Medium consumption",
      recommended: false,
    },
  ];

  const getTrafficColor = (traffic: string) => {
    switch (traffic) {
      case "low":
        return "text-success";
      case "medium":
        return "text-warning";
      case "high":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getSafetyColor = (safety: number) => {
    if (safety >= 90) return "text-success";
    if (safety >= 75) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">AI Route Optimization</h3>
            <p className="text-muted-foreground">
              Our AI analyzes terrain, weather, traffic patterns, and historical data to recommend the most efficient routes for your convoys.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {routes.map((route) => (
          <Card
            key={route.id}
            className={`p-6 ${route.recommended ? 'border-primary shadow-lg' : ''}`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-accent/10 flex items-center justify-center">
                    <Route className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{route.id}</h3>
                      {route.recommended && (
                        <Badge className="bg-primary text-primary-foreground">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{route.name}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Distance</p>
                  <p className="font-semibold text-foreground">{route.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <p className="font-semibold text-foreground">{route.duration}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Traffic</p>
                  <p className={`font-semibold capitalize ${getTrafficColor(route.traffic)}`}>
                    {route.traffic}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Safety Score</p>
                  <p className={`font-semibold ${getSafetyColor(route.safety)}`}>
                    {route.safety}%
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Badge variant="outline" className="capitalize">
                  {route.terrain} Terrain
                </Badge>
                <Badge variant="outline">{route.fuel}</Badge>
                {!route.recommended && route.safety < 85 && (
                  <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Caution Required
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant={route.recommended ? "default" : "outline"} className="flex-1">
                  Select Route
                </Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
