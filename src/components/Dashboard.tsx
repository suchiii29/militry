import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapView } from "./MapView";
import { ConvoyList } from "./ConvoyList";
import { RouteOptimizer } from "./RouteOptimizer";
import { AlertsPanel } from "./AlertsPanel";
import { AnalyticsDashboard } from "./AnalyticsDashboard";
import { Activity, Map, Route, AlertTriangle, BarChart3 } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-primary flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">R2D32</h1>
                <p className="text-sm text-muted-foreground">AI Military Mobility System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                <div className="h-2 w-2 rounded-full bg-success mr-2 animate-pulse" />
                System Online
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl">
            <TabsTrigger value="overview" className="gap-2">
              <Map className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="convoys" className="gap-2">
              <Activity className="h-4 w-4" />
              Convoys
            </TabsTrigger>
            <TabsTrigger value="routes" className="gap-2">
              <Route className="h-4 w-4" />
              Routes
            </TabsTrigger>
            <TabsTrigger value="alerts" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="p-6 lg:col-span-2">
                <MapView />
              </Card>
              <Card className="p-6">
                <AlertsPanel />
              </Card>
            </div>
            <ConvoyList />
          </TabsContent>

          <TabsContent value="convoys">
            <ConvoyList detailed />
          </TabsContent>

          <TabsContent value="routes">
            <RouteOptimizer />
          </TabsContent>

          <TabsContent value="alerts">
            <Card className="p-6">
              <AlertsPanel detailed />
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
