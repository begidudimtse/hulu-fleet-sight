import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { geofences } from "@/lib/mock-data";
import { Plus, MapPin, Edit, Trash2, Circle as CircleIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/geofences")({
  head: () => ({ meta: [{ title: "Geofences · HuluCart Fleet" }] }),
  component: GeofencesPage,
});

function GeofencesPage() {
  const [radius, setRadius] = useState(600);
  return (
    <AppShell title="Geofence Management" subtitle="Define site boundaries and trigger location-based alerts">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Configured Geofences</h2>
            <span className="text-xs text-muted-foreground">{geofences.length} zones</span>
          </div>
          <ul className="divide-y divide-border">
            {geofences.map(g => (
              <li key={g.id} className="flex items-start gap-4 p-5 hover:bg-muted/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <CircleIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{g.name}</p>
                    <span className={
                      "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase " +
                      (g.active ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")
                    }>{g.active ? "Active" : "Disabled"}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{g.site} · {g.id}</p>
                  <div className="mt-2 grid grid-cols-3 gap-4 text-xs">
                    <div><span className="text-muted-foreground">Radius:</span> <strong>{g.radius} m</strong></div>
                    <div><span className="text-muted-foreground">Equipment:</span> <strong>{g.assigned}</strong></div>
                    <div className="font-mono text-muted-foreground">{g.lat.toFixed(4)}, {g.lng.toFixed(4)}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="rounded p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><Edit className="h-4 w-4" /></button>
                  <button className="rounded p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Create Geofence</h2>
          <p className="mb-4 text-xs text-muted-foreground">Draw a circular boundary or define by coordinates.</p>
          <form className="space-y-4">
            <Field label="Zone name"><input className="input" placeholder="e.g. Bole Tower Site" /></Field>
            <Field label="Assigned site">
              <select className="input">
                <option>Bole Tower Project</option>
                <option>Megenagna Road Works</option>
                <option>Kality Logistics Hub</option>
                <option>Akaki Quarry</option>
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Latitude"><input className="input" placeholder="9.0108" /></Field>
              <Field label="Longitude"><input className="input" placeholder="38.7613" /></Field>
            </div>
            <Field label={`Radius: ${radius} m`}>
              <input
                type="range" min={100} max={2000} step={50}
                value={radius} onChange={e => setRadius(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)]"
              />
            </Field>
            <Field label="Shape">
              <div className="flex gap-2">
                <button type="button" className="flex-1 rounded-md border border-primary bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">Circle</button>
                <button type="button" className="flex-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted">Polygon</button>
              </div>
            </Field>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <Plus className="h-4 w-4" /> Create Geofence
            </button>
          </form>
          <div className="mt-5 rounded-lg border border-dashed border-border bg-muted/30 p-3 text-xs text-muted-foreground">
            <MapPin className="mb-1 h-4 w-4 text-primary" />
            Tip: use the Live Tracking map to drop a pin and convert it into a zone.
          </div>
        </aside>
      </div>

      <style>{`
        .input { width:100%; height:38px; border:1px solid var(--color-input); background:var(--color-background); border-radius:6px; padding:0 10px; font-size:13px; outline:none; }
        .input:focus { box-shadow: 0 0 0 2px var(--color-ring); }
      `}</style>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
