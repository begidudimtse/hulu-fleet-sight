import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { equipment } from "@/lib/mock-data";
import { Plus, Search, Edit, Trash2, Download } from "lucide-react";

export const Route = createFileRoute("/equipment")({
  head: () => ({ meta: [{ title: "Equipment · HuluCart Fleet" }] }),
  component: EquipmentPage,
});

function EquipmentPage() {
  return (
    <AppShell title="Equipment Management" subtitle="Add, edit and monitor every machine in the rental fleet">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search by name, ID, operator…"
            className="h-10 w-80 rounded-md border border-input bg-card pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted">
            <Download className="h-4 w-4" /> Export CSV
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            <Plus className="h-4 w-4" /> Add Equipment
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Equipment</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Serial</th>
                <th className="px-5 py-3">Operator</th>
                <th className="px-5 py-3">Site</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map(e => (
                <tr key={e.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-5 py-3 font-mono text-xs">{e.id}</td>
                  <td className="px-5 py-3 font-semibold">{e.name}</td>
                  <td className="px-5 py-3">
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs">{e.type}</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{e.serial}</td>
                  <td className="px-5 py-3">{e.operator}</td>
                  <td className="px-5 py-3">{e.site}</td>
                  <td className="px-5 py-3"><StatusBadge status={e.status} /></td>
                  <td className="px-5 py-3 text-right">
                    <div className="inline-flex gap-1">
                      <button className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"><Edit className="h-4 w-4" /></button>
                      <button className="rounded p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
          <span>Showing 1–{equipment.length} of {equipment.length}</span>
          <div className="flex gap-1">
            <button className="rounded border border-border px-2 py-1 hover:bg-muted">Prev</button>
            <button className="rounded border border-border bg-muted px-2 py-1 font-semibold">1</button>
            <button className="rounded border border-border px-2 py-1 hover:bg-muted">Next</button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
