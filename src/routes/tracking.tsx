import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { equipment } from "@/lib/mock-data";
import { Search, Filter } from "lucide-react";

const FleetMap = lazy(() => import("@/components/map/FleetMap").then(m => ({ default: m.FleetMap })));

export const Route = createFileRoute("/tracking")({
  head: () => ({ meta: [{ title: "Live Tracking · HuluCart Fleet" }] }),
  component: Tracking,
});

function Tracking() {
  return (
    <AppShell title="Live Equipment Tracking" subtitle="Realtime GPS positions and geofence visualization">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <Suspense fallback={<div className="h-[640px] animate-pulse rounded-xl bg-muted" />}>
          <FleetMap height="640px" />
        </Suspense>
        <aside className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-4">
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search fleet…"
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-2 text-xs font-semibold hover:bg-muted">
              <Filter className="h-3.5 w-3.5" /> Filter by site & status
            </button>
          </div>
          <ul className="max-h-[540px] divide-y divide-border overflow-y-auto">
            {equipment.map(e => (
              <li key={e.id} className="flex cursor-pointer items-start gap-3 p-4 hover:bg-muted/40">
                <div className={
                  "mt-1 h-2.5 w-2.5 rounded-full " +
                  (e.status === "active" ? "bg-success" :
                   e.status === "alert" ? "bg-destructive" :
                   e.status === "offline" ? "bg-muted-foreground/60" : "bg-primary")
                } />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold">{e.name}</p>
                    <StatusBadge status={e.status} />
                  </div>
                  <p className="text-xs text-muted-foreground">{e.id} · {e.operator}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{e.site}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {e.lat.toFixed(4)}, {e.lng.toFixed(4)} · {e.speed} km/h
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </AppShell>
  );
}
