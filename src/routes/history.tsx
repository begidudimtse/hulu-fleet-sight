import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { gpsLogs } from "@/lib/mock-data";
import { Download, Calendar } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "Tracking History · HuluCart Fleet" }] }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <AppShell title="Tracking History" subtitle="Historical GPS logs and equipment activity timeline">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-muted">
            <Calendar className="h-4 w-4" /> Last 7 days
          </button>
          <select className="rounded-md border border-border bg-card px-3 py-2 text-sm">
            <option>All equipment</option>
            <option>Excavators</option>
            <option>Bulldozers</option>
            <option>Cranes</option>
          </select>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          <Download className="h-4 w-4" /> Export logs
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3">Log ID</th>
                  <th className="px-5 py-3">Equipment</th>
                  <th className="px-5 py-3">Event</th>
                  <th className="px-5 py-3">Coordinates</th>
                  <th className="px-5 py-3">Speed</th>
                  <th className="px-5 py-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {gpsLogs.map(l => (
                  <tr key={l.id} className="border-t border-border hover:bg-muted/30">
                    <td className="px-5 py-3 font-mono text-xs">{l.id}</td>
                    <td className="px-5 py-3">
                      <div className="font-semibold">{l.equipmentName}</div>
                      <div className="text-xs text-muted-foreground">{l.equipmentId}</div>
                    </td>
                    <td className="px-5 py-3">{l.event}</td>
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{l.lat.toFixed(5)}, {l.lng.toFixed(5)}</td>
                    <td className="px-5 py-3">{l.speed} km/h</td>
                    <td className="px-5 py-3 text-muted-foreground">{l.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Activity Timeline</h2>
          <ol className="relative space-y-5 border-l border-border pl-5">
            {gpsLogs.slice(0, 8).map((l, i) => (
              <li key={l.id} className="relative">
                <span className={
                  "absolute -left-[27px] mt-1 h-3 w-3 rounded-full border-2 border-card " +
                  (i === 0 ? "bg-primary" : "bg-muted-foreground/40")
                } />
                <p className="text-sm font-semibold">{l.event}</p>
                <p className="text-xs text-muted-foreground">{l.equipmentName}</p>
                <p className="text-[11px] text-muted-foreground">{l.time}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </AppShell>
  );
}
