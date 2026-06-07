import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./AppShell-BcWOBWpp.mjs";
const cfg = {
  active: { label: "Active", cls: "bg-success/10 text-success border-success/30", dot: "bg-success" },
  idle: { label: "Idle", cls: "bg-muted text-foreground border-border", dot: "bg-muted-foreground" },
  offline: { label: "Offline", cls: "bg-foreground/5 text-muted-foreground border-border", dot: "bg-muted-foreground/60" },
  alert: { label: "Alert", cls: "bg-destructive/10 text-destructive border-destructive/30", dot: "bg-destructive" }
};
function StatusBadge({ status }) {
  const c = cfg[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-semibold", c.cls), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", c.dot) }),
    c.label
  ] });
}
export {
  StatusBadge as S
};
