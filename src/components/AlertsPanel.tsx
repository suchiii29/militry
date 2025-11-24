import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, AlertCircle, Info, Clock } from "lucide-react";

interface AlertsPanelProps {
  detailed?: boolean;
}

export const AlertsPanel = ({ detailed = false }: AlertsPanelProps) => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Route Conflict Detected",
      message: "CV-001 and CV-005 paths overlap at Checkpoint Delta",
      time: "2 min ago",
      action: "Auto-rerouting CV-005",
    },
    {
      id: 2,
      type: "warning",
      title: "Weather Alert",
      message: "Heavy rain expected on Highway Route A in 45 minutes",
      time: "5 min ago",
      action: "Monitor conditions",
    },
    {
      id: 3,
      type: "info",
      title: "Checkpoint Update",
      message: "Checkpoint Delta processing time increased to 15 minutes",
      time: "12 min ago",
      action: "Adjust ETAs",
    },
    {
      id: 4,
      type: "warning",
      title: "Fuel Alert",
      message: "CV-003 fuel level at 65%, recommend refuel at next checkpoint",
      time: "18 min ago",
      action: "Schedule refuel",
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case "info":
        return <Info className="h-4 w-4 text-primary" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "border-l-destructive bg-destructive/5";
      case "warning":
        return "border-l-warning bg-warning/5";
      case "info":
        return "border-l-primary bg-primary/5";
      default:
        return "border-l-muted";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Active Alerts</h2>
        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30">
          {alerts.filter(a => a.type === 'critical').length} Critical
        </Badge>
      </div>

      <ScrollArea className={detailed ? "h-[600px]" : "h-[400px]"}>
        <div className="space-y-3 pr-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.type)}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground text-sm">{alert.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  {detailed && (
                    <div className="pt-2">
                      <Badge variant="outline" className="text-xs">
                        {alert.action}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
