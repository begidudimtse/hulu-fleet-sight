import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BcWOBWpp.mjs";
import { b as alerts } from "./mock-data-DKvKUEDy.mjs";
import { G as Gauge, W as WifiOff, e as MapPinOff, f as TriangleAlert, g as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const icons = {
  geofence: MapPinOff,
  offline: WifiOff,
  signal: WifiOff,
  speed: Gauge
};
function AlertsPage() {
  const open = alerts.filter((a) => !a.resolved);
  const resolved = alerts.filter((a) => a.resolved);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Alert Center", subtitle: "Geofence violations, offline equipment and GPS signal incidents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid grid-cols-2 gap-3 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Open", value: open.length, tone: "bg-destructive/10 text-destructive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "High Severity", value: open.filter((a) => a.severity === "high").length, tone: "bg-primary/15 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Resolved 24h", value: resolved.length, tone: "bg-success/15 text-success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Avg. Resolve Time", value: "14m", tone: "bg-muted text-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Active Alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border border-border bg-card px-3 py-1.5 hover:bg-muted", children: "All" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border border-destructive/40 bg-destructive/10 px-3 py-1.5 font-semibold text-destructive", children: "High" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border border-border bg-card px-3 py-1.5 hover:bg-muted", children: "Medium" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: alerts.map((a) => {
        const Icon = icons[a.type] ?? TriangleAlert;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 p-5 hover:bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg " + (a.severity === "high" ? "bg-destructive/15 text-destructive" : a.severity === "medium" ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: a.equipmentName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: a.equipmentId }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase " + (a.severity === "high" ? "bg-destructive text-destructive-foreground" : a.severity === "medium" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"), children: a.severity }),
              a.resolved && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                " Resolved"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-foreground", children: a.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              a.time,
              " · Alert ",
              a.id
            ] })
          ] }),
          !a.resolved && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-muted", children: "Acknowledge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground hover:opacity-90", children: "Resolve" })
          ] })
        ] }, a.id);
      }) })
    ] })
  ] });
}
function Stat({
  label,
  value,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 inline-flex h-8 items-center rounded-md px-2 text-xs font-semibold " + tone, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: value })
  ] });
}
export {
  AlertsPage as component
};
