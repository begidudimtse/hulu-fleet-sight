import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { alerts } from "@/lib/mock-data";
import { AlertTriangle, WifiOff, Gauge, MapPinOff, CheckCircle2 } from "lucide-react";

const icons: Record<string, any> = {
  geofence: MapPinOff,
  offline: WifiOff,
  signal: WifiOff,
  speed: Gauge,
};

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts · HuluCart Fleet" }] }),
  component: AlertsPage,
});

function AlertsPage() {
  const open = alerts.filter(a => !a.resolved);
  const resolved = alerts.filter(a => a.resolved);
  return (
    <AppShell title="Alert Center" subtitle="Geofence violations, offline equipment and GPS signal incidents">
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Open" value={open.length} tone="bg-destructive/10 text-destructive" />
        <Stat label="High Severity" value={open.filter(a => a.severity === "high").length} tone="bg-primary/15 text-primary" />
        <Stat label="Resolved 24h" value={resolved.length} tone="bg-success/15 text-success" />
        <Stat label="Avg. Resolve Time" value="14m" tone="bg-muted text-foreground" />
      </div>

      <section className="rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Active Alerts</h2>
          <div className="flex gap-2 text-xs">
            <button className="rounded-md border border-border bg-card px-3 py-1.5 hover:bg-muted">All</button>
            <button className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-1.5 font-semibold text-destructive">High</button>
            <button className="rounded-md border border-border bg-card px-3 py-1.5 hover:bg-muted">Medium</button>
          </div>
        </div>
        <ul className="divide-y divide-border">
          {alerts.map(a => {
            const Icon = icons[a.type] ?? AlertTriangle;
            return (
              <li key={a.id} className="flex items-start gap-4 p-5 hover:bg-muted/30">
                <div className={
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg " +
                  (a.severity === "high" ? "bg-destructive/15 text-destructive" :
                   a.severity === "medium" ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground")
                }>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{a.equipmentName}</p>
                    <span className="font-mono text-[10px] text-muted-foreground">{a.equipmentId}</span>
                    <span className={
                      "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase " +
                      (a.severity === "high" ? "bg-destructive text-destructive-foreground" :
                       a.severity === "medium" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")
                    }>{a.severity}</span>
                    {a.resolved && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success">
                        <CheckCircle2 className="h-3 w-3" /> Resolved
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-foreground">{a.message}</p>
                  <p className="text-xs text-muted-foreground">{a.time} · Alert {a.id}</p>
                </div>
                {!a.resolved && (
                  <div className="flex gap-2">
                    <button className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-muted">Acknowledge</button>
                    <button className="rounded-md bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground hover:opacity-90">Resolve</button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </AppShell>
  );
}

function Stat({ label, value, tone }: { label: string; value: string | number; tone: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className={"mb-2 inline-flex h-8 items-center rounded-md px-2 text-xs font-semibold " + tone}>{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
