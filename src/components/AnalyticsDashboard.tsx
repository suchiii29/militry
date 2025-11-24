import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Truck, Route, Clock, Fuel } from "lucide-react";

export const AnalyticsDashboard = () => {
  const stats = [
    {
      label: "Active Convoys",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Truck,
      color: "text-primary",
    },
    {
      label: "Avg Route Efficiency",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: Route,
      color: "text-success",
    },
    {
      label: "Avg Delay Time",
      value: "8 min",
      change: "-12 min",
      trend: "down",
      icon: Clock,
      color: "text-warning",
    },
    {
      label: "Fuel Saved",
      value: "847 L",
      change: "+124 L",
      trend: "up",
      icon: Fuel,
      color: "text-accent",
    },
  ];

  const recentOptimizations = [
    {
      convoy: "CV-001",
      optimization: "Route changed to avoid traffic",
      timeSaved: "23 min",
      fuelSaved: "45 L",
    },
    {
      convoy: "CV-004",
      optimization: "Load consolidated with CV-007",
      timeSaved: "N/A",
      fuelSaved: "89 L",
    },
    {
      convoy: "CV-006",
      optimization: "Real-time reroute due to weather",
      timeSaved: "15 min",
      fuelSaved: "32 L",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                <div className="flex items-center gap-2 mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-success" />
                  )}
                  <span className="text-sm text-success font-medium">{stat.change}</span>
                </div>
              </div>
              <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Optimizations */}
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Recent AI Optimizations</h2>
          <div className="space-y-3">
            {recentOptimizations.map((opt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-muted/50 border border-border"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{opt.convoy}</Badge>
                      <p className="text-sm text-foreground font-medium">{opt.optimization}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Time Saved:</span>
                        <span className="font-medium text-success">{opt.timeSaved}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Fuel Saved:</span>
                        <span className="font-medium text-success">{opt.fuelSaved}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Performance Chart Placeholder */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Performance Trends</h2>
        <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg border border-border">
          <div className="text-center text-muted-foreground">
            <BarChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Performance charts will be displayed here</p>
            <p className="text-sm mt-1">Real-time analytics dashboard</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const BarChart = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
);
