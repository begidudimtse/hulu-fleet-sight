import { cn } from "@/lib/utils";
import type { EquipmentStatus } from "@/lib/mock-data";

const cfg: Record<EquipmentStatus, { label: string; cls: string; dot: string }> = {
  active: { label: "Active", cls: "bg-success/10 text-success border-success/30", dot: "bg-success" },
  idle: { label: "Idle", cls: "bg-muted text-foreground border-border", dot: "bg-muted-foreground" },
  offline: { label: "Offline", cls: "bg-foreground/5 text-muted-foreground border-border", dot: "bg-muted-foreground/60" },
  alert: { label: "Alert", cls: "bg-destructive/10 text-destructive border-destructive/30", dot: "bg-destructive" },
};

export function StatusBadge({ status }: { status: EquipmentStatus }) {
  const c = cfg[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-semibold", c.cls)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
      {c.label}
    </span>
  );
}
