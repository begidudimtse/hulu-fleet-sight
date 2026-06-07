import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BcWOBWpp.mjs";
import { S as StatusBadge } from "./StatusBadge-B10Pqu4v.mjs";
import { e as equipment } from "./mock-data-DKvKUEDy.mjs";
import { S as Search, F as Funnel } from "../_libs/lucide-react.mjs";
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
const FleetMap = reactExports.lazy(() => import("./FleetMap-B0D0Er9j.mjs").then((m) => ({
  default: m.FleetMap
})));
function Tracking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Live Equipment Tracking", subtitle: "Realtime GPS positions and geofence visualization", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_340px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[640px] animate-pulse rounded-xl bg-muted" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FleetMap, { height: "640px" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-xl border border-border bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search fleet…", className: "h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-2 text-xs font-semibold hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-3.5 w-3.5" }),
          " Filter by site & status"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "max-h-[540px] divide-y divide-border overflow-y-auto", children: equipment.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex cursor-pointer items-start gap-3 p-4 hover:bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2.5 w-2.5 rounded-full " + (e.status === "active" ? "bg-success" : e.status === "alert" ? "bg-destructive" : e.status === "offline" ? "bg-muted-foreground/60" : "bg-primary") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold", children: e.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: e.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            e.id,
            " · ",
            e.operator
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: e.site }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 font-mono text-[11px] text-muted-foreground", children: [
            e.lat.toFixed(4),
            ", ",
            e.lng.toFixed(4),
            " · ",
            e.speed,
            " km/h"
          ] })
        ] })
      ] }, e.id)) })
    ] })
  ] }) });
}
export {
  Tracking as component
};
