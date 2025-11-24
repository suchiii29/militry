import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, Fuel, Users } from "lucide-react";

interface ConvoyListProps {
  detailed?: boolean;
}

export const ConvoyList = ({ detailed = false }: ConvoyListProps) => {
  const convoys = [
    {
      id: "CV-001",
      name: "Alpha Brigade",
      status: "moving",
      priority: "high",
      origin: "Base Alpha",
      destination: "Checkpoint Delta",
      vehicles: 12,
      personnel: 48,
      eta: "45 min",
      fuel: 78,
      distance: "42 km",
    },
    {
      id: "CV-002",
      name: "Bravo Squadron",
      status: "checkpoint",
      priority: "medium",
      origin: "Base Bravo",
      destination: "Forward Post Echo",
      vehicles: 8,
      personnel: 32,
      eta: "2 hrs",
      fuel: 92,
      distance: "68 km",
    },
    {
      id: "CV-003",
      name: "Charlie Unit",
      status: "delayed",
      priority: "low",
      origin: "Depot Charlie",
      destination: "Supply Station Fox",
      vehicles: 5,
      personnel: 20,
      eta: "3 hrs",
      fuel: 65,
      distance: "95 km",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "moving":
        return "bg-success/10 text-success border-success/30";
      case "checkpoint":
        return "bg-warning/10 text-warning border-warning/30";
      case "delayed":
        return "bg-destructive/10 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Active Convoys</h2>
          <Badge variant="outline">{convoys.length} Total</Badge>
        </div>

        <div className="space-y-3">
          {convoys.map((convoy) => (
            <Card key={convoy.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{convoy.id}</h3>
                        <Badge variant="outline" className={getPriorityColor(convoy.priority)}>
                          {convoy.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{convoy.name}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(convoy.status)}>
                    {convoy.status.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Route</p>
                      <p className="font-medium text-foreground">{convoy.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">ETA</p>
                      <p className="font-medium text-foreground">{convoy.eta}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Fuel</p>
                      <p className="font-medium text-foreground">{convoy.fuel}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Personnel</p>
                      <p className="font-medium text-foreground">{convoy.personnel}</p>
                    </div>
                  </div>
                </div>

                {detailed && (
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">From: </span>
                        <span className="text-foreground font-medium">{convoy.origin}</span>
                        <span className="text-muted-foreground mx-2">→</span>
                        <span className="text-foreground font-medium">{convoy.destination}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Track Live
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};
