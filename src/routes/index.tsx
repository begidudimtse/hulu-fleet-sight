import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import {
  Truck,
  Activity,
  Hexagon,
  AlertTriangle,
  ArrowUpRight,
  Gauge,
  Signal,
} from "lucide-react";
import { alerts, equipment, fleetTrend, stats } from "@/lib/mock-data";

const FleetMap = lazy(() => import("@/components/map/FleetMap").then(m => ({ default: m.FleetMap })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fleet Dashboard · HuluCart Tracking" },
      { name: "description", content: "Real-time GPS tracking and geofencing dashboard for heavy equipment rental fleet operations." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const maxTrend = Math.max(...fleetTrend.map(d => d.active));
  return (
    <AppShell title="Fleet Command Center" subtitle="Realtime overview of equipment, sites and geofence activity">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Equipment" value={stats.totalEquipment} icon={Truck} tone="primary" hint="Across 5 active sites" />
        <StatCard label="Active Now" value={stats.activeNow} icon={Activity} tone="success" delta="+2 vs yesterday" />
        <StatCard label="Geofences" value={stats.geofences} icon={Hexagon} hint="4 active · 1 disabled" />
        <StatCard label="Open Alerts" value={stats.openAlerts} icon={AlertTriangle} tone="destructive" hint="2 high severity" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Live Fleet Map</h2>
                <p className="text-base font-bold text-foreground">Addis Ababa Operations</p>
              </div>
              <Link to="/tracking" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                Open full tracking <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <Suspense fallback={<div className="h-[420px] animate-pulse rounded-lg bg-muted" />}>
              <FleetMap height="420px" />
            </Suspense>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fleet Activity · Last 7 Days</h2>
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded bg-primary" />Active</span>
                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-3 rounded bg-destructive" />Alerts</span>
              </div>
            </div>
            <div className="flex items-end gap-4 h-44">
              {fleetTrend.map(d => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full items-end gap-1">
                    <div
                      className="flex-1 rounded-t bg-primary transition-all"
                      style={{ height: `${(d.active / maxTrend) * 140}px` }}
                    />
                    <div
                      className="w-2 rounded-t bg-destructive"
                      style={{ height: `${(d.alerts / 4) * 60}px` }}
                    />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">{d.day}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Live Alerts</h2>
              <Link to="/alerts" className="text-xs font-semibold text-primary hover:underline">View all</Link>
            </div>
            <ul className="space-y-3">
              {alerts.slice(0, 4).map(a => (
                <li key={a.id} className="flex gap-3 rounded-lg border border-border p-3">
                  <div className={
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-md " +
                    (a.severity === "high" ? "bg-destructive/15 text-destructive" :
                     a.severity === "medium" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")
                  }>
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{a.equipmentName}</p>
                      <span className="text-[10px] text-muted-foreground">{a.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{a.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fleet Health</h2>
            <div className="space-y-4">
              <HealthRow icon={Gauge} label="Utilization" value={stats.utilization} suffix="%" tone="primary" />
              <HealthRow icon={Activity} label="Fleet Uptime" value={stats.fleetUptime} suffix="%" tone="success" />
              <HealthRow icon={Signal} label="GPS Coverage" value={94} suffix="%" tone="primary" />
            </div>
          </section>
        </div>
      </div>

      <section className="mt-6 rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Equipment Overview</h2>
          <Link to="/equipment" className="text-xs font-semibold text-primary hover:underline">Manage equipment</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Equipment</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Site</th>
                <th className="px-5 py-3">Operator</th>
                <th className="px-5 py-3">Speed</th>
                <th className="px-5 py-3">Battery</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {equipment.slice(0, 6).map(e => (
                <tr key={e.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-5 py-3">
                    <div className="font-semibold">{e.name}</div>
                    <div className="text-xs text-muted-foreground">{e.id}</div>
                  </td>
                  <td className="px-5 py-3">{e.type}</td>
                  <td className="px-5 py-3">{e.site}</td>
                  <td className="px-5 py-3">{e.operator}</td>
                  <td className="px-5 py-3">{e.speed} km/h</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 rounded-full bg-muted">
                        <div
                          className={"h-full rounded-full " + (e.battery > 50 ? "bg-success" : e.battery > 25 ? "bg-primary" : "bg-destructive")}
                          style={{ width: `${e.battery}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{e.battery}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3"><StatusBadge status={e.status} /></td>
                  <td className="px-5 py-3 text-muted-foreground">{e.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}

function HealthRow({ icon: Icon, label, value, suffix, tone }: { icon: any; label: string; value: number; suffix: string; tone: "primary" | "success" }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="inline-flex items-center gap-2 font-medium">
          <Icon className="h-4 w-4 text-muted-foreground" />
          {label}
        </span>
        <span className="font-bold">{value}{suffix}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={"h-full rounded-full " + (tone === "success" ? "bg-success" : "bg-primary")}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
